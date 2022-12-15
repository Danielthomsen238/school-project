import { motion } from 'framer-motion';

const FrontPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2, type: 'linear' }}
    >
      <h1>Hello</h1>
    </motion.div>
  );
};

export default FrontPage;
