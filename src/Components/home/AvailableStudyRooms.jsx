import RoomCard from "@/shared/RoomCard";

const AvailableStudyRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/available-rooms`);
    const availableRooms =await res.json();

    return (
        <section className="my-15">
            <div className="mb-10 space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold">Available Study Rooms</h1>
                <p className="text-[#94A3B8]">
                    Hand-picked rooms recently added to StudyNook.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                availableRooms.map(room => <RoomCard key={room._id} room={room}/>)
                }
            </div>

        </section>
    );
};

export default AvailableStudyRooms;