
export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor" className="container">
        <h3> <label htmlFor="wd-name">Assignment Name</label> </h3>
        <div className="form-group mb-3">
          <input id="wd-name" value="A1" className="form-control" />
        </div>
  
        <div className="form-group mb-3">
          <label htmlFor="wd-description">Description</label>
          <textarea id="wd-description" cols={40} rows={10} className="form-control">
            The assignment is available online. Submit a link to the landing page of your Web application running on Netlify...
          </textarea>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-4 text-md-end d-flex align-items-center">
            <label htmlFor="wd-points" className="fw-bold">Points</label>
          </div>
          <div className="col-md-8">
            <input id="wd-points" value={100} className="form-control w-25" />
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-4 text-md-end d-flex align-items-center">
            <label htmlFor="wd-group" className="fw-bold">Assignment Group</label>
          </div>
          <div className="col-md-8">
            <select id="wd-group" className="form-select w-50">
              <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-4 text-md-end d-flex align-items-center">
            <label htmlFor="wd-display-grade-as" className="fw-bold">Display Grade as</label>
          </div>
          <div className="col-md-8">
            <select id="wd-display-grade-as" className="form-select w-50">
              <option selected value="Percentage">Percentage</option>
              <option value="Letter">Letter</option>
              <option value="Number">Number</option>
            </select>
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-4 text-md-end d-flex align-items-start">
            <label className="fw-bold">Submission</label>
          </div>
          <div className="col-md-8">
            <div className="border p-3 rounded">
              <div className="mb-3">
                <label htmlFor="wd-submission-type" className="me-2">Submission Type</label>
                <select id="wd-submission-type" className="form-select w-50">
                  <option selected value="Online">Online</option>
                  <option value="Other">Other</option>
                </select>
              </div>
  
              <div className="mb-3">
                <label>Online Entry Options</label><br />
                <div className="form-check">
                  <input type="checkbox" id="wd-text-entry" className="form-check-input" />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-media-recordings" className="form-check-input" />
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-student-annotation" className="form-check-input" />
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-file-upload" className="form-check-input" />
                  <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <div className="row mb-3">
          <div className="col-md-4 text-md-end d-flex align-items-start">
            <label className="fw-bold">Assign</label>
          </div>
          <div className="col-md-8">
            <div className="border p-3 rounded">
              <div className="mb-3">
                <label htmlFor="wd-assign-to" className="me-2">Assign to</label>
                <input id="wd-assign-to" value="Everyone" className="form-control w-50" />
              </div>
  
              <div className="mb-3">
                <label htmlFor="wd-due-date" className="me-2">Due</label>
                <div className="d-flex">
                  <input type="date" id="wd-due-date" value="2024-05-13" className="form-control w-50 me-2" />
                  <input type="time" id="wd-due-time" value="23:59" className="form-control w-25" />
                </div>
              </div>
  
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="wd-available-from">Available From</label>
                  <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wd-available-until">Until</label>
                  <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <hr />
        <div className="d-flex justify-content-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    );
  }
  