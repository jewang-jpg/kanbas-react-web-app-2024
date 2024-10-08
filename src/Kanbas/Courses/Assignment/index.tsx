import { BiSearch } from "react-icons/bi";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import LessonControlButtons from "./LessonControlButtons";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="row g-4 mb-4 mt-1">
        <div className="col">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0" id="basic-addon1"><BiSearch /></span>
            <input id="wd-search-assignment" className="form-control border-start-0" placeholder="Search..."/>
          </div>
        </div>
        <div className="col">
          <div className="float-end">
          <button className="btn btn-light me-1" id="wd-add-assignment-group"><BsPlus />Group</button>
          <button className="btn btn-danger" id="wd-add-assignment"><BsPlus />Assignment</button>
          </div>
        </div>
      </div>

      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-body-secondary">
            <BsGripVertical className="me-2 fs-3" />
            <GoTriangleDown />
            <b>ASSIGNMENTS</b>
            <AssignmentsControlButtons />
          </div>
          <ul className="wd-lessons list-group rounded-0">
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              <GrNotes className="me-4 text-success" />
              <div className="flex-grow-1">
                <Link className="text-black text-decoration-none" to="/Kanbas/Courses/1234/Assignments/123"><b>A1</b></Link>
                <br />
                <span className="fs-6 text-secondary"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100 pts </span>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              <GrNotes className="me-4 text-success" />
              <div className="flex-grow-1">
              <Link className="text-black text-decoration-none" to="/Kanbas/Courses/1234/Assignments/456"><b>A2</b></Link>
                <br />
                <span className="fs-6 text-secondary"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts </span>
              </div>
              <LessonControlButtons />
            </li>
            <li className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center">
              <BsGripVertical className="me-3 fs-3" />
              <GrNotes className="me-4 text-success" />
              <div className="flex-grow-1">
              <Link className="text-black text-decoration-none" to="/Kanbas/Courses/1234/Assignments/789"><b>A3</b></Link>
                <br />
                <span className="fs-6 text-secondary"><span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11.59pm | 100 pts </span>
              </div>
              <LessonControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
