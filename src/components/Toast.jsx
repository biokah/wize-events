import { FcHighPriority } from "react-icons/fc";

export default function Toast ({position, error}) {
    return(
        <div className={`bg-white w-max p-2 text-md rounded fixed top-0 left-1/2 ml-[-122px] z-10 translate warning ${position ? "toast": ""}`}>
            <span className="flex items-center justify-center">{error} <FcHighPriority className="ml-2"/></span>
        </div>
    )
}