"use client"
import { authClient } from "@/lib/auth-client";
import { ProfileSkeleton } from "@/ui/ProfileSkeleton";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {

    const [menu, setMenu] = useState(false);
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




    // const data = authClient.useSession();
    // console.log(data, 'test data')

    // get user data from db;
    const {
        data: session,
        isPending, //loading state
    } = authClient.useSession();
    const user = session?.user;
    console.log(session, 'session')


    return (
        <nav className=" py-2 px-2 md:px-5 mt-2 rounded-full
        flex items-center justify-between
        bg-[#07111fb3] text-[#E2E8F0] backdrop-blur-xl
        border border-white/10">

            {/* logo */}
            <div className="flex gap-2 items-center">

                {/* MOBILE DESIGN */}
                <div className="relative md:hidden">
                    {
                        menu ?

                            <IoClose className="size-9 
                           p-1 hover:bg-white/10 rounded-2xl"
                                onClick={() => { setMenu(!menu) }} />

                            : <GiHamburgerMenu
                                className="size-9 p-2  hover:bg-white/10 
                             rounded-2xl"
                                onClick={() => { setMenu(!menu) }} />

                    }

                {menu && 

                <ul className="flex flex-col md:hidden absolute
                    w-50 p-4 bg-[#07111fb3] border border-white/10 
                    top-14 text-sm gap-3 rounded-2xl">

                        <li className="hover:text-[#06B6D4]">
                            <Link href="/">Home</Link></li>
                        <li className="hover:text-[#06B6D4]">
                            <Link href="/all-rooms"> All Rooms </Link></li>

                        {/* private route */}
                        {isPending ?
                            <ProfileSkeleton /> :
                            user ?
                                privateLinks.map(link =>
                                    <li className="hover:text-[#06B6D4]"
                                        key={link.id}>
                                        <Link href={link.path}>{link.name}</Link>
                                    </li>)
                                : ""
                        }
                    </ul>}
                </div>


                <h2 className="text-[#22D3EE] text-xl font-semibold">StudyNook</h2>
            </div>

            {/* navigation links */}
            <ul className="md:flex hidden items-center justify-between gap-5 text-sm">
                <li className="hover:text-[#06B6D4]">
                    <Link href="/">Home</Link></li>
                <li className="hover:text-[#06B6D4]">
                    <Link href="/all-rooms"> All Rooms </Link></li>


                {/* private route */}
                {isPending ?
                    <ProfileSkeleton /> :
                    user ?
                        privateLinks.map(link =>
                            <li className="hover:text-[#06B6D4]"
                                key={link.id}>
                                <Link href={link.path}>{link.name}</Link>
                            </li>)
                        : ""
                }
            </ul>
            <Button onClick={async () => await authClient.signOut()}>
                Logout
            </Button>
            {isPending ?
                <ProfileSkeleton /> :
                user ?
                    <div className="flex items-center gap-4">
                        <Avatar>
                            <Avatar.Image  referrerPolicy="no-referrer"
                                alt={user?.name || 'user'} src={user?.image} />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>

                    </div> :
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
                        <h1>{user?.name}</h1>
                    </div>}


        </nav>
    );
};

export default Navbar;