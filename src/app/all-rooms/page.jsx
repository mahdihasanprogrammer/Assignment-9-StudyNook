import SideBar from "@/Components/AllRoomsPage/SideBar";
import RoomCard from "@/shared/RoomCard";

const AllRoomsPage = async () => {
    const res = await fetch(`http://localhost:9000/all-rooms`);
    const allRoomsData = await res.json();



    return (
        <section className="my-15">
            <div className="mb-10 space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold">All Study Rooms</h1>
                <p className="text-[#94A3B8]">
                    Browse the full catalog. Filter by amenity, price or search by name.
                </p>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {/* left side bar */}
                <SideBar allRoomsData={allRoomsData}/>
                
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