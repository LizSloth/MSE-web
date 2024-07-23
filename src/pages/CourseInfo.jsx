import styled from "styled-components";
import bottomArrow from "../images/bottom-arrow.svg";
import { useState } from "react";
import Data from "../completed_code.json";
import NTULogo from "../images/ntu-logo.svg";
import Avatar from "../images/avatar.png";

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

const CourseTitleContainer = styled.div`
    display: flex;
    width: 70%;
    height: fit-content;
`

const CourseCode = styled.div`
    color: #fff;
    font-size: 1.5em;
    text-align: center;
    background-color: #A12280;
    padding: 15px;
    display: flex;
    align-items: center;
`

const CourseTitle = styled.div`
    border: 4px solid #A12280;
    color: #A12280;
    font-size: 1.2em;
    font-weight: 600;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
`

const CourseDetail = styled.div`
    display: flex;
    gap: 15px;
    width: 100%;
`

const CourseDetailLeft = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 60%;
`

const CourseDetailRight = styled.div`
    display: flex;
    gap: 25px;
    justify-content: flex-end;
    width: 40%;
`

{/*const CourseDetailProf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.2em;
    justify-content: center;
    gap: 5px;
    font-weight: 700;
`*/}


const CourseDetailProfContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 20px; /* adjust gap */
    width: 100%; 
`;

const CourseDetailProf = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 0.8em;
    justify-content: center;
    gap: 5px;
    font-weight: 500;
    width: calc(50% - 20px); /* adjust gap */

    & > div {
        width: 100%;
        text-align: center;
    }

    img {
        width: 100%;
        height: auto;
        max-height: 200px;
    }
`;
const CourseDetailProfProperty = styled.div`
    position: absolute;
    top: 30%;
    width: 25%;
    text-align: center; 
    background-color: #A12280; 
    color: #fff; 
    padding: 5px 5px;
`;


const CourseDetailItem = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    width: 100%;
`

const CourseDetailItemProperty = styled.div`
    background-color: #A12280;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 12px 20px;
    font-size: 1.3em;
    color: #fff;
    width: 30%;
`

const CourseDetailItemValue = styled.div`
    font-size: 1.3em;
    font-weight: 700;
`

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    margin: 40px 0;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 1.2em;
    white-space: pre-line;
    width: 95%;
    padding-left: 200; 
`

const ContentTitle = styled.div`
    background-color: #A12280;
    color: #fff;
    font-size: 1.3em;
    padding: 10px 20px;
    width: 100%;
`
const ShiftedText = styled.div`
    display: inline-block;
    transform: translateX(2%); 
`;
const Footer = styled.div`
    font-weight: 800;
    font-size: 1em;
    color: #0054A6;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`

