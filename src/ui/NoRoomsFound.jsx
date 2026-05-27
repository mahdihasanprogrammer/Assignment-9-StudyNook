import Link from "next/link";
import { MdOutlineMeetingRoom } from "react-icons/md";

const NoRoomsFound = ({ type }) => {

  const data = {
    allRooms: {
      title: "No Rooms Found",
      subtitle:
        "Currently there are no study rooms found. Please check again later.",
      buttonText: "Go Home",
      buttonLink: "/",
    },

    myListings: {
      title: "No Listings Yet",
      subtitle:
        "You haven’t added any study rooms yet. Start by creating your first listing.",
      buttonText: "Add Room",
      buttonLink: "/add-room",
    },
    myBookings: {
    title: "You Have No Bookings Yet",
    subtitle:
      "Looks like you haven’t booked any study rooms yet. Explore available rooms and reserve your spot.",
    buttonText: "Browse Rooms",
    buttonLink: "/all-rooms",
  },
  };

  const content = data[type];

  return (
    <div
      className="flex flex-col items-center justify-center
      text-center py-15  px-6 rounded-3xl border border-white/10
      bg-white/5 backdrop-blur-xl"
    >
      {/* Icon */}
      <div
        className="p-6 rounded-full border border-cyan-400/20
        bg-cyan-400/10 shadow-[0_10px_40px_#22d3ee30]"
      >
        <MdOutlineMeetingRoom className="text-6xl text-cyan-400" />
      </div>

      {/* Title */}
      <h2 className="mt-8 text-3xl font-bold text-white">
        {content.title}
      </h2>

      {/* Subtitle */}
      <p className="mt-3 max-w-md text-gray-400 leading-relaxed">
        {content.subtitle}
      </p>

      {/* Button */}
      <Link
        href={content.buttonLink}
        className="mt-8 px-6 py-3 rounded-xl font-semibold
        bg-cyan-400 text-slate-900 transition-all duration-300
        hover:scale-105 hover:shadow-[0_10px_40px_#22d3ee40]"
      >
        {content.buttonText}
      </Link>
    </div>
  );
};

export default NoRoomsFound;