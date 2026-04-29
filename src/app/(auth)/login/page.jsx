"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message || "Login failed!");
        } else {
            console.log("Logged in successfully:", res);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3] px-4">
            <div className="bg-white p-10 rounded-lg w-full max-w-md shadow-sm">
                <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-6">
                    Login your account
                </h2>

                <hr className="mb-6 border-[#E7E7E7]" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-base font-semibold mb-2 text-[#403F3F]">
                            Email address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none focus:ring-1 focus:ring-gray-300 outline-none text-sm"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-xs mt-1">{errors.email.message}</span>
                        )}
                    </div>

                    <div className="mb-5">
                        <label className="block text-base font-semibold mb-2 text-[#403F3F]">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" }
                            })}
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none focus:ring-1 focus:ring-gray-300 outline-none text-sm"
                        />
                        {errors.password && (
                            <span className="text-red-500 text-xs mt-1">{errors.password.message}</span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#403F3F] text-white py-3 rounded font-semibold hover:bg-black transition-all"
                    >
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