import { FaPlus } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";


export default function AssignmentControls() {
    return (
        <div id="wd-assignment-controls" className="text-nowrap d-flex">
            <span className="me-1">
                <BsSearch />
            </span>
            <input id="wd-search" placeholder="Search..." 
            className="form-control border-1 position-relative me-2 float-end" 
            style={{ bottom: "1px" }} />

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