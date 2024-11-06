import React from "react";
import AssignmentControls from "./Assignmentcontrol";
import { BsGripVertical } from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";
import AssignmentControlButtons from "./AssignmentControlButtons";
import ModuleControlButtons from "./ModuleControlButtons ";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
import { addAssignment } from "./reducer";

export default function Assignments() {
    const { cid } = useParams();
    const assignments = db.assignments;

    return (
        <div id="wd-assignments">
        <AssignmentControls />
            <br /> <br />
            <ul className="list-group rounded-0">
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

                    {assignments
                        .filter((assignment: any) => assignment.course === cid) // Filter by course ID
                        .map((assignment: any) => (
                            <li key={assignment._id} className="wd-lesson list-group-item p-3 ps-1">
                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <BsGripVertical />
                                        <MdOutlineAssignment />
                                    </div>
                                    <div className="col">
                                        <Link 
                                            className="wd-assignment-link" 
                                            to={`/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}
                                        > 
                                            {assignment.title}
                                        </Link> 
                                        <br />
                                        <span style={{ color: "red" }}> Multiple Modules </span>
                                        <span> | <b> Not available until </b> {assignment.availdate} at {assignment.availtime} | <br />
                                        <b>Due </b> {assignment.duedate} at {assignment.duetime} | {assignment.points} </span>
                                    </div>
                                    <div className="col-auto">
                                        <AssignmentControlButtons />
                                    </div>
                                </div>
                            </li>
                        ))}
                </li>
            </ul>
        </div>
    );
}
