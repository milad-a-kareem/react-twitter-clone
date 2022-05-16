import { useState } from "react";
import { useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";

function MobileMenuIcon() {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div
        onClick={toggle}
        className="w-8 h-8 rounded-full overflow-hidden bg-blue sm:hidden shrink-0 hover:cursor-pointer"
      >
        <img src={user.profileImage} alt="milad" className="w-full h-full" />
      </div>
      {isOpen && <MobileMenu onClick={toggle} />}
    </>
  );
}

export default MobileMenuIcon;
