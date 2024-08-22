import LoginForm from "../ui/login-form";
import HomeLogo from "../ui/home-logo";

export default function Login() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex h-20 w-full items-end rounded-lg bg-zinc-800 p-3 md:h-36 shadow-xl">
                    <div className="w-32 text-white md:w-46">
                        <HomeLogo />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    )
}