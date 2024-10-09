import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";

export default function ModuleControlButtons() {
    return (
        <div className="float-end">
            <span style={{border: "2px solid gray", borderRadius: "15px", padding:"5px", margin:"10px"}}>40% of Total</span>
            <FaPlus style={{margin:"10px"}}/>
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}