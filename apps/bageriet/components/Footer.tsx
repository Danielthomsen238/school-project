import { StyledFooter } from '../src/styles/StyledComponents';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Footer = () => {
  const isBrowser = () => typeof window !== 'undefined';

  const scrollToTop = () => {
    console.log('hello');
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <StyledFooter>
      <div className="footer_btn">
        <a onClick={() => scrollToTop()}>
          <KeyboardArrowUpIcon />
        </a>
      </div>
      <p className="footer_p">bageriet</p>
      <p className="footer_sub_p">
        der er mange tilgængelige udgaver af Lorem Ipsum, men de fleste udgaver
        har gennemgået forandringer.
      </p>
      <div className="footer_btm-border" />
    </StyledFooter>
  );
};

export default Footer;
