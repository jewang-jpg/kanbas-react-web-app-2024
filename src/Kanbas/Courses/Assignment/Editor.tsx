export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        className="form-control my-3"
        id="wd-name"
        value="A1 - ENV + HTML"
      />
      <textarea id="wd-description" className="form-control mb-3">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your fuil name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <div className="row g-3 mb-3">
        <label className="col-form-label col-sm-3 text-end" htmlFor="wd-points">
          Points
        </label>
        <div className="col-9">
          <input id="wd-points" className="form-control" value={100} />
        </div>
      </div>
      <div className="row g-3 mb-3">
        <label className="col-form-label col-sm-3 text-end" htmlFor="wd-group">
          Assignment Group
        </label>
        <div className="col-9">
          <select className="form-select">
            <option value="ASSIGNMENTS" id="wd-group">
              ASSIGNMENTS
            </option>
          </select>
        </div>
      </div>
      <div className="row g-3 mb-3">
        <label
          className="col-form-label col-sm-3 text-end"
          htmlFor="wd-display-grade-as"
        >
          Display Grade as
        </label>
        <div className="col-9">
          <select className="form-select">
            <option value="Percentage" id="wd-display-grade-as">
              Percentage
            </option>
          </select>
        </div>
      </div>
      <div className="row g-3 mb-3">
        <label
          className="col-form-label col-sm-3 text-end"
          htmlFor="wd-submission-type"
        >
          Submission Type
        </label>
        <div className="col-9">
          <div className="p-3 form-control">
            <select className="form-select">
              <option value="Online" id="wd-submission-type">
                Online
              </option>
            </select>

            <p className="pt-2 fw-bold">Online Entry Options</p>
            <input
              className="me-2 mb-3"
              id="wd-text-entry"
              type="checkbox"
              name="entry-options"
              value="Text Entry"
            />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input
              className="me-2 mb-3"
              id="wd-website-url"
              type="checkbox"
              name="entry-options"
              value="Website URL"
            />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
              className="me-2 mb-3"
              id="wd-media-recordings"
              type="checkbox"
              name="entry-options"
              value="Media Recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
              className="me-2 mb-3"
              id="wd-student-annotation"
              type="checkbox"
              name="entry-options"
              value="Student Annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input
              className="me-2 mb-3"
              id="wd-file-upload"
              type="checkbox"
              name="entry-options"
              value="File Uploads"
            />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>
      <div className="row g-3 mb-3">
        <label
          className="col-form-label col-sm-3 text-end"
          htmlFor="wd-submission-type"
        >
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
            <input className="form-control mb-3" id="wd-due-date" type="date" />
            <div className="row">
              <div className="col">
                <label htmlFor="wd-available-from" className="fw-bold">
                  Available from
                </label>
                <input
                  className="form-control"
                  id="wd-available-from"
                  type="date"
                />
              </div>
              <div className="col">
                <label htmlFor="wd-available-until" className="fw-bold">
                  Until
                </label>
                <input
                  className="form-control"
                  id="wd-available-until"
                  type="date"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <span className="float-end">
            <button className="btn btn-light me-1">Cancel</button>
            <button className="btn btn-danger">Save</button>
          </span>
        </div>
      </div>
      <table>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td></td>
        </tr>
        <br />
        <tr>
          <td></td>
          <td align="right" valign="top">
            <button>Cancel</button>
            <button>Save</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
