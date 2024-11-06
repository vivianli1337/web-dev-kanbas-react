import React from "react";
import { useSelector } from "react-redux";

interface AssignmentEditorProps {
    dialogTitle: string;
    assignmentName: string;
    setAssignmentName: (name: string) => void;
    dueDate: string;
    setDueDate: (date: string) => void;
    availableFrom: string;
    setAvailableFrom: (date: string) => void;
    availableUntil: string;
    setAvailableUntil: (date: string) => void;
    saveAssignment: () => void;
}

export default function AssignmentEditor({
    dialogTitle,
    assignmentName,
    setAssignmentName,
    dueDate,
    setDueDate,
    availableFrom,
    setAvailableFrom,
    availableUntil,
    setAvailableUntil,
    saveAssignment,
}: AssignmentEditorProps) {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === 'FACULTY';

    if (!isFaculty) {
        return null;
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
                        <div className="form-group mb-3">
                            <input
                                id="wd-name"
                                value={assignmentName}
                                onChange={(e) => setAssignmentName(e.target.value)}
                                className="form-control"
                                placeholder="Assignment Name"
                                readOnly={!isFaculty}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="wd-description">Description</label>
                            <textarea
                                id="wd-description"
                                className="form-control"
                                placeholder="Add a description..."
                                rows={5}
                                readOnly={!isFaculty}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="wd-points">Points</label>
                            <input
                                id="wd-points"
                                defaultValue="100"
                                className="form-control w-25"
                                type="number"
                                readOnly={!isFaculty}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="wd-group">Assignment Group</label>
                            <select
                                id="wd-group"
                                className="form-select w-50"
                                defaultValue="ASSIGNMENTS"
                                disabled={!isFaculty}
                            >
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                                <option value="QUIZZES">QUIZZES</option>
                                <option value="EXAMS">EXAMS</option>
                                <option value="PROJECT">PROJECT</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="wd-due-date">Due Date</label>
                            <input
                                id="wd-due-date"
                                type="date"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                className="form-control"
                                readOnly={!isFaculty}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="wd-available-from">Available From</label>
                            <input
                                id="wd-available-from"
                                type="date"
                                value={availableFrom}
                                onChange={(e) => setAvailableFrom(e.target.value)}
                                className="form-control"
                                readOnly={!isFaculty}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="wd-available-until">Available Until</label>
                            <input
                                id="wd-available-until"
                                type="date"
                                value={availableUntil}
                                onChange={(e) => setAvailableUntil(e.target.value)}
                                className="form-control"
                                readOnly={!isFaculty}
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button onClick={saveAssignment} type="button" data-bs-dismiss="modal" className="btn btn-danger">
                            Save Assignment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
