import Link from "next/link";
import Image from "next/image";
import userAvater from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between gap-4 mt-8">
            <div></div>
            <div>
                <ul className="flex justify-between items-center text-gray-700 gap-6">
                    <li> <NavLink href={"/"}>Home</NavLink> </li>
                    <li> <NavLink href={"/about-us"}>About</NavLink> </li>
                    <li> <NavLink href={"/career"}>Career</NavLink> </li>
                </ul>
            </div>

            <div className="flex items-center gap-3">
                <Image src={userAvater} alt="User Avater" width={50} height={50} />
                <button className="btn bg-purple-700 text-white">
                    <Link href={"/login"}> Login </Link>
                </button>
            </div>
        </div>
    );
};

export default Navbar;