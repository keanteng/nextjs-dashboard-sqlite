import HomeLogo from "./home-logo"
import {
    AtSymbolIcon,
    KeyIcon,
    ArrowRightIcon
} from '@heroicons/react/24/outline';


export default function LoginForm() {
    return (
        <form className="space-y-3">
            <div className="flex-1 rounded-lg bg-zinc-300 px-6 pb-4 pt-8 shadow-xl">
                <h1 className="md-3 text-2xl">
                    Please log in to continue.
                </h1>
                <div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <input
                        className="peer block w-full rounded-md border border-zinc-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="email"
                        type="email"
                        placeholder="Enter your email Address"
                        required
                        />
                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                <div>
                    <label
                        className="mb-3 mt-5 block text-xs font-medium text-gray-900"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <div className="relative">
                        <input
                        className="peer block w-full rounded-md border border-zinc-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        required
                        />
                        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
                <div className="flex justify-center">
                <LoginButton />
                </div>
            </div>
        </form>
    )
}

function LoginButton() {
    return (
        <button className="mt-6 flex flex-row items-center gap-3 text-white bg-zinc-800 px-2 py-2 rounded-lg">
            Log In
            <ArrowRightIcon className='ml-auto h-5 w-5' />
        </button>
    )
}