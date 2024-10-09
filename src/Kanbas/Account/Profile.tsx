// import { Link } from "react-router-dom";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h1>Profile</h1>
//       <input id="wd-username"
//         defaultValue="alice" 
//         placeholder="username" 
//         className="col-sm-2 col-form-label" />
//       <input defaultValue="123" placeholder="password" type="password"
//         className="wd-password" /><br />

//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" /><br />
//       <input defaultValue="Wonderland" placeholder="Last Name" id="wd-lastname" /><br />
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" /><br />
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" /><br />
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option>
//         <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>
//         <option value="STUDENT">Student</option>
//       </select><br />
//       <Link to="/Kanbas/Account/Signin" >Sign out</Link>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen" className="d-block">
      <h1>Profile</h1>
      <input id="wd-username"
        defaultValue="alice"
        placeholder="username"
        className="form-control mb-2" />
      <input id="wd-password"
        defaultValue="123"
        placeholder="password"
        type="password"
        className="form-control mb-2" />
      <input id="wd-firstname"
        defaultValue="Alice"
        placeholder="First Name"
        className="form-control mb-2" />
      <input id="wd-lastname"
        defaultValue="Wonderland"
        placeholder="Last Name"
        className="form-control mb-2" />
      <input id="wd-dob"
        defaultValue="yyyy-mm-dd"
        type="date"
        className="form-control mb-2" />
      <input id="wd-email"
        defaultValue="alice@wonderland"
        type="email"
        className="form-control mb-2" />
      <select id="wd-role" className="form-select mb-2">
        <option selected>User</option>
        <option value="FACULTY">Faculty</option>
        <option value="ADMIN">Admin</option>
        <option value="STUDENT">Student</option>
      </select>
      <Link id="wd-signout-btn" to="/Kanbas/Account/Signin" className="btn btn-primary w-100 border-0" style={{backgroundColor: "red"}}>Sign Out</Link>
    </div>
  );
}