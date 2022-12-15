import { ReactComponent as BotIcon } from '../assets/images/bot.svg';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { ReactComponent as TopIcon } from '../assets/images/top.svg';
import { FrontPageAnim, StyledHome } from '../assets/Styles/StyledComponents';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', duration: 1 }}
    >
      <>
        <FrontPageAnim>
          <div className="svg_container">
            <div className="top_part">
              <TopIcon />
            </div>
            <div className="bot_part">
              <BotIcon />
            </div>
            <div className="circle" />
          </div>
          <div className="black_bg" />
          <StyledHome>
            <Logo />
          </StyledHome>
        </FrontPageAnim>
      </>
    </motion.div>
  );
};

export default Home;
