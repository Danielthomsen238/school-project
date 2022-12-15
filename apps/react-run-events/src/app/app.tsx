import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AnimatedRoutes from '../components/AnimatedRoutes';
import '../assets/Styles/GlobalStyles.css';

export function App() {
  return (
    <>
      <Navbar />
      <AnimatedRoutes />
    </>
  );
}

export default App;
