import {
  StyledBreadcrumb,
  StyledComCount,
  StyledComments,
  StyledDetails,
  StyledMain,
} from 'apps/bageriet/src/styles/StyledComponents';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CreateIcon from '@mui/icons-material/Create';
import ForumIcon from '@mui/icons-material/Forum';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import profileImage from '../../src/images/blank.jpg';
import * as moment from 'moment';
import 'moment/locale/da';
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
interface Comments {
  id: number;
  title: string;
  comment: string;
  user_id: number;
  created: number;
  user: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
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
  const { data: session, status } = useSession();
  console.log(status);
  const [count, setCount] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [categoryId, getCategoryId] = useState([]);
  const [comments, getComments] = useState<Comments[]>([]);
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
  useEffect(() => {
    const header = {
      headers: { authorization: `Bearer ${session?.user.token}` },
    };
    axios
      .get(
        `https://api.mediehuset.net/bakeonline/comments/${product.id}`,
        header
      )
      .then((response) => {
        const data = response.data.items;
        getComments(data);
      });
  }, [product.id, session?.user.token]);

  const nextComments = () => {
    if (count < comments.length - 3) {
      setCount((state) => state + 3);
      setPage((state) => state + 1);
    }
  };
  const prevComments = () => {
    if (count > 0) {
      setCount((state) => state - 3);
      setPage((state) => state - 1);
    }
  };
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
      {status === 'authenticated' ? (
        <StyledComments>
          <StyledComCount>
            <h3>Kommentar</h3>
            <p>
              {product.num_comments} <ForumIcon />
            </p>
          </StyledComCount>
          <div className="submit_comment">
            <div>
              <CreateIcon />
              <input type="text" placeholder="Fortæl os hvad du synes....." />
            </div>
            <button>Indsæt</button>
          </div>
          {comments &&
            comments.map((item, idx) => {
              const dateString = moment
                .unix(item.created)
                .format('dddd, Do MMM YYYY, h:mm:ss');
              if (idx < 3 + count && idx >= 0 + count) {
                return (
                  <div className="comment_container" key={idx}>
                    <div className="profile_image">
                      <Image
                        src={profileImage.src}
                        alt="profile_image"
                        width={200}
                        height={150}
                        layout="fixed"
                      />
                    </div>
                    <div>
                      <h3 className="profil_name">
                        {item.user.firstname} {item.user.lastname}
                      </h3>
                      <p className="time_of_comment">
                        {dateString.charAt(0).toUpperCase() +
                          dateString.substring(1)}
                      </p>
                      <p className="comment">{item.comment}</p>
                    </div>
                  </div>
                );
              }
            })}
          <div className="pages">
            {count > 0 ? (
              <button onClick={() => prevComments()}>&lt;</button>
            ) : null}
            <p>{page}</p>
            {count < comments.length - 3 ? (
              <button onClick={() => nextComments()}>&gt;</button>
            ) : null}
          </div>
        </StyledComments>
      ) : (
        <StyledComCount>
          <h3>Kommentar</h3>
          <p>
            {product.num_comments} <ForumIcon />
          </p>
        </StyledComCount>
      )}
    </StyledMain>
  );
};

export default ProductDetail;
