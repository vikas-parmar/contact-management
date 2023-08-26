import { Link } from "react-router-dom";

const buttonStyle =
  "bg-black hover:bg-white hover:text-black w-full p-2 text-white";
const linkStyle = "w-3/4";

const Navbar = () => {
  return (
    <nav className="flex bg-darkseagreen gap-2 basis-20 sm:basis-1/5 flex-row sm:flex-col justify-center items-center">
      <Link to="/contacts" className={linkStyle}>
        <button className={buttonStyle}>Contacts</button>
      </Link>
      <Link to="/chartandmaps" className={linkStyle}>
        <button className={buttonStyle}>Charts And Maps</button>
      </Link>
    </nav>
  );
};

export default Navbar;
