import React from "react";
import { useSelector } from "react-redux";

interface AssignmentEditorProps {
    dialogTitle: string;
    assignmentName: string;
    setAssignmentName: (name: string) => void;
    saveAssignment: () => void;
}

export default function AssignmentEditor({
    dialogTitle,
    assignmentName,
    setAssignmentName,
    saveAssignment,
}: AssignmentEditorProps) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";

    if (!isFaculty) {
        return null; // Renders nothing if the user is not faculty
    }

    return (
        <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="staticBackdropLabel">
                            {dialogTitle}
                        </h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <input
                            className="form-control"
                            value={assignmentName}
                            placeholder="Assignment Name"
                            onChange={(e) => setAssignmentName(e.target.value)}
                        />
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button
                            onClick={saveAssignment}
                            type="button"
                            data-bs-dismiss="modal"
                            className="btn btn-danger"
                        >
                            Save Assignment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
