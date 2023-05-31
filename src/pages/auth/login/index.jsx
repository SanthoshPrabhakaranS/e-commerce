import React from "react";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthService from "@/services/auth.service";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import Storage from "@/storage/storage";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const Login = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const _ApiService = new AuthService();
  const _Storage = new Storage();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
    };
    const response = await _ApiService.login(user);
    const username = response.username;
    const userId = response.userId;
    const token = response.token;
    if (!response.token) return toast.error(response.message);
    if (response.token) {
      _Storage.setItem("token", token);
      _Storage.setItem("userId", userId);
      _Storage.setItem("username", username);
    }
    reset();
    router.push("/")
  };

  return (
    <div className="w-full flex flex-col gap-6 justify-center items-center p-3">
      <Toaster position="top-right" reverseOrder={false} />
      {/* Logo */}
      <h1 className={`font-black text-[2.2rem]`}>
        Sho
        <p
          className={`rotate-[18deg] text-purple-600 inline-block font-medium text-[2.2rem]`}
        >
          p
        </p>
        eee
      </h1>
      <nav className="flex flex-row items-center gap-[4rem]">
        <Link
          href={"/auth/login"}
          className={`cursor-pointer ${
            pathname.includes("login")
              ? "text-black underline"
              : "text-gray-500"
          } hover:underline hover:text-black font-semibold`}
        >
          Login
        </Link>
        <Link
          href={"/auth/signin"}
          className={`cursor-pointer ${
            pathname.includes("signin")
              ? "text-black underline"
              : "text-gray-500"
          } hover:underline hover:text-black font-semibold`}
        >
          Register
        </Link>
      </nav>
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-[2.5rem] font-semibold">
          I already have an account
        </h1>
        <p>Sign in with your email and password</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col justify-center items-center gap-[3rem]"
      >
        <div className="w-full max-w-[500px]">
          <Input
            type="email"
            required
            className="w-full"
            variant="standard"
            label="Email"
            size="md"
            {...register("email")}
          />
        </div>
        <div className="w-full max-w-[500px]">
          <Input
          type="password"
            required
            className="w-full"
            variant="standard"
            label="Password"
            size="md"
            {...register("password")}
          />
        </div>
        <button
          type="submit"
          className="py-3 px-8 bg-black text-white hover:bg-white hover:text-black text-[.9rem] transition-all rounded-sm font-semibold border border-black"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
