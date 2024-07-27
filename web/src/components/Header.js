import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
            <Icon src="/images/toilet-icon.png"></Icon>
            <LoginButton>Log In/Sign Up</LoginButton>
        </Nav>
    );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Icon = styled.img`
    width: 50px;
`;

const LoginButton = styled.button`
    padding: 10px 20px;
    border-radius: 15px;
    font-size: 1em;
    letter-spacing: 1px;
    background-color: #004aad;
    color: #f9f9f9;
    transition: all 500ms ease-in-out;

    &:hover {
        transform: scale(1.2);
    }
`;

export default Header;