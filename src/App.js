import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Course from './pages/Course';
import CourseMap from './pages/CourseMap';
import Data from "./completed_code.json";
import CourseInfo from './pages/CourseInfo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-content" element={<Course />} />
        <Route path="/course-map" element={<CourseMap />} />
        {Data.courses.filter(course => 'content' in course).map(course => (
          <Route key={course.code} path={course.code} element={<CourseInfo course={course} />} />
        ))}
        <Route path="*" element={<Navigate replace to="/" />} />
        {/* <Route path={Data.courses[0].code} element={<CourseInfo course={Data.courses[0]} />} /> */}
      </Routes>
      <Footer />   
    </div>
  );
}

export default App;
