import { motion } from 'framer-motion';

const NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: 'linear' }}
    >
      <h1>Hello</h1>
    </motion.div>
  );
};

export default NextPage;
