import Link from "next/link";

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3] px-4">
            <div className="bg-white p-10 rounded-lg w-full max-w-md shadow-sm">
                <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-6">
                    Login your account
                </h2>

                <hr className="mb-6 border-[#E7E7E7]" />

                <form>
                    <div className="mb-4">
                        <label className="block text-base font-semibold mb-2 text-[#403F3F]">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none focus:ring-1 focus:ring-gray-300 outline-none text-sm"
                        />
                    </div>

                    <div className="mb-5">
                        <label className="block text-base font-semibold mb-2 text-[#403F3F]">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none focus:ring-1 focus:ring-gray-300 outline-none text-sm"
                        />
                    </div>

                    <button className="w-full bg-[#403F3F] text-white py-3 rounded font-semibold hover:bg-black transition-all">
                        Login
                    </button>
                </form>

                <p className="text-center mt-5 text-sm font-medium text-[#706F6F]">
                    Don't Have An Account ?{" "}
                    <Link href="/register" className="text-[#F75B5F] font-bold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;