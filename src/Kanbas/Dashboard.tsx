import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addEnrollment, deleteEnrollment, setEnrollments } from "./enrollmentsReducer";
import * as enrollmentsClient from "./enrollmentsClient";
// import * as uuid from 'uuid';


export default function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse, enrolling, setEnrolling, updateEnrollment }: {
      courses: any[]; course: any; setCourse: (course: any) => void;
      addNewCourse: () => void; deleteCourse: (course: any) => void;
      updateCourse: () => void;
      enrolling: boolean; setEnrolling: (enrolling: boolean) => void;
      updateEnrollment: (courseId: string, enrolled: boolean) => void
    }) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);

  // had to comment all out for a6
  const toggleEnrollments = () => {
    setShowAllCourses(state => !state);
  };

  const checkEnrollment = (enrollment: any, course: any) =>
    enrollment.user === currentUser._id && enrollment.course === course._id;

  const handleLinkClick = (event: any, course: any) => {
    if (!enrollments.find((enrollment: any) => checkEnrollment(enrollment, course))) {
      event.preventDefault();
    }
  };

  //enrollment a5
  const saveEnrollment = async (event: any, course: any) => {
    event.preventDefault();
    const enrollment = await enrollmentsClient.createEnrollment(currentUser._id, course._id);
    dispatch(addEnrollment(enrollment));
  };

  const removeEnrollment = async (event: any, enrollment: any) => {
    event.preventDefault();
    await enrollmentsClient.unenrollUserFromCourse(enrollment._id);
    dispatch(deleteEnrollment(enrollment._id));
  }

  //enrollment a6
  useEffect(() => {
    const fetchEnrollments = async () => {
      console.log('fetching enrollments');
      const enrollments = await enrollmentsClient.findCoursesForUser(currentUser._id);
      dispatch(setEnrollments(enrollments));
    };

    fetchEnrollments();
  }, []);


  return (
    <div className="p-4" id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
        <button onClick={() => setEnrolling(!enrolling)} className="float-end btn btn-primary" >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1> <hr />

      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}> Add </button>
            <button className="btn btn-warning float-end me-2"
              onClick={updateCourse} id="wd-update-course-click">
              Update
            </button>
          </h5>
          <br />
          <input value={course.name} className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })} />
          <textarea value={course.description} className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          <hr />
        </>
      )}

      {/* {currentUser.role === "STUDENT" &&
        <button className="btn btn-primary float-end" id="wd-enroll-course-click" 
        // onClick={toggleEnrollments}
        >
          Enrollments
        </button>
      } */}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses
            // .filter((course) =>
            //   enrollments.some((enrollment: any) => showAllCourses ? true : checkEnrollment(enrollment, course)))
            .map((course) => {
              // const enrollment = enrollments.find((enrollment: any) => checkEnrollment(enrollment, course));
              return (
                <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                  <div className="card overflow-hidden">
                    <Link
                      className="wd-dashboard-course-link text-decoration-none text-dark"
                      to={`/Kanbas/Courses/${course._id}/Home`}
                      // onClick={(event) => handleLinkClick(event, course)}
                    >
                      <img src="/images/reactjs.jpg" width="100%" height={160} />
                      <div className="card-body">
                        <h5 className="wd-dashboard-course-title card-title">

                          {enrolling && (
                            <button onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                              className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                              {course.enrolled ? "Unenroll" : "Enroll"}
                            </button>
                          )}

                          {course.name}
                        </h5>
                        <p
                          className="wd-dashboard-course-title card-text overflow-y-hidden"
                          style={{ maxHeight: 100 }}
                        >
                          {course.description}
                          {enrolling && (
                            <button onClick={(event) => {
                              event.preventDefault();
                              updateEnrollment(course._id, !course.enrolled);
                            }}
                              className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`} >
                              {course.enrolled ? "Unenroll" : "Enroll"}
                            </button>
                          )}
                        </p>


                        {showAllCourses ? 
                        (
                          !enrollments ? (
                            <button className="btn btn-success" onClick={(event) => {
                              // event.preventDefault();
                              // dispatch(addEnrollment({ _id: uuid.v4(), user: currentUser._id, course: course._id }));
                              saveEnrollment(event, course)
                            }}>
                              Enroll
                            </button>
                          ) : (
                            <button className="btn btn-danger" onClick={(event) => {
                              // event.preventDefault();
                              // dispatch(deleteEnrollment(enrollment._id));
                              removeEnrollment(event, enrollments)

                            }}>
                              Unenroll
                            </button>
                          )
                        ) 
                        : (
                          <button className="btn btn-primary"> Go </button>
                        )}

                        {currentUser.role === "FACULTY" && (
                          <>
                            <button
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              className="btn btn-danger float-end"
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                            <button
                              id="wd-edit-course-click"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              className="btn btn-warning me-2 float-end"
                            >
                              Edit
                            </button>
                          </>
                        )}
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