const CourseInfo = ({course}) => {
    return (
        <Container>
            <Wrapper>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <img width="20%" src={NTULogo} alt="ntu-logo" />
                    <CourseTitleContainer>
                        <CourseCode>{course.code}</CourseCode>
                        <CourseTitle>{course.title}</CourseTitle>
                    </CourseTitleContainer>
                </div>
                <CourseDetail>
                    <CourseDetailLeft>
                        {/*<CourseDetailItem>
                            <CourseDetailItemProperty>Academic Year</CourseDetailItemProperty>
                            <CourseDetailItemValue>AY2023/24</CourseDetailItemValue>
                        </CourseDetailItem>*/}
                        <CourseDetailItem>
                            <CourseDetailItemProperty>Academic Units</CourseDetailItemProperty>
                            <CourseDetailItemValue>{course.aus}</CourseDetailItemValue>
                        </CourseDetailItem>
                        {/*<CourseDetailItem>
                            <CourseDetailItemProperty>Course instructor(s)</CourseDetailItemProperty>
                            <CourseDetailItemValue>
                                {course.instructor.length === 0
                                    ? 'specific arrangement'
                                    : course.instructor.map((instructor, index) => (
                                        <span key={index}>
                                            <a href={course.instructor_link[index]} target="_blank" rel="noopener noreferrer">
                                                {instructor}
                                            </a>
                                            {index < course.instructor.length - 1 ? '; ' : ''}
                                        </span>
                                    ))}
                            </CourseDetailItemValue>
                        </CourseDetailItem>*/}
                        <CourseDetailItem>
                            <CourseDetailItemProperty>Semester</CourseDetailItemProperty>
                            <CourseDetailItemValue>{course.semester === 0 ? 'Both' : (course.semester === 999 ? 'Nil' : course.semester)}</CourseDetailItemValue>
                        </CourseDetailItem>
                        <CourseDetailItem>
                            <CourseDetailItemProperty>Prerequisite(s)</CourseDetailItemProperty>
                            <CourseDetailItemValue>{course.prereq.length === 0 ? 'Nil' : course.prereq.join('; ')}</CourseDetailItemValue>
                        </CourseDetailItem>
                        <CourseDetailItem>
                            <CourseDetailItemProperty>Corequisite(s)</CourseDetailItemProperty>
                            <CourseDetailItemValue>{course.coreq.length === 0 ? 'Nil' : course.coreq.join('; ')}</CourseDetailItemValue>
                        </CourseDetailItem>
                    </CourseDetailLeft>
                    <CourseDetailRight>
                        <CourseDetailProfContainer instructors={course.instructor.length}>
                            {course.instructor.map((instructor, index) => {
                                const foundFaculty = Data.faculty.find(fac => fac.name === instructor);

                                return (
                                    <>
                                        <CourseDetailProf key={index}>
                                            <img src={foundFaculty ? foundFaculty.image : Avatar} alt='prof' />
                                            <div>{foundFaculty ? (<a href={course.instructor_link[index]} target="_blank" rel="noopener noreferrer">
                                                {instructor}
                                            </a>) : 'Prof.XXX'}</div>
                                            <div>Email: &nbsp;{foundFaculty ? `  ${foundFaculty.email}` : '  email'}</div>
                                        </CourseDetailProf>
                                        <CourseDetailProfProperty>Course instructor(s)</CourseDetailProfProperty>
                                    </>
                                );
                            })}
                        </CourseDetailProfContainer>
                    </CourseDetailRight>
                </CourseDetail>
                <ContentWrapper>
                    <Content>
                        <ContentTitle>COURSE AIMS</ContentTitle>
                        <ShiftedText>
                            <div>{<ContentList content={course.content?.courseAims} />}</div>
                        </ShiftedText>
                    </Content>
                    <Content>
                        <ContentTitle>INTENDED LEARNING OUTCOMES</ContentTitle>
                        <ShiftedText>
                            <div>{<ContentList content={course.content?.ilo} />}</div>
                        </ShiftedText>
                    </Content>
                    <Content>
                        <ContentTitle>COURSE CONTENT</ContentTitle>
                        <ShiftedText>
                            <div>{course.content?.courseContent.length > 0 ? <ContentList content={course.content?.courseContent} /> : 'Nil'}</div>
                        </ShiftedText>
                    </Content>
                    <Content>
                        <ContentTitle>Reading and References</ContentTitle>
                        <ShiftedText>
                            <div>{course.content?.courseContent.length > 0 ? <ContentList content={course.content?.courseReference} /> : 'Nil'}</div>
                        </ShiftedText>
                    </Content>
                </ContentWrapper>
                <Footer>
                    <div>NTU School of Materials Science and Engineering</div>
                    <hr style={{ height: '5px', backgroundColor: '#A12280', opacity: '50%' }} />
                    <p style={{ fontSize: '.8em' }}>50 Nanyang Avenue, Block N4.1, Singapore 639798, Email: mseacad@ntu.edu.sg, Web: www.ntu.edu.sg/mse</p>
                </Footer>
            </Wrapper>
        </Container>
    );
}

function ContentList({ content }) {
    // Split the content by new lines
    const lines = content.split('\n');

    // Function to check if a line starts with numbering like '1. '
    const isListItem = line => /^\d+\.\s/.test(line);

    // Function to check if a line starts with an uppercase letter
    const isUppercaseStart = line => /^[A-Z]/.test(line);

    // Initialize an array to hold the content blocks
    let contentBlocks = [];
    let currentListItems = [];
    let listNumber = 1; // Start the list item number from 1

    lines.forEach((line, index) => {
        if (isListItem(line)) {
            // Extract the actual content without the numbering
            const text = line.replace(/^\d+\.\s*/, '');
            currentListItems.push(
                <li key={index} style={{ textAlign: 'justify' }}>{text}</li>
            );
        } else {
            // If there are accumulated list items, add them as an <ol> block and reset
            if (currentListItems.length > 0) {
                contentBlocks.push(
                    <ol key={`ol-${contentBlocks.length}`} start={listNumber}>{[...currentListItems]}</ol>
                );
                listNumber += currentListItems.length; // Increment listNumber by the number of list items
                currentListItems = [];
            }

            // Check if the line starts with an uppercase letter
            if (isUppercaseStart(line)) {
                // Reset the listNumber to 1
                listNumber = 1;
            }

            // If the line is empty, add a spacer (you can adjust the height as needed)
            if (line === '' && contentBlocks.length > 0 && !contentBlocks[contentBlocks.length - 1].key.startsWith('spacer-')) {
                contentBlocks.push(<div key={`spacer-${index}`} style={{ height: '1em' }}></div>);
            } else if (line !== '') {
                // Add non-list item as a paragraph
                contentBlocks.push(
                    <p key={`p-${index}`} style={{ textAlign: 'justify' }}>{line}</p>
                );
            }
        }
    });

    // If there are remaining list items at the end, add them as an <ol> block
    if (currentListItems.length > 0) {
        contentBlocks.push(
            <ol key={`ol-${contentBlocks.length}`} start={listNumber}>{[...currentListItems]}</ol>
        );
    }

    return <div>{contentBlocks}</div>;
}


export default CourseInfo;