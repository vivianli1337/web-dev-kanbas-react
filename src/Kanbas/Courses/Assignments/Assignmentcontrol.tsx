// import { FaPlus } from "react-icons/fa6";
// import { BsSearch } from "react-icons/bs";
// import { useParams } from "react-router-dom";
// import React, { useState } from "react";
// import AssignmentEditor from "./AssignmentEditor";

// export default function AssignmentControls() {
//     const { cid } = useParams();
//     const [assignmentName, setAssignmentName] = useState("");
//     const [dueDate, setDueDate] = useState(""); // Initialize dueDate
//     const [availableFrom, setAvailableFrom] = useState(""); // Initialize availableFrom
//     const [availableUntil, setAvailableUntil] = useState(""); // Initialize availableUntil

//     const saveAssignment = () => {
//         // Implement save logic here
//         console.log(`Assignment saved: ${assignmentName}, Due: ${dueDate}, Available From: ${availableFrom}, Available Until: ${availableUntil}`);
//     };

//     return (
//         <div id="wd-assignment-controls" className="text-nowrap d-flex">
//             <span className="me-1">
//                 <BsSearch />
//             </span>
//             <input 
//                 id="wd-search" 
//                 placeholder="Search..." 
//                 className="form-control border-1 position-relative me-2 float-end" 
//                 style={{ bottom: "1px" }} 
//             />

//             <div>
//                 <button
//                     id="wd-add-assignment-btn"
//                     className="btn btn-lg btn-danger me-1 float-end"
//                     data-bs-toggle="modal"
//                     data-bs-target="#wd-add-assignment-dialog"
//                 >
//                     <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                     Assignment
//                 </button>
//             </div>
//             <div>
//                 <button 
//                     id="wd-add-group-btn" 
//                     className="btn btn-lg btn-secondary me-1 float-end"
//                 >
//                     <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
//                     Group
//                 </button>
//             </div>

//             {/* AssignmentEditor Modal */}
//             <AssignmentEditor 
//                 dialogTitle="Add Assignment" 
//                 assignmentName={assignmentName} 
//                 setAssignmentName={setAssignmentName} 
//                 dueDate={dueDate} 
//                 setDueDate={setDueDate} 
//                 availableFrom={availableFrom} 
//                 setAvailableFrom={setAvailableFrom} 
//                 availableUntil={availableUntil} 
//                 setAvailableUntil={setAvailableUntil} 
//                 saveAssignment={saveAssignment} 
//             />
//         </div>
//     );
// }

import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AssignmentEditor from "./AssignmentEditor";
import { addAssignment } from "./reducer";

export default function AssignmentControls() {
    const { cid } = useParams();
    const dispatch = useDispatch();

    // Assignment states
    const [assignmentName, setAssignmentName] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [availableFrom, setAvailableFrom] = useState("");
    const [availableUntil, setAvailableUntil] = useState("");
    const [points, setPoints] = useState(100);

    const saveAssignment = () => {
        // Dispatch addAssignment action with all assignment details
        dispatch(addAssignment({
            title: assignmentName,
            description: description,
            dueDate: dueDate,
            availableFrom: availableFrom,
            availableUntil: availableUntil,
            points: points,
            course: cid,
            completed: false,
        }));

        // Reset fields after saving
        setAssignmentName("");
        setDescription("");
        setDueDate("");
        setAvailableFrom("");
        setAvailableUntil("");
        setPoints(100);

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
                description={description} 
                setDescription={setDescription} 
                dueDate={dueDate} 
                setDueDate={setDueDate} 
                availableFrom={availableFrom} 
                setAvailableFrom={setAvailableFrom} 
                availableUntil={availableUntil} 
                setAvailableUntil={setAvailableUntil} 
                points={points} 
                setPoints={setPoints} 
                saveAssignment={saveAssignment} 
            />
        </div>
    );
}
