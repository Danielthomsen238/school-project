import { motion } from 'framer-motion';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import {
  StyledP,
  StyledHome,
  StyledDistance,
} from '../assets/Styles/StyledComponents';
import Event from '../components/Event';
const events: {
  address: string;
  date: string;
  type: string;
  runners: number;
}[] = [
  {
    address: 'Grendhøj vej, 2 , 8620',
    date: '07-12-2023 15:00',
    type: '50+',
    runners: 23,
  },
  {
    address: 'Grendhøj vej, 2 , 8620',
    date: '07-12-2023 15:00',
    type: 'X',
    runners: 40,
  },
  {
    address: 'Grendhøj vej, 2 , 8620',
    date: '07-12-2023 20:00',
    type: '21,1',
    runners: 21,
  },
  {
    address: 'Grendhøj vej, 2 , 8620',
    date: '08-12-2023 10:00',
    type: '42,2',
    runners: 20,
  },
];
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: [100, 0, 0] }}
      exit={{ opacity: 0, x: [0, 250, 250] }}
      transition={{ duration: 1, type: 'linear' }}
    >
      <StyledHome>
        <div className="logo">
          <Logo />
        </div>
        <section>
          <StyledP>Distance</StyledP>
          <StyledDistance>
            <div>50+</div>
            <div>42,2</div>
            <div>21,1</div>
            <div>X</div>
          </StyledDistance>
        </section>
        <section className="events">
          <StyledP>Løb idag</StyledP>
          {events.map(() => {
            return <Event />;
          })}
        </section>
      </StyledHome>
    </motion.div>
  );
};

export default Home;
