

import { auth } from '@/lib/auth';
import { Avatar, Button } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import { BsFillPeopleFill } from 'react-icons/bs';
import { LuLayers } from 'react-icons/lu';
import { PiCalendarMinusBold } from 'react-icons/pi';

const BookingCard = async ({ room }) => {

    // get user data from db;
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;
    console.log(session, 'test room')


    return (
        <div className='p-5 md:col-span-2 space-y-5'>

            {/* booking card  */}
            <div className='bg-[#07111fb3] border border-white/10 backdrop-blur-3xl p-6 rounded-lg w-full space-y-5'>

                <h2 className=' flex items-center justify-between gap-2
                text-3xl font-semibold text-[#22D3EE]'>
                    ${room.hourlyRate}
                    <span className='text-lg text-[#94A3B8]'>per hour</span>
                </h2>


                <div className=' text-[#CBD5E1] text-sm space-y-1'>
                    <p className="flex items-center gap-2 text-sm">
                        <LuLayers /> {room.floor}
                    </p>

                    <p className="flex items-center gap-2 text-sm">
                        <BsFillPeopleFill /> {room.seatCapacity}
                    </p>

                    <h3 className='flex gap-2 items-center'>
                        <span className='text-xl font-bold'>$</span> {room?.bookingCount || 0} total bookings
                    </h3>

                </div>

                <Link href={`/all-rooms/${room._id}`}>
                    <Button className='bg-[#22D3EE] hover:bg-[#06B6D4]
                                text-[#07111F] w-full rounded-xl mt-4 transition-all duration-300 flex items-center gap-2'>
                        <PiCalendarMinusBold />  Book Now
                    </Button>
                </Link>
            </div>

            {/* listed info */}
            <div className='bg-[#07111fb3] border border-white/10 backdrop-blur-3xl p-6 rounded-lg w-full'>

                <h1 className='font-bold text-muted text-xl mb-3'>Listed by</h1>

                <div className='flex gap-3 items-center'>
                    <Avatar
                        className="size-10 
                                ">
                        <Avatar.Image referrerPolicy="no-referrer"
                            alt={room?.userName || 'user'} src={room?.userImage} />
                        <Avatar.Fallback>{room?.userName?.charAt(0) || 'user'}</Avatar.Fallback>
                    </Avatar>
                    <div className="border-b border-white/20 pb-2">
                        <h2>{room?.userName || 'Guest'}</h2>
                        <p className="text-muted">{room?.userEmail|| 'user@gamil.com'}</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default BookingCard;