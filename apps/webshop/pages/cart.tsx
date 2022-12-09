import { useState } from 'react';
import { useCart } from '../helpers/useCart';
import { StyledCartContainer } from '../src/styles/StyledComponents';

const Cart = () => {
  const { Cartitems, addItem, removeItem, reset } = useCart();
  const [input, setInput] = useState<number>(0);
  const handleChange = (e) => {
    setInput(parseInt(e.target.value));
  };
  return (
    <StyledCartContainer>
      <h2>Inkøbs kurve</h2>
      {Cartitems.map((item, idx) => {
        return (
          <div key={idx}>
            <h4>{item.title}</h4>
            <p>Antal: {item.antal}</p>
            <button onClick={() => removeItem(idx)}>Fjern 1</button>
            <p>price for 1: {item.price} kr</p>
            <p>Total price: {item.price * item.antal} kr</p>
          </div>
        );
      })}
    </StyledCartContainer>
  );
};

export default Cart;
