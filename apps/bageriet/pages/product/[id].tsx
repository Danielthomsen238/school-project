import {
  StyledBreadcrumb,
  StyledDetails,
  StyledMain,
} from 'apps/bageriet/src/styles/StyledComponents';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Details {
  product: {
    amount: number;
    description: string;
    duration: number;
    id: number;
    image: {
      filename: string;
      fullpath: string;
    };
    ingredients: {
      amount: number;
      ingredient_title: string;
      unit_abbr: string;
      unit_name: string;
    }[];
    num_comments: number;
    teaser: string;
    title: string;
    category: {
      id: number;
      title: string;
    };
  };
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  try {
    const result = await axios.get(
      `https://api.mediehuset.net/bakeonline/products/${id}`
    );
    const data = result.data.item;
    return {
      props: {
        product: data,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

const ProductDetail = ({ product }: Details) => {
  const [categoryId, getCategoryId] = useState([]);
  const [showCategory, setShow] = useState<boolean>(false);
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/bakeonline/products`)
      .then((response) => {
        const data = response.data.items;
        data.forEach((item) => {
          if (item.id === product.id) {
            getCategoryId(item.category_id);
          }
        });
      });
  }, [product.id]);
  useEffect(() => {
    axios
      .get(`https://api.mediehuset.net/bakeonline/categories`)
      .then((response) => {
        const data = response.data.items;
        console.log(response);
        data.forEach((items) => {
          if (categoryId === items.id) {
            product.category = {
              id: items.id,
              title: items.title,
            };
            setShow(true);
          }
        });
      });
  }, [categoryId, product]);
  console.log(product);

  return (
    <StyledMain bgColor={'#f1f1f17e'} flex={false} activ={0}>
      <StyledBreadcrumb>
        <p>
          <span>
            <Link href="/products">Produkter</Link> &gt;
          </span>{' '}
          {product.title}
        </p>
      </StyledBreadcrumb>
      <StyledDetails>
        <div className="detail_title">
          <h1>{product.title.toUpperCase()}</h1>
          {showCategory && <p>{product.category.title.toUpperCase()}</p>}
        </div>
        <button>
          LIKE! <FavoriteBorderIcon />
        </button>
      </StyledDetails>
      <StyledDetails>
        <div className="detail">
          <div className="detail_image">
            <Image
              src={product.image.fullpath}
              alt="news_image"
              width={350}
              height={350}
              layout="fixed"
            />
          </div>
          <p className="text_wrap">{product.description}</p>
        </div>
        <div className="ingredienser">
          <h3>Ingredienser</h3>
          <ul>
            {product.ingredients.map((item, idx) => {
              return (
                <li key={idx}>
                  {item.amount}
                  {item.unit_abbr}. {item.ingredient_title}
                </li>
              );
            })}
          </ul>
        </div>
      </StyledDetails>
    </StyledMain>
  );
};

export default ProductDetail;
