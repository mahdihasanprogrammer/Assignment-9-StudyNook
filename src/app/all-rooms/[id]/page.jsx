import BookingCard from "@/shared/BookingCard";
import { Chip } from "@heroui/react";
import Image from "next/image";

export const generateMetadata =async({params})=>{
    const {id} = await params;
    const room = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-rooms/${id}`).then(res => res.json());

    return {
        title: `StudyNook - All Rooms - ${room.roomName}`,
        description: room.shortDescription,
    }
} 

const RoomCardDetailsPage = async ({ params }) => {

    const { id } = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-rooms/${id}`);
    const room = await res.json();
    const visibleAmenities = room.amenities.slice(0,3);
    const remainingAmenities = (room.amenities.length) - 3;
    return (
        <section className=" my-15
        bg-[#ffffff14] border border-[#ffffff1f]
        rounded-lg overflow-hidden hover:bg-white/5
         hover:border-cyan-400/40 
         hover:shadow-[0_8px_30px_rgba(34,211,238,0.12)] hover:-translate-y-1 transition-all duration-300 min-h-[70vh] backdrop-blur-3xl
         grid grid-cols-1 md:grid-cols-5">


            <div className="md:col-span-3 p-5 space-y-8">
                {/* image */}
                <div className="aspect-video relative w-full">
                    <Image src={room.roomImage}
                        alt={room.roomName}
                        fill
                        className="rounded-lg" />
                </div>

                {/* text content */}
                <div className="flex flex-col gap-4 h-full">

                    <div className="flex justify-between items-center">
                        <h3 className="text-3xl font-semibold">
                            {room.roomName}</h3>
                    </div>

                    <p className="text-[#94A3B8]">{room.shortDescription}</p>

                    {/* amenities */}
                    <div className="flex items-center flex-wrap gap-2">
                        {visibleAmenities.map((amenity, index) =>
                            <Chip key={index} size="sm"
                                className="bg-[rgba(34,211,238,0.12)] text-[#67E8F9]
                                          border border-[rgba(34,211,238,0.25)]
                                          rounded-full text-xs py-0.5 px-2"
                            >{amenity}</Chip>
                        )}

                        {
                        remainingAmenities >0 && 
                            <Chip size="sm"
                                className="bg-[rgba(34,211,238,0.12)] text-[#67E8F9]
                                          border border-[rgba(34,211,238,0.25)]
                                          rounded-full text-xs py-0.5 px-2"
                            > +{remainingAmenities}more</Chip>
                        }
                    </div>
                </div>
            </div>

            {/* booking card */}
            <BookingCard room={room} />

        </section>
    );
};

export default RoomCardDetailsPage;