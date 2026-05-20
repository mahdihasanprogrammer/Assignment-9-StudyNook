"use client"
import { authClient } from "@/lib/auth-client";
import { ProfileSkeleton } from "@/ui/ProfileSkeleton";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";


const Navbar = () => {

    const [menu, setMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
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



    // get user data from db;
    const {
        data: session,
        isPending, //loading state
    } = authClient.useSession();
    const user = session?.user;
  


    return (
        <nav className=" py-3 px-2 md:px-5 mt-2 rounded-full
        flex items-center justify-between
        bg-[#07111fb3] text-[#E2E8F0]
        border border-white/10">

            {/* logo */}
            <div className="flex gap-2 items-center">

                {/* MOBILE DESIGN */}
                <div className="relative md:hidden">
                    {
                        menu ?
                            <IoClose className="size-9 
                           p-1 hover:bg-white/10 rounded-2xl"
                                onClick={()=>{setMenu(!menu)}} />

                            : <GiHamburgerMenu
                                className="size-9 p-2  hover:bg-white/10 
                             rounded-2xl"
                                onClick={() => {setMenu(!menu)}} />

                    }

                {menu && 

                <ul className="flex flex-col absolute
                    w-50 p-4 bg-[#07111fb3] border border-white/10 
                    top-14 text-sm gap-3 rounded-2xl backdrop-blur-3xl">

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
                    }
                </div>


                <h2 className=" text-xl font-bold
                 ">Study
                    <span className="text-[#22D3EE]">Nook</span></h2>
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
         
            {isPending ?
                <ProfileSkeleton /> :
                user ?
                    <div className="flex items-center gap-3 relative">
                        <Avatar
                         onClick={()=>{setShowProfile(!showProfile)}}
                        className="size-10 cursor-pointer border-2
                         border-[#07111fb3]">
                            <Avatar.Image  referrerPolicy="no-referrer"
                                alt={user?.name || 'user'} src={user?.image} />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <p className="text-sm">{user?.name.split(' ').slice(0,1) || 'Guest'}</p>

                        {/* profile dropdown */}
                    {
                    showProfile && 
                     <div className="absolute p-4 bg-[#07111fb3] backdrop-blur-md border border-white/10 z-10 right-0
                    top-12 gap-3 rounded-2xl transition-all duration-300">

                            <div className="border-b border-white/20 pb-2">
                                <h2>{user?.name || 'Guest'}</h2>
                                <p className="text-muted">{user?.email ||'user@gamil.com'}</p>
                            </div>

                            <ul className="text-sm py-2 border-b
                             border-white/20 space-y-2">
                                <li>
                                    <Link href={'/my-listings'}>
                                    My-Listings</Link>
                                </li>
                                <li>
                                    <Link href={'/my-bookings'}>
                                    My-Bookings</Link>
                                </li>
                            </ul>

                            <p className={'hover:bg-none hover:text-[#EF4444] text-red-600 pt-2 flex items-center gap-2 cursor-pointer'}
                            onClick={async () => await authClient.signOut()}>  <LuLogOut />LogOut</p>
                        </div>
                    }

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