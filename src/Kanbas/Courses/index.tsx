import CoursesNavigation from "./Navigation";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

// assignment
import * as assignmentsClient from "./Assignments/client";
import * as coursesClient from "./client";
import { assignments } from "../Database";
import { setAssignments, addAssignment, editAssignment, updateAssignment, deleteAssignment }
    from "./Assignments/reducer";




export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  // const [assignmentName, setAssignmentName] = useState("");
  const [assignmentName, setAssignmentName] = useState<any[]>([]);
  const dispatch = useDispatch();
  const { currentAssignment } = useSelector((state: any) => state.assignmentsReducer);
  const fetchAssignments = async () => {
    try {
      const assignments = await coursesClient.findAssignmentsForCourses(cid || "");
      setAssignmentName(assignments);
      dispatch(setAssignments(assignments))
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchAssignments();
  }, [currentAssignment]);


  const addAssignment = async () => {
    // console.log("Add assignment logic here");
    const newAssignment = await coursesClient.createAssignment(cid as string, assignmentName);
    setAssignmentName([...assignmentName, newAssignment]);
  };
  const deleteAssignment = async (aId: string) => {
    const status = await assignmentsClient.deleteAssignment(aId);
    setAssignmentName(assignments.filter((assignment) => course._id !== assignment.course));
  };
  const updateAssignment = async () => {
    await assignmentsClient.updateAssignment(assignments);
    setAssignmentName(assignments.map((a) => {
      if (a.course === course._id) { return assignments; }
      else { return a; }
    })
    );
  };


  return (
    <div id="wd-courses">
      <h2 className="text-danger" >
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name}  &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">

          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:aId"
              element={
                <AssignmentEditor
                // dialogTitle="Edit Assignment"
                // assignmentName={assignmentName}
                // setAssignmentName={setAssignmentName}
                // addAssignment={addAssignment}
                />
              }
            />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}