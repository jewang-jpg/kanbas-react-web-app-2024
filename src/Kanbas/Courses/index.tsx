import { courses } from "../Database";
import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./Navigation";
import Assignments from "./Assignment";
import AssignmentEditor from "./Assignment/Editor";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";

export default function Courses() {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const location = useLocation();

  const currentSection = location.pathname.split("/").slice(-1)[0];

  const sectionName = currentSection.charAt(0).toUpperCase() + currentSection.slice(1);

  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {sectionName !== cid ? sectionName : "Home"}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Grades" element={<h1>Grades</h1>} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}