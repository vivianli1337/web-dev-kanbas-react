import { Link } from "react-router-dom";
import { useLocation } from "react-router";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];


  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link key={link} to={link} className={`list-group-item
              ${pathname.includes(link) ? "active border-0" : "text-danger border border-0"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}
