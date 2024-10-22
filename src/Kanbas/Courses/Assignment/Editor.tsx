import { useParams } from "react-router";
import { assignments } from "../../Database";
import { Link } from "react-router-dom";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignment = assignments.find((ass) => ass._id === aid);
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">{assignment?.title}</label>
      <input
        className="form-control my-3"
        id="wd-name"
        value={assignment?.title}
      />
      <textarea id="wd-description" className="form-control mb-3">
        {assignment?.description}
      </textarea>
      <div className="row g-3 mb-3">
        <label className="col-form-label col-sm-3 text-end" htmlFor="wd-points">
          Points
        </label>
        <div className="col-9">
          <input
            id="wd-points"
            className="form-control"
            value={assignment?.points}
          />
        </div>
      </div>

      <div className="row g-3 mb-3">
        <label className="col-form-label col-sm-3 text-end" htmlFor="wd-points">
          Assign
        </label>
        <div className="col-9">
          <div className="p-3 form-control">
            <label className="fw-bold" htmlFor="wd-assign-to">
              Assignment to
            </label>
            <select className="form-select mb-3">
              <option value="Everyone" id="wd-assign-to">
                Everyone
              </option>
            </select>
            <label htmlFor="wd-due-date" className="fw-bold">
              Due
            </label>
            <input
              className="form-control mb-3"
              id="wd-due-date"
              type="datetime-local"
              defaultValue={assignment?.dueDate}
            />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from" className="fw-bold">
                  Available from
                </label>
                <input
                  className="form-control"
                  id="wd-available-from"
                  type="datetime-local"
                  defaultValue={assignment?.availableFrom}
                />
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="fw-bold">
                  Until
                </label>
                <input
                  className="form-control"
                  id="wd-available-until"
                  type="datetime-local"
                  defaultValue={assignment?.until}
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button className="btn btn-light me-1">Cancel</button>
          </Link>
          <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
            <button className="btn btn-danger">Save</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
