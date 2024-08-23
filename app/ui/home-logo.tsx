import { TruckIcon } from "@heroicons/react/24/outline";

export default function HomeLogo() {
    return (
        <div className="flex flex-row items-center leading-none text-white">
            <TruckIcon className="h-12 w-12"/>
            <p className="text-[44px]">Nexus Engine&nbsp;&nbsp;</p>
        </div>
    )
}