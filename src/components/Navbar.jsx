import { useSelector } from "react-redux";
import { useLogout } from "../hooks/useLogout";

function Navbar() {
  const { isPending, Logout } = useLogout();
  const { user } = useSelector((store) => store.user);
  return (
    <div className="flex justify-center  items-center gap-[200px] bg-[#900000] h-[100px]">
      Navbar
      <div className="flex items-center ">
        <img src={user.photoURL} alt="" width={50} className="rounded-full" />-
        {user.displayName}
      </div>
      {!isPending && (
        <button onClick={Logout} className="btn btn-ghost bg-[#010f79]">
          LogOut
        </button>
      )}
      {isPending && (
        <button className="btn btn-ghost disabled:disabled bg-[#010f79]">
          LogOut
        </button>
      )}
    </div>
  );
}

export default Navbar;
