import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import React from "react";
import * as coursesClient from "../client";
import * as assignmentsClient from "./client";
import {
  addAssignment,
  updateAssignment,
  cancelAssignmentUpdate,
} from "./reducer";

export default function AssignmentEditor() {
  const { aid, cid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const isNewAssignment = useMemo(() => aid === "Editor", [aid]);
  const [assignment, setAssignment] = useState({
    _id: aid,
    title: "",
    courseId: cid,
    description: "",
    points: 100,
    dueDate: "",
    startDate: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    if (id.endsWith("Date")) {
      setAssignment((prev) => ({
        ...prev,
        // date to normal format (yyyy-mm-ddThh:mm)
        [id]: new Date(value).toISOString().split(".")[0],
      }));
    } else {
      setAssignment((prev) => ({ ...prev, [id]: value }));
    }
  };
  const handleSave = async () => {
    if (isNewAssignment) {
      const result = await coursesClient.createAssignmentForCourse(cid!, assignment);
      dispatch(updateAssignment(result));
      dispatch(addAssignment(result));
    } else {
      await assignmentsClient.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    }
    navigate(-1);
  };
  const handleCancel = () => {
    navigate(-1);
  };
  useEffect(() => {
    const assignmentData = assignments.find((a: any) => a._id === aid);
    console.log(assignmentData)
    if (assignmentData) {
      setAssignment(assignmentData);
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(cancelAssignmentUpdate());
    }
  }, [dispatch, aid]);
  return (
    <div id="wd-assignment-editor" className="p-4">
      <div className="mb-4">
        <label htmlFor="wd-name">
          <h5>Assignment Name</h5>
        </label>
        <input
          value={assignment.title}
          type="text"
          id="title"
          className="form-control"
          placeholder="Assignment Name"
          onChange={handleChange}
        />
      </div>

      <div className="mb-4 p-3 border" style={{ whiteSpace: "pre-wrap" }}>
        <textarea
          value={assignment.description}
          id="description"
          className="form-control"
          placeholder="New Description"
          onChange={handleChange}
        />
      </div>

      <div className="grouped-sections p-3 mb-4">
        <div className="row mb-3 align-items-center">
          <div className="col-3">
            <label htmlFor="wd-points">
              <h6>Points</h6>
            </label>
          </div>
          <div className="col-9">
            <input
              type="number"
              id="points"
              className="form-control"
              value={assignment.points}
              onChange={handleChange}
              step="1"
            />
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-3">
            <label htmlFor="wd-group">
              <h6>Assignment Group</h6>
            </label>
          </div>
          <div className="col-9">
            <select id="wd-group" className="form-select">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-3">
            <label htmlFor="wd-display-grade-as">
              <h6>Display Grade As</h6>
            </label>
          </div>
          <div className="col-9">
            <select id="wd-display-grade-as" className="form-select">
              <option value="Percentage">Percentage</option>
              <option value="Grade Point">Grade Point</option>
            </select>
          </div>
        </div>

        <div className="row mb-3 align-items-center">
          <div className="col-md-3 text-left">
            <label htmlFor="wd-submission-type" className="form-label">
              <h6>Submission Type</h6>
            </label>
          </div>
          <div className="col-md-9">
            <div className="form-control">
              <select id="wd-submission-type" className="form-select">
                <option value="Online">Online</option>
              </select>
              <div className="ms-3 w-50">
                <br />
                <h6>
                  <b>Online Entry Options</b>
                </h6>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-chkbox-text"
                  />
                  <label className="form-check-label" htmlFor="wd-chkbox-text">
                    Text Entry
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-website-url"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="wd-website-url">
                    Website URL
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-media-recordings"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-media-recordings"
                  >
                    Media Recordings
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-student-annotation"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="wd-student-annotation"
                  >
                    Student Annotation
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="wd-file-upload"
                  />
                  <label className="form-check-label" htmlFor="wd-file-upload">
                    File Upload
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-3 text-left">
            <label htmlFor="wd-submission-type" className="form-label">
              <h6>Assign</h6>
            </label>
          </div>
          <div className="col-md-9">
            <div className="form-control">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="startDate" className="form-label">
                    <strong>Available from</strong>
                  </label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      id="startDate"
                      className="form-control"
                      value={assignment.startDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="dueDate" className="form-label">
                    <strong>Until</strong>
                  </label>
                  <div className="input-group">
                    <input
                      type="datetime-local"
                      id="dueDate"
                      className="form-control"
                      value={assignment.dueDate}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-end mt-4">
          <button onClick={handleCancel} className="btn btn-light border me-2">
            Cancel
          </button>
          <button onClick={handleSave} className="btn btn-danger">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
