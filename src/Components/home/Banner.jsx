import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
    return (
        <section className="min-h-[70vh] md:min-h-[80vh] flex flex-col justify-center items-center
        bg-linear-to-br from-[#07111F] via-[#0F172A] to-[#111827]
        mt-5 mb-15 px-5 md:px-10 rounded-2xl">

            <div className="flex flex-col md:flex-row gap-10 items-center
            relative">

                {/* Blur Glow Top */}
                <div className="absolute -top-40 -left-40 size-80 rounded-full bg-cyan-700/20 blur-3xl" />

                {/* left side content */}
                <div className="flex-1 space-y-5">

                    <h1 className="text-4xl md:text-6xl font-bold">
                        Find Your <span className="text-[#22D3EE]">Perfect</span> Study Room
                    </h1>
                    <p className="text-[#94A3B8] text-lg">
                        Browse and book quiet, private study rooms in your library. List your own room and earn.
                    </p>

                    <Link href={'/all-rooms'} className="relative">
                        <Button className=" rounded-lg
                        bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F]">
                            Explore Rooms
                        </Button>
                    </Link>
                </div>

                {/* right side image */}
                <div className="flex-1">
                    <Image src='/banner.jpg'
                        alt='banner-image'
                        width={550}
                        height={550}
                        className="object-cover object-center rounded-md" />
                </div>
            </div>
        </section>
    );
};

export default Banner;