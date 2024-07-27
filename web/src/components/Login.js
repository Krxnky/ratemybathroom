import styled from "styled-components";

const Login = (props) => {
    return (
        <Container>
            <Content>
                <BgImage />
                <CTA>
                    <Logo src="/images/RMBLogo.png"></Logo>
                    <SearchBox>
                        <SearchLabel>Start Searching:</SearchLabel>
                        <SearchBar placeholder="Bathrooms near me"></SearchBar>
                    </SearchBox>
                </CTA>
            </Content>
        </Container>
    )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/background-image.png");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`; 

const CTA = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;    
`;

const Logo = styled.img`
    width: 70%;
    max-width: 768px;
    transition: all 500ms ease-in-out;
    z-index: 1;
    &:hover {
        scale: 1.2;
    }
`;

const SearchBox = styled.div`
    width: 70%;
    max-width: 768px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 0px;
    background-color: hsla(0, 100%, 100%, 0.75);
    padding: 40px;
    border-radius: 50px;
    transition: all 500ms ease-in-out;
    
    &:hover {
        scale: 1.2;
    }
`;

const SearchLabel = styled.h3`
    width: 100%;
    font-size: 36px;

    @media only screen and (max-width: 768px) {
        font-size: 28px;
    }
`;

const SearchBar = styled.input`
    width: 80%;
    max-width: 456px;
    height: 3.5em;
    border-radius: 15px;
    margin-bottom: 50px;
    font-size: 1.2em;
    padding-left: 20px; 
`;

export default Login;