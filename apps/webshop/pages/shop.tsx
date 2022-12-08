import { StyledShopContainer } from '../src/styles/StyledComponents';
import Item from '../components/Item';
import rom from '../src/images/rom.jpg';
import vodka from '../src/images/vodka.jpg';
import whisky from '../src/images/whisky.jpg';
import { useState } from 'react';
import { Items, Data } from '../helpers/interface';

const items: Items[] = [
  {
    src: rom.src,
    price: 150,
    title: 'Captain Morgen',
    info: 'caecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error',
  },
  {
    src: whisky.src,
    price: 300,
    title: 'Whisky',
    info: 'caecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error',
  },
  {
    src: vodka.src,
    price: 60,
    title: 'Slave Vodka',
    info: 'caecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error',
  },
];

const Shop = () => {
  const [shoppingData, setShoppingData] = useState<Data>({
    price: 0,
    antal: 0,
    title: '',
  });

  const handleChange = (title: string, price: number, antal: number) => {
    setShoppingData({
      title,
      price,
      antal,
    });
  };

  return (
    <StyledShopContainer>
      {items.map((item, idx) => {
        return (
          <Item
            key={idx}
            Image={item.src}
            title={item.title}
            info={item.info}
            price={item.price}
            userInput={shoppingData}
            change={handleChange}
          />
        );
      })}
    </StyledShopContainer>
  );
};

export default Shop;
