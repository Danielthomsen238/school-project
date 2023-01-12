import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyledMain, StyledProducts } from '../src/styles/StyledComponents';
import Image from 'next/image';
import ForumIcon from '@mui/icons-material/Forum';
import { useRouter } from 'next/router';

interface Categories {
  id: number;
  title: string;
  reguest: {
    type: string;
    url: string;
  };
}
interface CategoriesProducts {
  id: number;
  image: {
    filename: string;
    fullpath: string;
  };
  num_comments: number;
  price: string;
  request: {
    type: string;
    url: string;
  };
  teaser: string;
  title: string;
}
const Products = () => {
  const [categories, getCategories] = useState<Categories[]>([]);
  const [products, getProducts] = useState<CategoriesProducts[]>([]);
  const [itemClicked, setItemClicked] = useState<number>();
  const router = useRouter();

  useEffect(() => {
    axios
      .get('https://api.mediehuset.net/bakeonline/categories')
      .then((response) => {
        const data = response.data.items;
        getCategories(data);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.mediehuset.net/bakeonline/categories/${
          itemClicked ? itemClicked : 1
        }`
      )
      .then((response) => {
        const data = response.data.item.products;
        getProducts(data);
      });
  }, [itemClicked]);
  console.log(products);
  return (
    <StyledMain bgColor={''} activ={itemClicked} flex={true}>
      <h1 className="product_h1">Vores elskede bagværk</h1>
      <p className="product_sub_p">
        Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
        har gennemgået forandringer, når nogen har tilføjet humor eller
        tilfældige ord, som på ingen måde ser ægte ud
      </p>
      <section className="product_section">
        <ul>
          {categories &&
            categories.map((item, idx) => {
              return (
                <li onClick={() => setItemClicked(item.id)} key={idx}>
                  {item.title.toUpperCase()}
                </li>
              );
            })}
        </ul>
        <StyledProducts>
          <div className="product_container">
            {products &&
              products.map((item, idx) => {
                if (idx < 8) {
                  return (
                    <div className="product_item" key={idx}>
                      <div className="product_image">
                        <Image
                          src={item.image.fullpath}
                          alt="news_image"
                          width={200}
                          height={200}
                          layout="fixed"
                        />
                      </div>
                      <div className="product_detail">
                        <p className="product_com">
                          {item.num_comments} <ForumIcon />
                        </p>
                        <h3>{item.title.substring(0, 14)}...</h3>
                        <p className="product_teaser">
                          {item.teaser.substring(0, 60)}...
                        </p>
                      </div>
                      <button
                        onClick={() => router.push(`/product/${item.id}`)}
                      >
                        SE MERE
                      </button>
                    </div>
                  );
                }
              })}
          </div>
        </StyledProducts>
      </section>
    </StyledMain>
  );
};

export default Products;
