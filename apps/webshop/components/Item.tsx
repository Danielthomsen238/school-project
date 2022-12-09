import { StyledCard } from '../src/styles/StyledComponents';
import Image from 'next/image';
import { Data } from '../helpers/interface';
import { useState } from 'react';
import { useCart } from '../helpers/useCart';

interface Props {
  Image: string;
  price: number;
  title: string;
  info: string;
}

const Item = (props: Props) => {
  const { title, info, price } = props;
  const [shopData, setShopData] = useState<Data>({
    title: '',
    price: 0,
    antal: 0,
  });
  const { Cartitems, addItem, reset } = useCart();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShopData({ title, price, antal: parseInt(event.target.value) });
  };
  console.log(shopData);
  const handleClick = () => {
    if (shopData.antal != 0) {
      addItem(shopData.title, shopData.price, shopData.antal);
      setShopData({ title: '', price: 0, antal: 0 });
    }
  };
  console.log(Cartitems);
  return (
    <StyledCard>
      <Image src={props.Image} alt="Alkohol" width={350} height={350} />
      <h3>{title}</h3>
      <p>{info}</p>
      <p>{price} DK</p>
      <input
        type="number"
        min="0"
        value={shopData.antal}
        onChange={handleChange}
      />
      <button onClick={() => handleClick()}>Tilføje til Kurve</button>
    </StyledCard>
  );
};

export default Item;
