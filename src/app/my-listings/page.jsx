
import { auth } from "@/lib/auth";
import RoomCard from "@/shared/RoomCard";
import { headers } from "next/headers";


const MyListingsPage = async () => {

    // get user data from db;
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user;


    console.log(session, 'hello session')
    const res = await fetch(`http://localhost:9000/my-listings/${user?.id}`);
    const myListingData = await res.json();

    console.log('listing data', myListingData)


    return (
        <section className="my-15">

            <div className="mb-10 space-y-1">
                <h1 className="text-3xl md:text-4xl font-bold">My Listing Rooms</h1>
                <p className="text-[#94A3B8]">
                    Browse the full catalog. Filter by amenity, price or search by name.
                </p>
            </div>

            {/* my listing room */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:col-span-3">
                {
                   myListingData.map(room => <RoomCard key={room._id} room={room} />)
                }
            </div>
        </section>
    );
};

export default MyListingsPage;