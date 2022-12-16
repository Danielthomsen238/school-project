import { ReactComponent as BotIcon } from '../assets/images/bot.svg';
import { ReactComponent as TopIcon } from '../assets/images/top.svg';
import { FrontPageAnim } from '../assets/Styles/StyledComponents';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Animation = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/home');
  }, 1500);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'linear', duration: 1 }}
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

export default Animation;
