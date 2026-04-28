import Link from "next/link";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaSwimmer, FaChalkboardTeacher, FaFutbol } from 'react-icons/fa';

const RightSidebar = () => {
    return (
        <div className="space-y-8">
            {/* Login */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Login With</h2>

                <div className="space-y-3">
                    <button className="btn w-full border border-blue-500 bg-white text-blue-600 hover:bg-blue-50">
                        <FaGoogle /> Login with Google
                    </button>

                    <button className="btn w-full border border-gray-500 bg-white text-black hover:bg-gray-100">
                        <FaGithub /> Login with Github
                    </button>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-bold mb-4">Find Us On</h2>
                <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <a
                        href="https://www.facebook.com/your-page"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-3 border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                        <FaFacebookF className="text-blue-600" />
                        <span>Facebook</span>
                    </a>

                    <a
                        href="https://twitter.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-3 border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                        <FaTwitter className="text-sky-500" />
                        <span>Twitter</span>
                    </a>

                    <a
                        href="https://www.instagram.com/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-3 hover:bg-gray-50 transition"
                    >
                        <FaInstagram className="text-pink-500" />
                        <span>Instagram</span>
                    </a>
                </div>
            </div>

            {/* Q Zone */}
            <div className="bg-slate-100 p-5 rounded-lg">
                <h2 className="text-2xl font-bold mb-5">Q-Zone</h2>

                <div className="space-y-5">
                    <Link href="/swimming" className="block">
                        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-center">
                            <FaSwimmer className="text-6xl text-blue-500 mx-auto" />
                            <p className="text-center font-semibold mt-3">Swimming</p>
                        </div>
                    </Link>

                    <Link href="/classroom" className="block">
                        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-center">
                            <FaChalkboardTeacher className="text-6xl text-green-500 mx-auto" />
                            <p className="text-center font-semibold mt-3">Class</p>
                        </div>
                    </Link>

                    <Link href="/playground" className="block">
                        <div className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition text-center">
                            <FaFutbol className="text-6xl text-orange-500 mx-auto" />
                            <p className="text-center font-semibold mt-3">Play Ground</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;