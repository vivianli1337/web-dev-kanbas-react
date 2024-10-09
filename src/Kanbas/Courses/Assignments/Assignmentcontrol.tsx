import { FaPlus } from "react-icons/fa6";


export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex">
            <div className="flex-fill">
            <input id="wd-search" placeholder="Search..." type="text"
                className="form-control mb-2 border-0" style={{ bottom: "1px" }} />
                </div>
                <div>
            <button id="wd-add-assignment-btn" className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment</button>
                </div>
                <div>
            <button id="wd-add-group-btn" className="btn btn-lg btn-secondary me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group</button>
                </div>
        </div>
    );
}
