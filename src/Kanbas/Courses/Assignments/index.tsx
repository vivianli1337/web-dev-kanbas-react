import AssignmentControls from "./Assignmentcontrol";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons ";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <AssignmentControls /> <br /> <br /> <br /> <br />
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 bg-secondary"> 
            <BsGripVertical/> ASSIGNMENTS <ModuleControlButtons/> </div>
          <li className="wd-lesson list-group-item p-3 ps-1">  <BsGripVertical/>A1 <br />
          <span style={{ color: "red" }}> Multiple Modules </span> <span> | <b> Not availabile until </b> May 6 at 12:00 am | <br />
          <b>Due </b>May 13 at 11:59 am | 100 pts </span>
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1"> A2 <br />
          <span style={{ color: "red" }}> Multiple Modules </span> <span> | <b> Not availabile until </b> May 13 at 12:00 am | <br />
          <b>Due </b>May 20 at 11:59 am | 100 pts </span>
          </li>
          <li className="wd-lesson list-group-item p-3 ps-1"> A3 <br />
          <span style={{ color: "red" }}> Multiple Modules </span> <span> | <b> Not availabile until </b> May 20 at 12:00 am | <br />
          <b>Due </b>May 27 at 11:59 am | 100 pts </span>
          </li>
        </li>
      </ul>
    </div >
  );
}