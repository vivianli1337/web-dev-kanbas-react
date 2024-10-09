import { TiCancel } from "react-icons/ti";

export default function CancelMark() {
    return (
        <span className="me-1 position-relative">
            <TiCancel style={{ top: "2px", color: "gray !important" }}
                className="me-1 position-absolute fs-5" />
            <TiCancel className="text-white me-1 fs-6" />
        </span>
    );
}