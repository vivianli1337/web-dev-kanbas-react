// import * as db from "../../Database";
import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import PeopleDetails from "./Details";
import { Link, useParams } from "react-router-dom";
import * as accountClient from "../../Account/client"; 




export default function PeopleTable(
    { users = [] }: { users?: any[] }
) {
    // const { cid } = useParams();
    // const { users, enrollments } = db;

    // const [users, setUsers] = useState<any[]>([]);
    // const fetchUsers = async () => {
    //     const users = await accountClient.findAllUsers();
    //     console.log(users)
    //     setUsers(users);
    // };
    // const { uid } = useParams();
    // useEffect(() => {
    //     fetchUsers();
    // }, [uid]);

    // const [role, setRole] = useState("");
    // const filterUsersByRole = async (role: string) => {
    //     setRole(role);
    //     if (role) {
    //         const users = await accountClient.findUsersByRole(role);
    //         setUsers(users);
    //     } else {
    //         fetchUsers();
    //     }
    // };
    
    // const [name, setName] = useState("");
    // const filterUsersByName = async (name: string) => {
    //     setName(name);
    //     if (name) {
    //         const users = await accountClient.findUsersByPartialName(name);
    //         setUsers(users);
    //     } else {
    //         fetchUsers();
    //     }
    // };

    // const createUser = async () => {
    //     const user = await accountClient.createUser({
    //         firstName: "New",
    //         lastName: `User${users.length + 1}`,
    //         username: `newuser${Date.now()}`,
    //         password: "password123",
    //         email: `email${users.length + 1}@neu.edu`,
    //         section: "S101",
    //         role: "STUDENT",
    //     });
    //     setUsers([...users, user]);
    // };


    // const { courseId } = useParams();
    // const [courseUsers, setCourseUsers] = useState<any[]>([]);

    // const fetchCourseUsers = async () => {
    //     try {
    //         const courseUsers = await coursesClient.findUsersForCourse(courseId || "");
    //         setCourseUsers(courseUsers)
    //         console.log({user: users}); 
    //     } catch (error) {
    //         console.error("Error fetching users for the course:", error);
    //     }
    // };

    // useEffect(() => {
    //     fetchCourseUsers();
    // }, [courseId]);

    return (
        <div id="wd-people-table">
            <PeopleDetails />

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Login ID</th>
                        <th>Section</th>
                        <th>Role</th>
                        <th>Last Activity</th>
                        <th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {users
                        // .filter((usr) =>
                        //     enrollments.some((enrollment) => enrollment.user === usr._id && enrollment.course === cid))
                        .map((user: any) => (
                            <tr key={user._id}>
                                <td className="wd-full-name text-nowrap">
                                    <Link to={`/Kanbas/Account/Users/${user._id}`} 
                                    className="text-decoration-none">
                                        <FaUserCircle className="me-2 fs-1 text-secondary" />
                                        <span className="wd-first-name">{user.firstName}</span>{" "}
                                        <span className="wd-last-name">{user.lastName}</span>
                                    </Link> </td>
                                <td className="wd-login-id">{user.loginId}</td>
                                <td className="wd-section">{user.section}</td>
                                <td className="wd-role">{user.role}</td>
                                <td className="wd-last-activity">{user.lastActivity}</td>
                                <td className="wd-total-activity">{user.totalActivity}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div >
    );
}



