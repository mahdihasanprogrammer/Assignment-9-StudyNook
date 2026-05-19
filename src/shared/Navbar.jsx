"use client"
import { Button } from "@heroui/react";
import Link from "next/link";


const Navbar = () => {
    const privateLinks = [
        {
            id: 1,
            name: "Add Room",
            path: "/add-room",
        },
        {
            id: 2,
            name: "My Listings",
            path: "/my-listings",
        },
        {
            id: 3,
            name: "My Bookings",
            path: "/my-bookings",
        },
    ];

    
    return (
        <nav className=" py-3 px-5 mt-2 rounded-full
        flex items-center justify-between
        bg-[rgba(7,17,31,0.7)] text-[#E2E8F0] backdrop-blur-xl
        border border-white/10">
            {/* logo */}
            <div>
                <h2 className="text-[#22D3EE] text-xl font-semibold">StudyNook</h2>
            </div>

            {/* navigation links */}
            <ul className="flex items-center justify-between gap-5 text-sm">
                <li className="hover:text-[#06B6D4]">
                    <Link href="/">Home</Link></li>
                <li className="hover:text-[#06B6D4]">
                    <Link href="/all-rooms"> All Rooms </Link></li>

                {/* private route */}
                {
                    privateLinks.map(link =>
                        <li className="hover:text-[#06B6D4]"
                            key={link.id}>
                            <Link href={link.path}>{link.name}</Link>
                        </li>
                    )
                }
            </ul>

            <div className="flex items-center gap-3">
                <Link href={'/login'}>
                    <Button size="sm" className="rounded-lg
                    bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F]">
                        Login
                    </Button>
                </Link>
                <Link href={'/signup'}>
                    <Button size="sm" className=" rounded-lg
                    bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F]">
                        Sign up
                    </Button>
                </Link>
            </div>


        </nav>
    );
};

export default Navbar;