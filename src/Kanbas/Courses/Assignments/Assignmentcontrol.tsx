import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import AssignmentEditor from "./AssignmentEditor";

export default function AssignmentControls() {
    const { cid } = useParams();
    const [assignmentName, setAssignmentName] = useState("");
    const [dueDate, setDueDate] = useState(""); // Initialize dueDate
    const [availableFrom, setAvailableFrom] = useState(""); // Initialize availableFrom
    const [availableUntil, setAvailableUntil] = useState(""); // Initialize availableUntil

    const saveAssignment = () => {
        // Implement save logic here
        console.log(`Assignment saved: ${assignmentName}, Due: ${dueDate}, Available From: ${availableFrom}, Available Until: ${availableUntil}`);
    };

    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex">
            <span className="me-1">
                <BsSearch />
            </span>
            <input 
                id="wd-search" 
                placeholder="Search..." 
                className="form-control border-1 position-relative me-2 float-end" 
                style={{ bottom: "1px" }} 
            />

            <div>
                <button
                    id="wd-add-assignment-btn"
                    className="btn btn-lg btn-danger me-1 float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#wd-add-assignment-dialog"
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Assignment
                </button>
            </div>
            <div>
                <button 
                    id="wd-add-group-btn" 
                    className="btn btn-lg btn-secondary me-1 float-end"
                >
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                    Group
                </button>
            </div>

            {/* AssignmentEditor Modal */}
            <AssignmentEditor 
                dialogTitle="Add Assignment" 
                assignmentName={assignmentName} 
                setAssignmentName={setAssignmentName} 
                dueDate={dueDate} 
                setDueDate={setDueDate} 
                availableFrom={availableFrom} 
                setAvailableFrom={setAvailableFrom} 
                availableUntil={availableUntil} 
                setAvailableUntil={setAvailableUntil} 
                saveAssignment={saveAssignment} 
            />
        </div>
    );
}
