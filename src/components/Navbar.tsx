
import styled from 'styled-components';
import logo from '../assets/banner-ico.png';

const NavbarStyled=styled.header`
background-color:rgb(23,23,23);
color:white;
display:flex;
height:70px;
align-items:center;
`;
export const Navbar = () => {
    
  return (
    <div>
        <NavbarStyled>
            <img src={logo} alt="logo" height={40} width={40} />
            Spotify
        </NavbarStyled>
    </div>
   
  )
}
