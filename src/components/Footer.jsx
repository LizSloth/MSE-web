import styled from "styled-components";

const Container = styled.div`
    height: 92px;
    background-color: #181C62;
    font-family: Lato;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 10px 120px;
    white-space: pre-wrap;
    text-align: center;
    color: #fff;
`

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <div>
                    {`@2023 Nanyang Technological University \nSchool of Material Science and Engineering`}
                </div>
            </Wrapper>
        </Container>
    );
}

export default Footer;