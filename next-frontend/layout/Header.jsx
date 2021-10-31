import Link from "next/link";
import Search from "./Search.jsx";
import Image from "next/dist/client/image";
import shopitLogo from "../public/images/shopit_logo.png";

const Header = () => {
  return (
    <nav>
      <Link href="/">
        <Image src={shopitLogo} />
      </Link>
      <Search className="search"/>
      <div className="items">
        <span id="cart">
          Cart <span id="cart-badge">0</span>
        </span>
        <Link href="/user/login">
          <button className="btn btn-sm login-btn"> Log In </button>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
