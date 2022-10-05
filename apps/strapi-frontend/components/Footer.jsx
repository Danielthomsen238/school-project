import { StyledFooter } from '../src/styles/styledcomponents';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <FacebookIcon style={{ fontSize: 50 }} />
        <TwitterIcon style={{ fontSize: 50 }} />
        <InstagramIcon style={{ fontSize: 50 }} />
        <YouTubeIcon style={{ fontSize: 50 }} />
      </div>
    </StyledFooter>
  );
};

export default Footer;
