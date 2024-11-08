import { useParams, useNavigate } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aId } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentsReducer)
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState({
    _id: new Date().getTime().toString(),
    id: new Date().getTime().toString(),
    title: "",
    description: " ",
    points: 100,
    course: cid,
    availdate: "2023-09-10",
    availtime: "00:00",
    duedate: "2023-12-15",
    duetime: "23:59"
  });
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isReadOnly = currentUser.role === "STUDENT";

  const navigate = useNavigate();
  const Save = () => {
    if (!isReadOnly) {
      if (aId !== "New") {
        dispatch(updateAssignment(assignment))
      } else {
        dispatch(addAssignment(assignment));
      }
      navigate(`/Kanbas/Courses/${cid}/Assignments`);
    }
  };

  useEffect(() => {
    if (aId === "New") {

    } else {
      const assignment = assignments.find((assignment: any) => assignment._id == aId)
      setAssignment(assignment)
    }
  }, []);

  return (
    <div id="wd-assignments-editor" className="container">
      <h3> <label htmlFor="wd-name">Assignment Name</label> </h3>
      <div key={assignment._id}>
        <div className="form-group mb-3">
          <input id="wd-name" value={assignment.title} className="form-control"
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
            disabled={isReadOnly}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="wd-description">Description</label>
          <textarea id="wd-description" value={assignment.description} cols={40} rows={10} className="form-control"
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
            disabled={isReadOnly}>
          </textarea>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 text-md-end d-flex align-items-center">
            <label htmlFor="wd-points" className="fw-bold">Points</label>
          </div>
          <div className="col-md-8">
            <input id="wd-points" value={100} className="form-control w-25"
              onChange={(e) => setAssignment({ ...assignment, points: parseInt(e.target.value) })}
              disabled={isReadOnly} />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-4 text-md-end d-flex align-items-center">
            <label htmlFor="wd-group" className="fw-bold">Assignment Group</label>
          </div>
          <div className="col-md-8">
            <select id="wd-group" className="form-select w-50" disabled={isReadOnly}>
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
            <select id="wd-display-grade-as" className="form-select w-50" disabled={isReadOnly}>
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
                <select id="wd-submission-type" className="form-select w-50" disabled={isReadOnly}>
                  <option selected value="Online">Online</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-3">
                <label>Online Entry Options</label><br />
                <div className="form-check">
                  <input type="checkbox" id="wd-text-entry" className="form-check-input" disabled={isReadOnly} />
                  <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-website-url" className="form-check-input" defaultChecked disabled={isReadOnly} />
                  <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-media-recordings" className="form-check-input" disabled={isReadOnly}/>
                  <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-student-annotation" className="form-check-input" disabled={isReadOnly}/>
                  <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" id="wd-file-upload" className="form-check-input" disabled={isReadOnly}/>
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
                <input id="wd-assign-to" value="Everyone" className="form-control w-50" disabled={isReadOnly} />
              </div>

              <div className="mb-3">
                <label htmlFor="wd-due-date" className="me-2">Due</label>
                <div className="d-flex">
                  <input type="date" id="wd-due-date" value={assignment.duedate} className="form-control w-50 me-2"
                    onChange={(e) => setAssignment({ ...assignment, duedate: e.target.value })} disabled={isReadOnly}/>
                  <input type="time" id="wd-due-time" value={assignment.duetime} className="form-control w-25" disabled={isReadOnly}/>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="wd-available-from">Available From</label>
                  <input type="date" id="wd-available-from" value={assignment.availdate} className="form-control"
                    onChange={(e) => setAssignment({ ...assignment, availdate: e.target.value })} disabled={isReadOnly} />
                </div>
                <div className="col-md-6">
                  <label htmlFor="wd-available-until">Until</label>
                  <input type="date" id="wd-available-until" value="2024-05-20" className="form-control"
                    onChange={(e) => setAssignment({ ...assignment, duedate: e.target.value })} disabled={isReadOnly}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr />
        <div className="d-flex justify-content-end">
          <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
          <button className="btn btn-danger" onClick={Save} disabled={isReadOnly}>Save</button>
        </div>
      </div>
    </div>
  );
}