import { Link } from "react-router-dom";
import { useLocation, useParams } from "react-router-dom";

const links = [
  "Home",
  "Modules",
  "Piazza",
  "Zoom",
  "Assignments",
  "Quizzes",
  "Grades",
  "People",
];

export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link);
        return (
          <Link
            key={link}
            className={`list-group-item border border-0 ${
              isActive ? "active" : "text-danger"
            }`}
            to={`/Kanbas/Courses/${cid}/${link}`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}