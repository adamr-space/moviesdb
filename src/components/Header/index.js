import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb-logo.svg";
import { Link } from "react-router-dom";

//Styles
import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to={`${process.env.PUBLIC_URL}`}>
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
    </Content>
  </Wrapper>
);

export default Header;
