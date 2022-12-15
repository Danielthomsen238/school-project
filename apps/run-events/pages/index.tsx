import { ReactComponent as BotIcon } from '../src/images/bot.svg';
import { ReactComponent as TopIcon } from '../src/images/top.svg';
import { FrontPageAnim } from '../src/styles/StyledComponents';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', duration: 3 }}
    >
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
      </FrontPageAnim>
    </motion.div>
  );
};

export default Index;
