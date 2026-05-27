import SideBar from "@/Components/AllRoomsPage/SideBar";
import RoomCard from "@/shared/RoomCard";
import NoRoomsFound from "@/ui/NoRoomsFound";
import { div } from "framer-motion/client";


export const metadata = {
  title: "Study Nook-all-rooms",
  description: " Library Study Room Booking",
};

const AllRoomsPage = async ({searchParams}) => {
    
    const params = await searchParams
   const amenity =  params.amenity || "";
   const search =  params.search || "";
   

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-rooms?search=${search}&amenity=${amenity}`);
    const allRoomsData = await res.json();



    return (
        <section className="my-15">
            <div className="mb-10 space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold">All Study Rooms</h1>
                <p className="text-[#94A3B8]">
                    Browse the full catalog. Filter by amenity, price or search by name.
                </p>
            </div>

            <div className="grid md:grid-cols-4 gap-4">
                {/* left side bar */}
                <SideBar/>
                {
                    allRoomsData.length===0 &&
                   <div className="md:col-span-3 ">
                     <NoRoomsFound type="allRooms"/>
                   </div>
                }
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:col-span-3">
                    {
                        allRoomsData.map(room => <RoomCard key={room._id} room={room} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllRoomsPage;