import styled from 'styled-components';
import Home1 from '../images/home-1.png';
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 30px 120px;
    font-family: Lato;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    text-align: center;
`

const SubWrapper = styled.div`
    display: flex;
    gap: 30px;
`

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: right;
    word-wrap: break-word;
    justify-content: space-between;
    align-items: flex-end;
`

const Button = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #D71440;
    padding: 15px 20px;
    height: 30px;
    cursor: pointer;
    font-size: 1.5em;
`

const NavigationWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin: 30px 0;
`

const Navigation = styled.div`
    background-color: #0054A6;
    color: #fff;
    border-radius: 40px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
`

const Home = () => {
    return (
        <Container>
            <Wrapper>
                <h1>NTU School of Material Science and Engineering (MSE)</h1>
                <SubWrapper>
                    <LeftWrapper>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ fontWeight: '700', fontSize: '2.5em' }}>Embark on a cutting-edge journey at NTU's School of Materials Science and Engineering,</div>
                            <div style={{ fontSize: '1.2em', fontWeight: '300', whiteSpace: 'pre-wrap' }}>{`where revolutionary materials innovation meets \n world-class education and research excellence.`}</div>
                        </div>
                            <Link to="course-map" style={{textDecoration: 'none', style: 'inherit', width: 'fit-content'}}>
                        <Button>
                                {`Find out more >>`}
                        </Button>
                            </Link>
                    </LeftWrapper>
                    <img style={{height: '320px'}} src={Home1} alt="home-1" />
                </SubWrapper>
                <NavigationWrapper>
                    <Link to="course-map" style={{textDecoration: 'none', width: '25%'}}>
                        <Navigation>
                            Curriculum
                        </Navigation>
                    </Link>
                    <Link to="course-content" style={{textDecoration: 'none', width: '25%'}}>
                        <Navigation>
                            Course Content
                        </Navigation>
                    </Link>
                </NavigationWrapper>
            </Wrapper>
        </Container>
    );
}

export default Home;