import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import * as db from "../../Database";
import { useSelector } from "react-redux";
import AssignmentEditor from "./Editor";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";




export default function AssignmentControls()
    // assignmentName,
//     setAssignmentName,
//     addAssignment,
// }: {
//     assignmentName: string;
//     setAssignmentName: (title: string) => void;
//     addAssignment: () => void;
// }) 
{
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments, users } = db;
    const navigate = useNavigate();
    const { cid } = useParams();
    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/${new Date().getTime().toString()}`);
      };

    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex">
            <span className="me-1">
                <BsSearch />
            </span>
            <input id="wd-search" placeholder="Search..."
                className="form-control border-1 position-relative me-2 float-end"
                style={{ bottom: "1px" }} />
            {currentUser.role === "FACULTY" && (
                <>
                    <div>
                        <button onClick={handleAddAssignment} id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end"
                            data-bs-toggle="modal" data-bs-target="#wd-add-assignment-dialog">
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Assignment</button>
                        <AssignmentEditor 
                        // dialogTitle="Add Assignment"
                        //     assignmentName={assignmentName}
                        //     setAssignmentName={setAssignmentName}
                        //     addAssignment={addAssignment} 
                            />
                    </div>
                    <div>
                        <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Group</button>
                    </div>
                </>)
            }
        </div >
    );
}