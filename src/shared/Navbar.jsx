"use client"
import { authClient } from "@/lib/auth-client";
import NavLink from "@/ui/NavLink";
import { ProfileSkeleton } from "@/ui/ProfileSkeleton";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { LuLogOut } from "react-icons/lu";


const Navbar = () => {
    const router = useRouter();
    const [showMenu, setShowMenu] = useState(false);
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

    const handleLogout = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });
    }

    return (
        <nav className=" py-2  md:px-5 mt-2 rounded-full
        flex items-center justify-between
        bg-[#07111fb3] text-[#E2E8F0]
        border border-white/10">

            {/* logo */}
            <div className="flex gap-2 items-center">

                {/* MOBILE DESIGN */}
                <div className="relative z-50 md:hidden pl-2">
                    {
                        showMenu ?
                            <p onClick={() => { setShowMenu(!showMenu) }}>
                                <IoClose className="size-9 
                                    p-1 hover:bg-white/10 rounded-2xl z-[999px]"
                                />
                            </p>


                            : <p onClick={() => { setShowMenu(!showMenu) }}>
                                <GiHamburgerMenu
                                    className="size-9 p-2  hover:bg-white/10 
                                rounded-2xl z-100"
                                />
                            </p>

                    }

                    {showMenu &&

                        <ul className="flex flex-col absolute z-50
                    w-50 p-4 bg-[#07111fb3] border border-white/10 
                    top-14 text-sm gap-3 rounded-2xl backdrop-blur-3xl">


                            <NavLink href="/">Home</NavLink>

                            <NavLink href="/all-rooms"> All Rooms </NavLink>

                            {/* private route */}
                            {isPending ?
                                <ProfileSkeleton /> :
                                user ?
                                    privateLinks.map(link =>

                                        <NavLink key={link.id} href={link.path}>{link.name}</NavLink>
                                    )
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

                <NavLink href="/">Home</NavLink>

                <NavLink href="/all-rooms"> All Rooms </NavLink>


                {/* private route */}
                {isPending ?
                    <ProfileSkeleton /> :
                    user ?
                        privateLinks.map(link =>

                            <NavLink key={link.id}
                                href={link.path}>{link.name}</NavLink>
                        )
                        : ""
                }
            </ul>

            {isPending ?
                <ProfileSkeleton /> :
                user ?
                    <div className="flex items-center gap-1.5 md:gap-3 relative">
                        <Avatar
                            onClick={() => { setShowProfile(!showProfile) }}
                            className="size-9 md:size-10 cursor-pointer border-2
                         border-[#07111fb3]">
                            <Avatar.Image referrerPolicy="no-referrer"
                                alt={user?.name || 'user'} src={user?.image} />
                            <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                        </Avatar>
                        <p className="text-sm pr-3">{user?.name.split(' ').slice(0, 1) || 'Guest'}</p>

                        {/* profile dropdown */}
                        {
                            showProfile &&
                            <div className="absolute p-4 bg-[#07111fb3] backdrop-blur-md border border-white/10 z-10 right-0
                    top-15 gap-3 rounded-2xl transition-all duration-300">

                                <div className="border-b border-white/20 pb-3">
                                    <h2>{user?.name || 'Guest'}</h2>
                                    <p className="text-muted">{user?.email || 'user@gamil.com'}</p>
                                </div>

                                <ul className="text-sm py-3 border-b
                             border-white/20 space-y-3">

                                    <NavLink href={'/my-listings'}>
                                        My-Listings</NavLink>


                                    <NavLink href={'/my-bookings'}>
                                        My-Bookings</NavLink>

                                </ul>

                                <Button onClick={handleLogout}
                                    className='bg-transparent border border-red-500 hover:bg-red-500 text-red-400 hover:text-[#CBD5E1]
                                 w-full rounded-lg mt-4 transition-all duration-300 flex items-center gap-2'>
                                    <LuLogOut /> LogOut
                                </Button>
                            </div>
                        }

                    </div> :

                    <div className="flex items-center gap-4">
                        <Link className="hover:text-[#22D3EE] transition-all duration-300"
                            href={'/login'}>
                            Login
                        </Link>
                        <Link href={'/signup'}>
                            <Button size="sm"
                                className="hover:shadow-[0_8px_30px_rgba(34,211,238,0.12)] bg-[#22D3EE]
                             hover:bg-[#06B6D4] text-[#07111F]">
                                Sign up
                            </Button>
                        </Link>
                        <h1>{user?.name}</h1>
                    </div>}


        </nav>
    );
};

export default Navbar;