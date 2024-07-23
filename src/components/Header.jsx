import styled from "styled-components";
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 92px;
    background-color: #181C62;
    font-family: Lato;
`

const Wrapper = styled.div`
    padding: 10px 120px;
    display: flex;
    justify-content: space-between;
`

const Left = styled.div`
    display: flex;
    align-items: center;
`

const Right = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

const Button = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D71440;
    padding: 10px 20px;
    height: 30px;
    cursor: pointer;
`

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Link style={{textDecoration: 'none'}} to="/"><img src={Logo} alt="logo" /></Link>
                </Left>
                <Right>
                    <Link style={{textDecoration: 'none'}} to="course-map"><Button>Course Map</Button></Link>
                </Right>
            </Wrapper>
        </Container>
    );
}

export default Header;