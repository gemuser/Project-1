import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import CoursesPage from './components/Courses.jsx';
import Navbar from './components/Navbar.jsx';
import Gallery from './components/Gallery.jsx';
import Department from './components/Department.jsx';
import Contact from './components/Contactus.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/department" element={<Department />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;