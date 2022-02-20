
import styled from 'styled-components';
import logo from '../assets/banner-ico.png';

const Header = styled.header`
     align-items:center;
     background-color:${props => props.theme.colors.grayDark};
     color:white;
     display:flex;
     height:70px;
`;

const Typography=styled.h1`
  font-size:1.5rem;
`;
export const Navbar = ({title}) => {

  return (
    <div>
      <Header>
        <img src={logo} alt="logo" height={40} width={40} />
        <Typography>{title}</Typography>
      </Header>
    </div>

  )
}
