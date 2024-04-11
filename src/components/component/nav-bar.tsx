import { AnchorIcon } from "lucide-react";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="bg-blue-500 dark:bg-gray-1000">
            <div className="container px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14">
                    <div className="flex items-center">
                        <Link className="text-lg font-bold flex items-center gap-2 text-white dark:text-gray-900" href="/">
                            <AnchorIcon className="w-6 h-6 mr-2" />
                            StCroixStat
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}