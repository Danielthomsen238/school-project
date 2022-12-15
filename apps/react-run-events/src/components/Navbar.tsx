import { Link } from 'react-router-dom';
import { ReactComponent as ListIcon } from '../assets/images/list.svg';
import { ReactComponent as SearchIcon } from '../assets/images/search.svg';
import { ReactComponent as AddIcon } from '../assets/images/add.svg';
import { ReactComponent as HomeIcon } from '../assets/images/Home.svg';
import { ReactComponent as ProfilIcon } from '../assets/images/profil.svg';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <div className="nav_left">
          <li>
            <Link to="/home">
              <ListIcon />
            </Link>
          </li>
          <li>
            <Link className="nav-link active" to="/nextPage">
              <SearchIcon />
            </Link>
          </li>
        </div>
        <li>
          <div className="add">
            <Link className="nav-link active" to="/nextPage">
              <AddIcon />
            </Link>
          </div>
        </li>
        <div className="nav_right">
          <li>
            <Link className="nav-link active" to="/nextPage">
              <HomeIcon />
            </Link>
          </li>
          <li>
            <Link className="nav-link active" to="/nextPage">
              <ProfilIcon />
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
