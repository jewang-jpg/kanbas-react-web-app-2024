import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      <Link className={`list-group-item border border-0 ${pathname.includes('Home') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/Home">Home</Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Modules') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/Modules">Modules</Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Piazza') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/Piazza">Piazza</Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Zoom') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/Zoom">Zoom</Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Assignments') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/Assignments">Assignments</Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Quizzes') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/Quizzes">Quizzes</Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('Grades') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/Grades">Grades</Link>
      <Link className={`list-group-item border border-0 ${pathname.includes('People') ? 'active' : 'text-danger'}`} to="/Kanbas/Courses/1234/People">People</Link>
    </div>
  );
}
