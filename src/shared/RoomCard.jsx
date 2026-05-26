
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPeopleFill } from "react-icons/bs";
import { LuLayers } from "react-icons/lu";


const RoomCard = ({ room }) => {
    const visibleAmenities = room.amenities.slice(0, 3);
    const remaining = room.amenities.length - 3;
    return (
        <div className="bg-[#ffffff14] border border-[#ffffff1f]
        rounded-lg overflow-hidden hover:bg-white/5
         hover:border-cyan-400/40 
         hover:shadow-[0_8px_30px_rgba(34,211,238,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full backdrop-blur-3xl">

            {/* image */}
            <div className="aspect-video relative w-full mx-auto">
                <Image src={room.roomImage}
                    alt={room.roomName}
                    fill
                    className="hover:scale-108 transition duration-500" />
            </div>

            <div className="p-4 flex flex-col gap-4 h-full">

                <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{room.roomName}</h3>

                    <Chip className="bg-[rgba(34,197,94,0.15)]
                     border border-[rgba(34,197,94,0.3)] text-[#86EFAC] backdrop-blur-lg px-3 font-semibold text-base">
                        ${room.hourlyRate}/hr
                    </Chip>

                </div>

                <p className="text-[#94A3B8]">{room.shortDescription}</p>

                <div className="flex items-center gap-6
                text-[#CBD5E1] text-sm font-medium">
                    <p className="flex items-center gap-2">
                        <LuLayers /> {room.floor}
                    </p>

                    <p className="flex items-center gap-2">
                        <BsFillPeopleFill /> {room.seatCapacity}
                    </p>
                </div>

                <div className="flex items-center flex-wrap gap-2 flex-1">
                    {visibleAmenities.map((amenity, index) =>
                        <Chip key={index} size="sm"
                            className="bg-[rgba(34,211,238,0.12)] text-[#67E8F9]
                        border border-[rgba(34,211,238,0.25)]
                        rounded-full text-xs py-0.5 px-2"
                        >{amenity}</Chip>
                    )}
                    {
                        remaining > 0 &&
                        <Chip size="sm"
                            className="bg-[rgba(34,211,238,0.12)] text-[#67E8F9]
                        border border-[rgba(34,211,238,0.25)]
                        rounded-full text-xs py-0.5 px-2"
                        >+{remaining}more</Chip>
                    }
                </div>

                <Link href={`/all-rooms/${room._id}`}>
                    <Button className='bg-[#22D3EE] hover:bg-[#06B6D4]
                 text-[#07111F] w-full rounded-xl mt-4 transition-all duration-300'>
                        View Details
                    </Button>
                </Link>

            </div>

        </div>
    );
};

export default RoomCard;