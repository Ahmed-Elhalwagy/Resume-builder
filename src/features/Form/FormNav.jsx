import { Link } from "react-router-dom";

function FormNav() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4 bg-stone-200 p-4 text-sm font-semibold text-stone-600">
      <Link to="/basic-info" className="hover:text-stone-900">
        Basic Info
      </Link>
      <Link to="/work-experince" className="hover:text-stone-900">
        Work Experince
      </Link>
      <Link to="/skills" className="hover:text-stone-900">
        Skills
      </Link>
      <Link to="/education" className="hover:text-stone-900">
        Education
      </Link>
      <Link to="/summary" className="hover:text-stone-900">
        Summary
      </Link>
    </div>
  );
}

export default FormNav;
