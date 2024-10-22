import { BiSearch } from "react-icons/bi";
import { BsGripVertical, BsPlus } from "react-icons/bs";
import { GrNotes } from "react-icons/gr";
import { GoTriangleDown } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { assignments } from "../../Database";


export default function Assignments() {
  const { cid } = useParams();
  const currAssignments = assignments.filter(as => as.course === cid);
  return (
    <div id="wd-assignments">
      <div className="row g-4 mb-4 mt-1">
        <div className="col">
          <div className="input-group">
            <span className="input-group-text bg-white border-end-0" id="basic-addon1">
              <BiSearch />
            </span>
            <input
              id="wd-search-assignment"
              className="form-control border-start-0"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="col">
          <div className="float-end">
            <button className="btn btn-light me-1" id="wd-add-assignment-group">
              <BsPlus />
              Group
            </button>
            <button className="btn btn-danger" id="wd-add-assignment">
              <BsPlus />
              Assignment
            </button>
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
            {currAssignments.map((assignment) => (
              <li
                key={assignment._id}
                className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-center"
              >
                <BsGripVertical className="me-3 fs-3" />
                <GrNotes className="me-4 text-success" />
                <div className="flex-grow-1">
                  <Link
                    className="text-black text-decoration-none"
                    to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                  >
                    <b>{assignment.title}</b>
                  </Link>
                  <br />
                  <span className="fs-6 text-secondary">
                    <span className="text-danger">{assignment.modules}</span> |{" "}
                    <b>Not available until</b> {assignment.availableFrom} |{" "}
                    <b>Due</b> {assignment.dueDate} | {assignment.points} pts
                  </span>
                </div>
                <LessonControlButtons />
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}