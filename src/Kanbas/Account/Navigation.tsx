import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export default function AccountNavigation() {
  const { pathname } = useLocation();
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link id="wd-signin-link" to="/Kanbas/Account/Signin"
        className={`list-group-item ${pathname.includes("Signin") ? "active border-0" : "text-danger border border-0"}`}>Sign In</Link>

      <Link id="wd-signup-link" to="/Kanbas/Account/Signup"
        className={`list-group-item ${pathname.includes("Signup") ? "active border-0" : "text-danger border border-0"}`}>Sign Up</Link>

      <Link id="wd-profile-link" to="/Kanbas/Account/Profile"
        className={`list-group-item ${pathname.includes("Profile") ? "active border-0" : "text-danger border border-0"}`}>Profile</Link>
    </div>
  );
}

