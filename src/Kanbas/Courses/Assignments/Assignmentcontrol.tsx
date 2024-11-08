import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import * as db from "../../Database";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";


export default function AssignmentControls(
    // { assignmentsId, deleteAssignments, editAssignments }: {
    //     assignmentsId: string; deleteAssignments: (moduleId: string) => void;
    //     editAssignments: (assignmentsId: string) => void
    // }

) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const { enrollments, users } = db;
    const navigate = useNavigate();
    const { cid, aId } = useParams();

    const handleAddAssignment = () => {
        navigate(`/Kanbas/Courses/${cid}/Assignments/New`);
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
                        <button onClick={handleAddAssignment} id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                            Assignment</button>
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