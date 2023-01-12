import {
  StyledMain,
  StyledNews,
  StyledNewsLetter,
  StyledProducts,
} from '../src/styles/StyledComponents';
import axios from 'axios';
import { useState, useEffect } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import ForumIcon from '@mui/icons-material/Forum';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface News {
  id: number;
  image: string;
  request: {
    type: string;
    url: string;
  };
  teaser: string;
  title: string;
}

interface Products {
  category_id: number;
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

const Index = () => {
  const [news, getNews] = useState<News[]>([]);
  const [products, getProducts] = useState<Products[]>([]);
  const [email, setEmail] = useState<string>('');

  const router = useRouter();
  useEffect(() => {
    axios.get('https://api.mediehuset.net/bakeonline/news').then((response) => {
      const data = response.data.items;
      getNews(data);
    });
    axios
      .get('https://api.mediehuset.net/bakeonline/products')
      .then((response) => {
        const data = response.data.items;
        getProducts(data);
      });
  }, []);
  console.log(products);
  const submitNews = () => {
    const payload = {
      email,
    };
    axios
      .post('https://api.mediehuset.net/bakeonline/newsletter', payload)
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <StyledMain bgColor="" activ={0} flex={false}>
      <section className="news_section">
        <h1 className="news_h1">Vi skaber lækkert! brød</h1>
        <p className="news_p">
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
        <StyledNews>
          {news &&
            news.map((item, idx) => {
              if (idx < 3) {
                return (
                  <div className="news" key={idx}>
                    <div className="news_image_wrapper">
                      <Image
                        src={item.image}
                        alt="news_image"
                        width={200}
                        height={200}
                        layout="fixed"
                      />
                    </div>
                    <h3>{item.title.toUpperCase()}</h3>
                    <p>{item.teaser}</p>
                  </div>
                );
              }
            })}
        </StyledNews>
      </section>
      <StyledNewsLetter>
        <div>
          <h3>Tilmeld dig vores nyhedsbrev</h3>
          <p>
            Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
            udgaver
          </p>
          <div className="signup_container">
            <div className="email_icon">
              <EmailIcon />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Indtast din email..."
            />
            <button onClick={() => submitNews()}>TILMELD</button>
          </div>
        </div>
      </StyledNewsLetter>
      <StyledProducts>
        <h3 className="product_h3">Nyeste bagværk</h3>
        <p className="product_p">
          Der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste
          udgaver har gennemgået forandringer, når nogen har tilføjet humor
          eller tilfældige ord, som på ingen måde ser ægte ud
        </p>
        <div className="product_container">
          {products &&
            products.map((item, idx) => {
              if (idx < 8) {
                return (
                  <div className="product_item" key={idx}>
                    <div className="product_image">
                      <Image
                        src={item.image.fullpath}
                        alt="product_image"
                        width={200}
                        height={200}
                        layout="responsive"
                        loading="lazy"
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
                    <button onClick={() => router.push(`/product/${item.id}`)}>
                      SE MERE
                    </button>
                  </div>
                );
              }
            })}
        </div>
      </StyledProducts>
    </StyledMain>
  );
};

export default Index;
