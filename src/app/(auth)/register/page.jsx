"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        const { name, email, password, photo } = data;

        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: photo,
            callbackURL: "/",
        });

        if (error) {
            alert(error.message || "Registration failed!");
        } else {
            console.log("Registered successfully:", res);

            alert("Registration Successful!");

            router.push("/");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#F3F3F3] py-8 px-4">
            <div className="bg-white p-8 rounded-lg w-full max-w-md shadow-sm">
                <h2 className="text-2xl font-bold text-center text-[#403F3F] mb-6">
                    Register your account
                </h2>

                <hr className="mb-6 border-[#E7E7E7]" />

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1 text-[#403F3F]">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            {...register("name", { required: "Name is required" })}
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none outline-none text-sm"
                        />
                        {errors.name && <p className="text-red-500 text-[10px] mt-1">{errors.name.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1 text-[#403F3F]">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Enter photo URL"
                            {...register("photo", { required: "Photo URL is required" })}
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none outline-none text-sm"
                        />
                        {errors.photo && <p className="text-red-500 text-[10px] mt-1">{errors.photo.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1 text-[#403F3F]">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none outline-none text-sm"
                        />
                        {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-semibold mb-1 text-[#403F3F]">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Min 6 chars" }
                            })}
                            className="w-full p-3 bg-[#F3F3F3] rounded border-none outline-none text-sm"
                        />
                        {errors.password && <p className="text-red-500 text-[10px] mt-1">{errors.password.message}</p>}
                    </div>

                    <div className="mb-5 flex items-center gap-2">
                        <input
                            type="checkbox"
                            id="terms"
                            {...register("terms", { required: true })}
                            className="w-3 h-3 cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-xs text-[#706F6F] cursor-pointer">
                            Accept {" "}
                            <Link href="/terms" className="font-bold hover:underline">
                                Term & Conditions
                            </Link>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#403F3F] text-white py-3 rounded font-semibold text-base hover:bg-black transition-all"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;