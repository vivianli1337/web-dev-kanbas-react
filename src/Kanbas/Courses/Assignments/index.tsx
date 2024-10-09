import AssignmentControls from "./Assignmentcontrol";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons ";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";



export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /> <br /> <br /> 
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 bg-secondary d-flex align-items-center">
            <div className="col-auto">
              <BsGripVertical />
            </div>
            <div className="col">
              ASSIGNMENTS
            </div>
            <div className="col-auto">
              <ModuleControlButtons />
            </div>
          </div>

          {/* Assignment Items */}
          <li className="wd-lesson list-group-item p-3 ps-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <BsGripVertical />
                <MdOutlineAssignment />
              </div>
              <div className="col">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"> A1</a> <br />
                <span style={{ color: "red" }}> Multiple Modules </span>
                <span> | <b> Not available until </b> May 6 at 12:00 am | <br />
                  <b>Due </b>May 13 at 11:59 am | 100 pts </span>
              </div>
              <div className="col-auto">
                <AssignmentControlButtons/>
              </div>
            </div>
          </li>

          <li className="wd-lesson list-group-item p-3 ps-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <BsGripVertical />
                <MdOutlineAssignment />
              </div>
              <div className="col">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"> A2</a> <br />
                <span style={{ color: "red" }}> Multiple Modules </span>
                <span> | <b> Not available until </b> May 13 at 12:00 am | <br />
                  <b>Due </b>May 20 at 11:59 am | 100 pts </span>
              </div>
              <div className="col-auto">
                <AssignmentControlButtons/>
              </div>
            </div>
          </li>

          <li className="wd-lesson list-group-item p-3 ps-1">
            <div className="row align-items-center">
              <div className="col-auto">
                <BsGripVertical />
                <MdOutlineAssignment />
              </div>
              <div className="col">
                <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123"> A3</a> <br />
                <span style={{ color: "red" }}> Multiple Modules </span>
                <span> | <b> Not available until </b> May 20 at 12:00 am | <br />
                  <b>Due </b>May 27 at 11:59 am | 100 pts </span>
              </div>
              <div className="col-auto">
                <AssignmentControlButtons/>
              </div>
            </div>
          </li>
        </li>
      </ul>
    </div>
  );
}
