import { useSelector } from "react-redux";

function MobileMenuIcon() {
  const user = useSelector((state) => state.user);
  return (
    <div className="w-8 h-8 rounded-full overflow-hidden bg-blue sm:hidden shrink-0">
      <img src={user.profileImage} alt="milad" className="w-full h-full" />
    </div>
  );
}

export default MobileMenuIcon;
