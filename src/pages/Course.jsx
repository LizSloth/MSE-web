import styled from "styled-components";
import bottomArrow from "../images/bottom-arrow.svg";
import { useState } from "react";
import Data from "../completed_code.json";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 30px 120px;
    font-family: Lato;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Course = () => {
    return (
        <Container>
            <Wrapper>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <h1 style={{fontWeight: '300'}}>Course content</h1>
                    <div>Course content for School of Material Science and Engineering NTU</div>
                </div>
                <ContentWrapper>
                    {[...Array(4)].map((_, i) => (
                        <Content 
                            key={i + 'content'}
                            year={i + 1} 
                            courses={Data["admission"]["y1"][2*i].concat(Data["admission"]["y1"][2*i + 1])} 
                        />
                    ))}
                </ContentWrapper>
            </Wrapper>
        </Container>
    );
}

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: max-height 0.5s ease-out;
    margin-bottom: 15px;
`

const ContentHeader = styled.div`
    font-size: 2em;
    font-weight: 700;
    text-align: left;
    background-color: #181C62;
    color: #fff;
    padding: 10px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.5em;
    margin-bottom: 10px;
`

const ContentCourse = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr 0.6fr 0.2fr;
    gap: 15px;
    font-size: 1.3em;
    padding: ${props => props.isvisible ? '10px 30px' : '0'};
    height: ${props => props.isvisible ? 'fit-content' : '0'};
    opacity: ${props => props.isvisible ? '1' : '0'};
    transition: all 0.25s ease;
    border: 1px solid black;
`

const CourseTitle = styled.div`
    color: #E81558;
    align-self: center;
    word-wrap: break-word;
`

const CourseProperty = styled.div`
    align-self: center;
    text-overflow: ellipsis;
    text-align: 'center';
`


const Content = ({ year, courses }) => {
    const [isContentVisible, setIsContentVisible] = useState(true);

    const toggleContent = () => {
        setIsContentVisible(!isContentVisible);
    };

    return (
        <ContentContainer>
            <ContentHeader>
                <div>Year {year}</div>
                <img onClick={toggleContent} style={{cursor: 'pointer'}} src={bottomArrow} alt="arrow" />
            </ContentHeader>
            <ContentCourse style={{backgroundColor: '#181C62', color: '#fff'}} isvisible={isContentVisible} >
                <CourseProperty>{`Course`}</CourseProperty>
                <CourseProperty>{`Type`}</CourseProperty>
                <CourseProperty>{'Semester'}</CourseProperty>
                <CourseProperty>{'AUs'}</CourseProperty>
            </ContentCourse>
            {courses.map((course, idx) => {
                const courseItem = Data["courses"].filter(item => item.code === course)[0];
                let title = courseItem?.title || "";
                let type = courseItem?.type;
                let aus = courseItem?.aus;
                let sem = courseItem?.semester;
                let link;

                if (course.substring(0, 2) === 'CC' || course.substring(0, 2) === 'ML') {
                    link = courseItem?.link
                } else if ('content' in courseItem) {
                    link = '/' + course;
                } else {
                    link = undefined;
                }

                if (sem === 0) {
                    sem = 'Both';
                } else if (sem === 999) {
                    sem = ''
                }

                if (course === "PH1011") {
                    course = course + "/PH1012"
                    title = title + "/Physics A*"
                    aus = aus + "/4"
                }

                return (
                    <ContentCourse key={idx + course} style={{backgroundColor: idx % 2 !== 0 ? '#CDCCD0' : ''}} isvisible={isContentVisible} >
                        <Link to={link} style={{textDecoration: 'none'}}>
                            <CourseTitle>{`${course} ${title}`}</CourseTitle>
                        </Link>
                        <CourseProperty>{type}</CourseProperty>
                        <CourseProperty>{sem}</CourseProperty>
                        <CourseProperty>{aus}</CourseProperty>
                    </ContentCourse>
                );
            })}
        </ContentContainer>
    );
}

export default Course;