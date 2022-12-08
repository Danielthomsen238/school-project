import { StyledCard } from '../src/styles/StyledComponents';
import Image from 'next/image';
import { Data } from '../helpers/interface';

interface Props {
  Image: string;
  price: number;
  title: string;
  info: string;
  userInput: Data;
  change?: (title: string, price: number, antal: number) => void;
}

const Item = (props: Props) => {
  return (
    <StyledCard>
      <Image src={props.Image} alt="Alkohol" width={350} height={350} />
      <h3>{props.title}</h3>
      <p>{props.info}</p>
      <p>{props.price} DK</p>
      <input
        type="number"
        min="0"
        value={props.userInput.antal}
        onChange={(event) =>
          props.change(props.title, props.price, parseInt(event.target.value))
        }
      />
      <button>Tilføje til Kurve</button>
    </StyledCard>
  );
};

export default Item;
