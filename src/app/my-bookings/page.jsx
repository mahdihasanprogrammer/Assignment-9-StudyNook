import { auth } from "@/lib/auth";
import CancelBookingRoom from "@/ui/CancelBookingRoom";
import NoRoomsFound from "@/ui/NoRoomsFound";
import { Chip } from "@heroui/react";
import { div, h1 } from "framer-motion/client";
import { headers } from "next/headers";
import Image from "next/image";

export const metadata = {
  title: "StudyNook - My Bookings",
  description: "user bookings room"
}

const MyBookingsPage = async () => {

  const columns = [
    {
      id: "image",
      label: "Image",
    },
    {
      id: "name",
      label: "Name",
    },
    {
      id: "date",
      label: "Date",
    },
    {
      id: "time",
      label: "Time",
    },
    {
      id: "status",
      label: "Confirm",
    },
    {
      id: "action",
      label: "Cancel",
    },
  ];

  

  // get token
  const data = await auth.api.getToken({
    headers: await headers(),
  });



  // fetch bookings
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-bookings`, {
    headers: {
      authorization: `Bearer ${data.token}`,
    },
    cache: "no-store",
  });



  const bookingData = await res.json();
  
if(bookingData.length ===0){
  return <div className="my-10">
     <NoRoomsFound type="myBookings" />
  </div>
}



  return (

    <section className="my-10 px-4">
      {/* ========================= */}
      {/* DESKTOP TABLE */}
      {/* ========================= */}

      <div className="hidden lg:block overflow-x-auto max-w-7xl mx-auto rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.35)]">

        <table className="w-full text-left">

          {/* TABLE HEAD */}
     
           <thead>

            <tr className="bg-white/10 border-b border-white/10">

              {columns.map((column) => (

                <th
                  key={column.id}
                  className="px-6 py-4  text-sm font-semibold text-[#F8FAFC]"
                >
                  {column.label}
                </th>

              ))}

            </tr>

          </thead> 
      

          {/* TABLE BODY */}
          <tbody>

            {bookingData?.map((booking) => (

              <tr
                key={booking?._id}
                className="border-b border-white/5 hover:bg-cyan-400/5 transition-all duration-300 "
              >

                {/* IMAGE */}
                <td className="px-6 py-4 align-middle ">

                  <Image
                    src={booking?.roomImage}
                    width={80}
                    height={80}
                    alt={booking?.roomName}
                    className="w-20 h-20 rounded-2xl object-cover border border-white/10"
                  />

                </td>



                {/* ROOM NAME */}
                <td className="px-6 py-4 align-middle  text-[#F8FAFC] font-medium">
                  {booking?.roomName}
                </td>



                {/* DATE */}
                <td className="px-6 py-4 align-middle  text-[#CBD5E1]">
                  {booking?.date}
                </td>



                {/* TIME */}
                <td className="px-6 py-4 align-middle  text-[#CBD5E1]">
                  {booking?.startTime} - {booking?.endTime}
                </td>



                {/* STATUS */}
                <td className="px-6 py-4 align-middle ">

                  <Chip
                    className={
                      booking?.status === "Confirmed"
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                    }
                  >
                    {booking.status}
                  </Chip>

                </td>



                {/* ACTION */}
                <td className="px-6 py-4 align-middle">

                  <div className="flex items-center justify-center">

                    {
                      booking.status === "Confirmed" &&
                        new Date(`${booking?.date} ${booking?.startTime}`) > new Date()

                        ? (
                          <CancelBookingRoom bookingId={booking?._id} />
                        )

                        : (
                          <span className="text-[#64748B]">
                            --
                          </span>
                        )
                    }

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>








      {/* ============MOBILE CARD DESIGN============= */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden max-w-6xl mx-auto">

        {bookingData?.map((booking) => (

          <div
            key={booking?._id}
            className="rounded-3xl bg-white/5 backdrop-blur-2xl border border-white/10 p-4 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          >

            {/* IMAGE */}
            <Image
              src={booking?.roomImage}
              width={500}
              height={300}
              alt={booking?.roomName}
              className="w-full h-40 rounded-2xl object-cover border border-white/10"
            />



            {/* CONTENT */}
            <div className="mt-4 space-y-3">

              {/* ROOM NAME */}
              <h2 className="text-lg font-semibold text-[#F8FAFC]">
                {booking?.roomName}
              </h2>



              {/* DATE */}
              <div className="flex items-center justify-between">

                <p className="text-[#94A3B8] text-sm">
                  Date
                </p>

                <p className="text-[#E2E8F0] text-sm">
                  {booking?.date}
                </p>

              </div>



              {/* TIME */}
              <div className="flex items-center justify-between">

                <p className="text-[#94A3B8] text-sm">
                  Time
                </p>

                <p className="text-[#E2E8F0] text-sm">
                  {booking?.startTime} - {booking?.endTime}
                </p>

              </div>



              {/* STATUS + ACTION */}
              <div className="flex items-center justify-between pt-2">

                {/* STATUS */}
                <Chip
                  className={
                    booking?.status === "Confirmed"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }
                >
                  {booking?.status}
                </Chip>



                {/* ACTION */}
                <div className="flex items-center justify-center">

                  {
                    booking?.status === "Confirmed" &&
                      new Date(`${booking.date} ${booking?.startTime}`) > new Date()

                      ? (
                        <CancelBookingRoom bookingId={booking?._id} />
                      )

                      : (
                        <span className="text-[#64748B] text-sm">
                          Expired
                        </span>
                      )
                  }

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
};

export default MyBookingsPage;