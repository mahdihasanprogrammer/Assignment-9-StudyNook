import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#020617]">
            <div className="mx-auto container px-5 md:px-8 lg:px-12 pt-14 pb-8 ">

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

                    {/* Logo + Description */}
                    <div>
                        <h2 className="text-3xl font-black tracking-wide text-white">
                            Study
                            <span className="text-[#22D3EE]">Nook</span>
                        </h2>

                        <p className="mt-4 text-sm leading-7 text-[#94A3B8]">
                            Discover quiet and modern study rooms for focused learning,
                            collaboration, and productivity with seamless online booking.
                        </p>

                        <div className="mt-6 flex items-center gap-3">
                            <a target="_blank"
                                href="https://github.com/mahdihasanprogrammer"
                                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.20)]"
                            >
                                <FaGithub size={16} />
                            </a>

                            <a target="_blank"
                                href="https://www.facebook.com/hasan.shardar.1"
                                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.20)]"
                            >
                                <FaFacebookF size={16} />
                            </a>

                            <a target="_blank"
                                href="https://www.linkedin.com/in/mahdi-hasan-web"
                                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.20)]"
                            >
                                <FaLinkedinIn size={16} />
                            </a>

                            <a target="_blank"
                                href="#"
                                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#22D3EE] transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/10 hover:shadow-[0_8px_30px_rgba(34,211,238,0.20)]"
                            >
                                <RiTwitterXFill size={16} />
                            </a>

                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Useful Links
                        </h3>

                        <div className="mt-5 flex flex-col gap-4 text-sm">

                            <Link
                                href="/"
                                className="text-[#94A3B8] transition-colors duration-300 hover:text-[#22D3EE]"
                            >
                                Home
                            </Link>

                            <Link
                                href="/all-rooms"
                                className="text-[#94A3B8] transition-colors duration-300 hover:text-[#22D3EE]"
                            >
                                Rooms
                            </Link>

                            <Link
                                href="/about"
                                className="text-[#94A3B8] transition-colors duration-300 hover:text-[#22D3EE]"
                            >
                                About
                            </Link>

                            <Link
                                href="/contact"
                                className="text-[#94A3B8] transition-colors duration-300 hover:text-[#22D3EE]"
                            >
                                Contact
                            </Link>

                        </div>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Quick Access
                        </h3>

                        <div className="mt-5 flex flex-col gap-4 text-sm">

                            <Link
                                href="/add-room"
                                className="text-[#94A3B8] transition-colors duration-300 hover:text-[#22D3EE]"
                            >
                                Add Room
                            </Link>

                            <Link
                                href="/my-listings"
                                className="text-[#94A3B8] transition-colors duration-300 hover:text-[#22D3EE]"
                            >
                                My Listings
                            </Link>

                            <Link
                                href="/my-bookings"
                                className="text-[#94A3B8] transition-colors duration-300 hover:text-[#22D3EE]"
                            >
                                My Bookings
                            </Link>

                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold text-white">
                            Contact Info
                        </h3>

                        <div className="mt-5 flex flex-col gap-5 text-sm">

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 text-[#22D3EE]">
                                    <HiOutlineMail size={18} />
                                </div>

                                <div>
                                    <p className="text-[#94A3B8]">
                                        mahdihasan.code@gmail.com
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 text-[#22D3EE]">
                                    <HiOutlinePhone size={18} />
                                </div>

                                <div>
                                    <p className="text-[#94A3B8]">
                                        01400596304
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-cyan-400/10 text-[#22D3EE]">
                                  <GrLocation size={18} />
                                </div>

                                <div>
                                    <p className="text-[#94A3B8]">
                                        Shenbag, Noakhali, Bangladesh
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-white/10 pt-6 text-center">

                    <p className="text-sm text-[#64748B]">
                        © 2026 StudyNook. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    );
};

export default Footer;