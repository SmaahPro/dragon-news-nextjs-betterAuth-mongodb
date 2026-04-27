import Link from "next/link";
import Image from "next/image";
import userAvater from "@/assets/user.png";

const Navbar = () => {
    return (
        <div className="container mx-auto flex justify-between gap-4 mt-8">
            <div></div>
            <div>
                <ul className="flex justify-between items-center text-gray-700 gap-6">
                    <li> <Link href={"/"}>Home</Link> </li>
                    <li> <Link href={"/about-us"}>About</Link> </li>
                    <li> <Link href={"/career"}>Career</Link> </li>
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