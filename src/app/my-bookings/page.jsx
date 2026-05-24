
import { auth } from "@/lib/auth";
import CancelBookingRoom from "@/ui/CancelBookingRoom";
import { Chip, Table } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";


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

  // get token from cookies;
  const data = await auth.api.getToken({
    headers: await headers()
  })

  const res = await fetch(`http://localhost:9000/my-bookings`, {
    headers: {
      authorization: `Bearer ${data.token}`
    }
  })


  const bookingData = await res.json();
  console.log(bookingData, 'res data');


  return (
    <section className="my-10">
      <Table>
        <Table.ScrollContainer className="bg-white/5 backdrop-blur-2xl border border-white/10">
          <Table.Content aria-label="Team members"
            className="min-w-2xl ">
            <Table.Header className={'bg-white/10 text-[#F8FAFC] border-b border-white/10'}>

              {columns.map(column =>
                <Table.Column key={column.id}
                  className='bg-white/5 backdrop-blur-2xl border border-white/10'>
                  {column.label}
                </Table.Column>
              )}

            </Table.Header>
            <Table.Body>
              {bookingData.map(booking =>
                <Table.Row
                  key={booking._id}
                  className={'bg-white/10 text-[#F8FAFC] border-b border-white/10'}>
                  <Table.Cell>
                    <Image src={booking.roomImage}
                      width={80}
                      height={80}
                      alt={booking.roomName}
                      className="rounded-md" />
                  </Table.Cell>
                  <Table.Cell>{booking.roomName}</Table.Cell>
                  <Table.Cell>{booking.date}</Table.Cell>
                  <Table.Cell>{booking.startTime} - {booking.endTime}</Table.Cell>
              
                  <Table.Cell>
                    <Chip className={`${booking.status==='Confirmed'? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                      {booking.status}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell >
                 
                     {
                      booking.status === 'Confirmed' && new Date(`${booking.date} && ${booking.startTime}`) > new Date() ?
                        <CancelBookingRoom bookingId ={booking._id}/>
                        : '--'
                    }
                
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </section>
  );
};

export default MyBookingsPage;