import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1, title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10", completed: false, score: 0,
    });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`
    const [module, setModule] = useState({
        id: 1, name: "NodeJS Module",
        description: "Learning about NodeJS server",
        course: 1,
    });
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />
            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />
            <h4>Modifying Properties</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                defaultValue={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />
            {/* create module objects */}
            <h4>Retrieving Module Objects</h4>
            <a id="wd-retrieve-module"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />
            <h4>Retrieving Module Properties</h4>
            <a id="wd-retrieve-module-name"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Module Name
            </a><hr />
            <h4>Modifying Module Name</h4>
            <input className="form-control w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <a id="wd-update-module-name"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <hr />
            <h4>Modifying Assignment Score</h4>
            <input className="form-control w-75" id="wd-assignment-score"
                defaultValue={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })} />
            <a id="wd-update-assignment-score"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <hr />
            <h4>Modifying Completion Status</h4>
            <div className="form-check">
                <input type="checkbox" id="wd-assignment-completed"
                    checked={assignment.completed} onChange={(e) =>
                        setAssignment({ ...assignment, completed: e.target.checked })} />
                <label className="form-check-label ms-2" htmlFor="wd-assignment-completed">
                    Completed
                </label>
            </div>
            <a id="wd-update-assignment-completed"
                href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
                Update Completion Status
            </a>
            <hr />
            <h4>Modifying Module Description</h4>
            <input className="form-control w-75" id="wd-module-description"
                defaultValue={module.description} onChange={(e) =>
                    setModule({ ...module, description: e.target.value })} />
            <a id="wd-update-module-description"
                href={`${MODULE_API_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <hr />
        </div>
    );
}
