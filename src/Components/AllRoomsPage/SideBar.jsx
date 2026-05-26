"use client"

import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineLockReset } from "react-icons/md";



const SideBar = () => {
    const amenities = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];

    const [selectedAmenity, setSelectedAmenity] = useState('');
    const [search, setSearch] = useState('');
    const router = useRouter();
    const searchParams = useSearchParams();





    const handleSearch = (e) => {

        const params = new URLSearchParams(searchParams);
        setSearch(e.target.value)
        params.set("search", search)


        router.push(`/all-rooms/?${params.toString()}`)
    }


    const handleAmenity = (e) => {
        const params = new URLSearchParams(searchParams)

        if (e.target.checked) {
            setSelectedAmenity(e.target.value)

            params.set("amenity", e.target.value)
        } else {
            params.delete('amenity')
        }

        router.push(`/all-rooms?${params.toString()}`)
    }

    const handleReset = () => {
        setSelectedAmenity("")
        setSearch("")
        router.push('/all-rooms')
    }
    console.log('searchparams', searchParams.toString())

    return (
        <div className=" rounded-lg flex flex-col gap-3
            p-4 bg-[#ffffff12] border border-[#ffffff1a]
            hover:border-[#22D3EE]
             hover:shadow-[0_10px_40px_rgba(34,211,238,0.18)]">



            <Button onClick={handleReset}
             className='w-full  backdrop-blur-3xl hover:bg-cyan-500 
             border-none rounded-lg bg-white/5 text-white/80' 
             variant="outline"> <MdOutlineLockReset />Reset</Button>

            <div className="flex flex-col gap-3">

                <label className="text-cyan-400 font-semibold
                relative">
                    search by name
                    <input type="text"
                        value={search}
                        onChange={handleSearch}
                        className="bg-[#111827]/60  w-full mt-2 rounded-lg py-1 focus:outline-1 focus:outline-cyan-500
                        font-normal text-white/80 pl-7 pr-3
                        " />
                    {
                        search.length === 0 ? <IoSearch className="absolute -translate-y-2/1 -bottom-6 z-10 left-2 text-white/60" />
                            : ""
                    }
                </label>


                <div>
                    <h1 className=" mb-1 text-cyan-400 font-semibold">Amenities</h1>
                    {
                        amenities.map(amenity =>

                            <div key={amenity}
                                className="border-white/10 
                 py-2 rounded-lg text-sm flex items-center gap-2 cursor-pointer hover:border-cyan-400 ">

                                <input type="checkbox"
                                    name="amenities"
                                    id={amenity}
                                    onChange={handleAmenity}
                                    value={amenity}
                                    checked={selectedAmenity === amenity}
                                    className="size-4  rounded-full appearance-none bg-transparent outline-cyan-500 outline-1 checked:bg-cyan-400"
                                />

                                <label htmlFor={amenity}> {amenity}</label>

                            </div>

                        )
                    }
                </div>
            </div>

        </div>
    );
};

export default SideBar;