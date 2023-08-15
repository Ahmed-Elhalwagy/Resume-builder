import { Outlet } from "react-router-dom";
import FormNav from "./FormNav";
function UserForm() {
  return (
    <div className="relative flex h-full w-full flex-col shadow-xl">
      <FormNav />
      <div className="h-fit w-full">{<Outlet />}</div>
    </div>
  );
}

export default UserForm;
