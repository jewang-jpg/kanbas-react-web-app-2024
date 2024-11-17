import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { FaChevronDown } from "react-icons/fa";

export default function AssignmentEditor() {
  const { cid, aid = null } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState<any>(null);
  const [isEditing, setIsEditing] = useState<any>(false);

  useEffect(() => {
    if (aid != null) {
      const selectedAssignment = Array.isArray(assignments)
        ? assignments.find((assignment: any) => assignment._id === aid)
        : null;

      if (selectedAssignment) {
        setAssignment(selectedAssignment);
        setIsEditing(true);
      }
    } else {
      setAssignment({
        course: cid,
      });
      setIsEditing(false);
    }
  }, [aid, assignments, cid]);

  const navigate = useNavigate();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setAssignment({ ...assignment, [name]: value });
  };

  const save = () => {
    if (isEditing) {
      dispatch(updateAssignment(assignment));
      navigate(-1);
    } else {
      dispatch(addAssignment(assignment));
      navigate(-1);
    }
  };
  const cancel = () => {
    navigate(-1);
  };

  return (
    <div id="wd-assignments-editor">
      {!isEditing && (
        <>
          <label htmlFor="wd-name">Assignment Id</label>
          <br />
          <input
            type="text"
            className="form-control"
            id="wd-name"
            name="_id"
            value={assignment?._id}
            onChange={handleInputChange}
          />
          <br />
        </>
      )}
      <label htmlFor="wd-name">Assignment Title</label>
      <br />
      <input
        type="text"
        className="form-control"
        id="wd-name"
        name="title"
        value={assignment?.title}
        onChange={handleInputChange}
      />
      <br />
      <textarea
        id="wd-description"
        className="form-control"
        name="description"
        style={{ height: "100px" }}
        value={assignment?.description}
        onChange={handleInputChange}
      >
        {assignment?.description}
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input
              id="wd-points"
              name="points"
              value={assignment?.points}
              className="form-control"
              onChange={handleInputChange}
            />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>

          <td>
            <div className="col-md-6 position-relative">
              <select
                id="wd-group"
                className="form-control"
                name="assignmentGroup"
                value={assignment?.assignmentGroup}
                onChange={handleInputChange}
              >
                <option value="ASSI">ASSIGNMENTS</option>
                <option value="PROJ">PROJECTS</option>
                <option value="QUIZ">QUIZES</option>
              </select>
              <div
                className="position-absolute"
                style={{
                  right: "6px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <FaChevronDown />
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <div className="form-control">
              <div>
                <div>Assign to</div>
                <div>
                  <select
                    id="wd-assign-to"
                    value={assignment?.assignTo}
                    onChange={handleInputChange}
                  >
                    <option value="EVERYONE">Everyone</option>
                    <option value="SELECTED">Selected Student</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Due</label>
                <br />
                <input
                  type="date"
                  id="wd-due-date"
                  name="due"
                  onChange={handleInputChange}
                  value={
                    isEditing && assignment?.due
                      ? assignment?.due.split("T")[0]
                      : ""
                  }
                ></input>
              </div>
              <div className="row">
                <div className="col-6">
                  <label>Available From</label>
                  <br />
                  <input
                    type="date"
                    id="wd-available-from"
                    name="available"
                    onChange={handleInputChange}
                    value={
                      isEditing && assignment.available
                        ? assignment?.available.split("T")[0]
                        : ""
                    }
                  ></input>
                </div>

                <div className="col-6">
                  <label>Until</label>
                  <br />
                  <input
                    type="date"
                    id="wd-available-until"
                    onChange={handleInputChange}
                    name="until"
                    value={
                      isEditing && assignment.until
                        ? assignment?.until.split("T")[0]
                        : ""
                    }
                  ></input>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <hr />
      <button
        className="btn btn-danger me-2"
        onClick={save}
        style={{ float: "right" }}
      >
        Save
      </button>
      <button
        className="btn btn-secondary me-2"
        onClick={cancel}
        style={{ float: "right" }}
      >
        Cancel
      </button>
    </div>
  );
}
