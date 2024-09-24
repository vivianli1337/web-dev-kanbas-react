export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <h3> <label htmlFor="wd-name">Assignment Name</label> </h3>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify. THe landing page sould include the following: your full name and the section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br />
        <table>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        {/* Complete on your own */}
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
            <option selected value="Percentage">Percentage</option>
            <option value="Letter">Letter</option>
            <option value="Number">Number</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
            <option selected value="Online">Online</option>
            <option value="Other">Other</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <input type="checkbox" id="wd-text-entry"/>
                <label htmlFor="wd-text-entry">Text Entry</label><br/>

                <input type="checkbox" id="wd-website-url"/>
                <label htmlFor="wd-website-url">Website URL</label><br/>

                <input type="checkbox" id="wd-media-recordings"/>
                <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

                <input type="checkbox" id="wd-student-annotation"/>
                <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

                <input type="checkbox" id="wd-file-upload"/>
                <label htmlFor="wd-file-upload">File Uploads</label><br/>
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label> 
          </td>
          <td>
            <input id="wd-assign-to" value="Everyone" /> 
          </td>
        </tr>
        <tr>
          <td align="center" valign="top">
            <label htmlFor="wd-due-date	">Due</label>
          </td>
          <td>
            <input type="date"
            id="wd-due-date"
            value="2024-05-13"/><br/>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-unti">Available from</label>
            <label htmlFor="wd-available-until">Until</label>
          </td>
          <td>
            <input type="date"
            id="wd-available-unti"
            value="2024-05-06"/><br/>
            <input type="date"
            id="wd-available-unti"
            value="2024-05-20"/><br/>
          </td>
        </tr>

      </table>
    </div>
  );
}
