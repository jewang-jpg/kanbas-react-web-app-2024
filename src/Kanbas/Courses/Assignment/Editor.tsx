export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <br />
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
        your Web application running on Netlify. The landing page should include
        the following: Your fuil name and section Links to each of the lab
        assignments Link to the Kanbas application Links to all relevant source
        code repositories The Kanbas application should include a link to
        navigate back to the landing page.
      </textarea>
      <br />
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select>
              <option value="ASSIGNMENTS" id="wd-group">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select>
              <option value="Percentage" id="wd-display-grade-as">Percentage</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select>
              <option value="Online" id="wd-submission-type">Online</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top"></td>
          <td>
            <label>Online Entry Options</label>
            <br />
            <input id="wd-text-entry" type="checkbox" name="entry-options" value="Text Entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
            <br />
            <input id="wd-website-url" type="checkbox" name="entry-options" value="Website URL" />
            <label htmlFor="wd-website-url">Website URL</label>
            <br />
            <input
                id="wd-media-recordings"
              type="checkbox"
              name="entry-options"
              value="Media Recordings"
            />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
            <br />
            <input
                id="wd-student-annotation"
              type="checkbox"
              name="entry-options"
              value="Student Annotation"
            />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
            <br />
            <input id="wd-file-upload" type="checkbox" name="entry-options" value="File Uploads" />
            <label htmlFor="wd-file-upload">File Uploads</label>
            <br />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label>Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <br />
            <input id="wd-assign-to" value="Everyone" />
            <br />
            <br />
            <label htmlFor="wd-due-date">Due</label>
            <br />
            <input id="wd-due-date" type="date" />
            <br />
            <br />
            <td>
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input id="wd-available-from" type="date" />
            </td>
            <td>
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input id="wd-available-until" type="date" />
            </td>
          </td>
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
