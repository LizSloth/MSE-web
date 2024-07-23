import { useState } from "react";
import styled from "styled-components";
import Data from "../completed_code.json";
import { Link } from "react-router-dom";

const Container = styled.div`
    padding: 30px 120px;
    font-family: Lato;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

const CourseGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`

const GridBox = styled(Link)`
    padding: 12px;
    text-decoration: none;
    color: black;
`

const GridCourseItem = styled.div`
    border-radius: 10px;
    padding: 12px;
    display: grid;
    grid-template-rows: 0.3fr 0.7fr;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

const Table = styled.table`
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
    font-size: 1.2em;
  
    td, th {
        border: 1px solid #ddd;
        padding: 8px;
    }
  
    tr:nth-child(even){background-color: #f2f2f2;}
  
    tr:hover {
        background-color: #ddd;
    }

    a {
        color: black;
    }

    a:hover {
        color: blue;
    }
  
    th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #E81558;
        color: white;
    }
`

const Legend = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 1.4em;
`

const LegendBox = styled.div`
    width: 2em;
    height: 2em;
    border-radius: 10px;
`

const CourseMap = () => {
    const [admission, setAdmission] = useState('y1');
    const [specialization, setSpecialization] = useState(0);




    const generateLink = (course) => {
        const courseItem = Data.courses.filter(c => c.code === course)[0];
        if (course.substring(0, 2) === 'CC' || course.substring(0, 2) === 'ML') {
            return courseItem?.link ? courseItem.link : ('content' in courseItem ? '/' + course : undefined);
        } else if ('content' in courseItem) {
            return '/' + course;
        }
        return undefined;
    };

    // useEffect(() => {
    //     let tempCourse = Data["admission"][admission];
    //     let combinations = [];
    //     let COUNT = 15;
    //     Data["specialisation"][specialization].course.forEach(c => {
    //         if (tempCourse.flat().includes(c)) {
    //             COUNT -= Data.courses.filter(item => item.code === c)[0]?.aus;
    //         } else {

    //         }
    //     })


    // }, [specialization, admission])

    const courseColors = {
        "Core": "#A8D18C",
        "Fundamental Math and Sciences": "#FEA403",
        "Soft Skills": "#9DC3E6",
        "BDE": "#8297B0",
        "Foundational Core": "#E67D9B",
        "MPE": "#A782B3"
    }

    const coursePriority = {
        "Core": 0,
        "Fundamental Math and Sciences": 1,
        "Foundational Core": 2,
        "Soft Skills": 3,
        "MPE": 4,
        "BDE": 5
    }


    const longCourseTitle = ['MS2083', 'ML0004', 'CC0001', 'MS1016', 'MS2012', 'MS2084', 'HW0288', 'MS0003', 'MS3012', 'MS4014', 'MS1008', 'CC0003']
    //link function 



    return (
        <Container>
            <Wrapper>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ fontWeight: '300' }}>Course Map</h1>
                    <div style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>{`Find out about NTU MSE academic journey here in
                     this interactive course map`}</div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <div style={{ fontSize: '1.2em', display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div>{`Admission: `}</div>
                        <select onChange={e => setAdmission(e?.target?.value)} style={{ fontSize: '1.2rem' }} value={admission} name="admission">
                            <option value="y1">First Year</option>
                            <option value="dy2">Direct Year 2</option>
                        </select>
                    </div>
                    <div style={{ fontSize: '1.2em', display: 'flex', gap: '15px', alignItems: 'center' }}>
                        <div>{`Specialization: `}</div>
                        <select onChange={e => setSpecialization(parseInt(e?.target?.value))} style={{ fontSize: '1.2rem' }} value={specialization} name="specialization">
                            {Data.specialisation.map((item, idx) => (
                                <option key={idx} value={idx} >{item.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <CourseGrid style={{ gridTemplateRows: admission === 'y1' ? 'repeat(8, 1fr)' : 'repeat(7, 1fr)' }}>
                    {[...Array(admission === 'y1' ? 8 : 7)].map((x, i) => {
                        return (
                            <>
                                <GridBox style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    backgroundColor: i % 2 === 0 ? '' : '#A5A5A5',
                                    fontSize: '1.5em',
                                    borderRight: '2px solid black',
                                    borderBottom: (i % 2 === 1 && admission === 'y1' && i !== 7) || ((i === 1 || i === 4) && admission === 'dy2') ? '2px solid black' : '',
                                    textAlign: 'center'
                                }}>
                                    {
                                        admission !== 'y1' && i === 4
                                            ? 'Y3 Special Term'
                                            : `Y${admission === 'y1' ? Math.floor((i / 2) + 1) : (i >= 5 ? 4 : Math.floor((i / 2) + 2))}S${(i % 2) + 1}`
                                    }
                                </GridBox>
                                {(i === 5 && admission === 'y1') || (i === 4 && admission === 'dy2') ? [...Array(2)].map(() => (<GridBox style={{ backgroundColor: i % 2 === 0 ? '' : '#A5A5A5', borderBottom: (i % 2 === 1 && admission === 'y1' && i !== 7) || ((i === 1 || i === 4 || i === 6) && admission === 'dy2') ? '2px solid black' : '' }}></GridBox>)) : <></>}
                                {Data.admission[admission][i].sort((a, b) => (
                                    coursePriority[Data.courses.filter(course => course.code === a)[0]?.type] - coursePriority[Data.courses.filter(course => course.code === b)[0]?.type]
                                )).map((code, id) => {
                                    if (Data.courses.filter(course => course.code === code)[0]?.type === 'BDE') {
                                        return (
                                            <GridBox style={{ backgroundColor: i % 2 === 0 ? '' : '#A5A5A5', borderBottom: (i % 2 === 1 && admission === 'y1' && i !== 7) || ((i === 1 || i === 4) && admission === 'dy2') ? '2px solid black' : '' }}>
                                                <GridCourseItem style={{ backgroundColor: courseColors[Data.courses.filter(course => course.code === code)[0]?.type], display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '1.4em' }}>{code}</div>
                                                </GridCourseItem>
                                            </GridBox>
                                        );
                                    } else {
                                        return (
                                            <GridBox target="_blank" to={generateLink(code)} style={{
                                                background: Data.specialisation[specialization].course.includes(code) ? 'repeating-linear-gradient(45deg, tomato 0px, tomato 4px, transparent 2px, transparent 9px)' : ((code === 'MS4089') ? (admission === 'y1' ? 'linear-gradient(180deg, #fff 50%, #A5A5A5 50%)' : 'linear-gradient(180deg, #A5A5A5 50%, #fff 50%)') : (i % 2 === 0 ? '' : '#A5A5A5')),
                                                gridRowEnd: (code === 'MS4089') ? 'span 2' : '',
                                                borderBottom: (i % 2 === 1 && admission === 'y1' && i !== 7) || ((i === 1 || i === 4) && admission === 'dy2') ? '2px solid black' : '',
                                                gridColumnEnd: (code === 'MS3099' || code === 'MS3096' ? 'span 4' : ''),
                                            }}>
                                                <GridCourseItem style={{
                                                    backgroundColor: courseColors[Data.courses.filter(course => course.code === code)[0]?.type],
                                                }}>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', fontSize: '1.4em' }}>{code}</div>
                                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', wordBreak: 'break-word', fontSize: longCourseTitle.includes(code) ? '0.7em' : '.9em', textAlign: 'center' }}>{Data.courses.filter(course => course.code === code)[0]?.title}</div>
                                                </GridCourseItem>
                                            </GridBox>
                                        );
                                    }
                                })}
                                {[...Array(8 - Data.admission[admission][i].length - ((i === 7 && admission === 'y1') || (i === 6 && admission === 'dy2') ? 1 : 0) - ((i === 5 && admission === 'y1') || (i === 4 && admission === 'dy2') ? 5 : 0))].map(() => (
                                    <GridBox style={{ backgroundColor: i % 2 === 0 ? '' : '#A5A5A5', borderBottom: (i % 2 === 1 && admission === 'y1' && i !== 7) || ((i === 1 || i === 4) && admission === 'dy2') ? '2px solid black' : '' }}></GridBox>
                                ))}
                            </>
                        );
                    })}
                </CourseGrid>
                <div>
                    <div style={{ fontSize: '1.5em', marginBottom: '10px' }}>Legend: </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '15px' }}>
                        <Legend>
                            <LegendBox style={{ backgroundColor: courseColors.Core }} />
                            <div> Core </div>
                        </Legend>
                        <Legend>
                            <LegendBox style={{ backgroundColor: courseColors["Foundational Core"] }} />
                            <div> Foundational Core </div>
                        </Legend>
                        <Legend>
                            <LegendBox style={{ backgroundColor: courseColors["Fundamental Math and Sciences"] }} />
                            <div> Fundamental Math and Sciences </div>
                        </Legend>
                        <Legend>
                            <LegendBox style={{ backgroundColor: courseColors["Soft Skills"] }} />
                            <div> Soft Skills </div>
                        </Legend>
                        <Legend>
                            <LegendBox style={{ backgroundColor: courseColors.BDE }} />
                            <div> BDE </div>
                        </Legend>
                        <Legend>
                            <LegendBox style={{ backgroundColor: courseColors.MPE }} />
                            <div> MPE </div>
                        </Legend>
                    </div>
                </div>
                {specialization !== 0 ? <div style={{ alignSelf: 'flex-start' }}>
                    <h2>{`Specialization for ${Data.specialisation.filter((_, index) => index === specialization)[0].name}`}</h2>
                    <div>{`Complete minimum 5 courses from a particular specialisation area. The minimum requirement for a specialisation is 15 AU.`}</div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Course</th>
                                <th>Semester</th>
                                <th>AUs</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data["specialisation"][specialization].course.map((item, index) => {
                                const courseItem = Data.courses.find(course => course.code === item);
                                return (
                                    <tr key={index}>
                                        <td>
                                            <Link
                                                target="_blank"
                                                to={generateLink(item)}
                                                style={{
                                                    textDecoration: Data.admission[admission].flat(2).includes(item) ? 'underline' : 'none',
                                                    textDecorationThickness: '3px',
                                                    style: 'inherit',
                                                }}>
                                                {`${item}: ${courseItem?.title}`}
                                            </Link>
                                        </td>
                                        <td>{courseItem?.semester === 0 ? 'Both' : (courseItem?.semester === 999 ? '' : courseItem?.semester)}</td>
                                        <td>{courseItem?.aus}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div> : <></>}
            </Wrapper>
        </Container>
    );
}

// function arrayUnique(array) {
//     var a = array.concat();
//     for(var i=0; i<a.length; ++i) {
//         for(var j=i+1; j<a.length; ++j) {
//             if(a[i] === a[j])
//                 a.splice(j--, 1);
//         }
//     }

//     return a;
// }


export default CourseMap;