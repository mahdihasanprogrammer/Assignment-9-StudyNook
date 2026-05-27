
import { auth } from "@/lib/auth";
import RoomCard from "@/shared/RoomCard";
import NoRoomsFound from "@/ui/NoRoomsFound";
import { headers } from "next/headers";

export const metadata = {
    title: "StudyNook - My listings",
    description: " user created room list"
}

const MyListingsPage = async () => {

    // get user data from db;
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

     const data = await auth.api.getToken({
        headers: await headers()
    })
   

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-listings/${user?.id}`,{
        headers:{
            authorization:`Bearer ${data.token}`
        }
    });
    const myListingData = await res.json();
    

    if(myListingData.length ===0 ){
         return <div className="my-10">
              <NoRoomsFound type="myListings"/>
        </div>
        
    }
 
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