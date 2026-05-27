/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";


import { today, getLocalTimeZone } from "@internationalized/date";
import { Button, Calendar, DateField, FieldError, Input, Label, Modal, Surface, TextArea, TextField, Select, ListBox } from "@heroui/react";
import { PiCalendarMinusBold } from "react-icons/pi";

import Link from "next/link";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export function BookNowModalBtn({ room, user }) {

  const timeSlots = [
    { id: "08:00", label: "08:00 AM" },
    { id: "09:00", label: "09:00 AM" },
    { id: "10:00", label: "10:00 AM" },
    { id: "11:00", label: "11:00 AM" },
    { id: "12:00", label: "12:00 PM" },
    { id: "13:00", label: "01:00 PM" },
    { id: "14:00", label: "02:00 PM" },
    { id: "15:00", label: "03:00 PM" },
    { id: "16:00", label: "04:00 PM" },
    { id: "17:00", label: "05:00 PM" },
    { id: "18:00", label: "06:00 PM" },
    { id: "19:00", label: "07:00 PM" },
    { id: "20:00", label: "08:00 PM" },
  ];
const [isOpen, setIsOpen] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);
const [date, setDate] = useState(today(getLocalTimeZone()));
const router = useRouter();



  const filteredTime = timeSlots.filter(time => {
    return time.id > startTime;
  })

  useEffect(() => {
    if (!startTime || !endTime) {
      return
    }
    const convertStartTime = parseInt(startTime.split(":")[0]);
    const convertEndTime = parseInt(endTime.split(":")[0]);

    if (convertEndTime <= convertStartTime) {
      setTotalPrice(0)
      return

    }

    const totalHour = convertEndTime - convertStartTime;
    const finalPrice = room.hourlyRate * totalHour;
    setTotalPrice(finalPrice)
    console.log(totalPrice, 'test price')

  }, [startTime, endTime, room.hourlyRate])


  const handleBooking = async (event) => {
    event.preventDefault();
     const f = event.currentTarget; 

  

  
    const form = new FormData(f);
    console.log(form,'test')
    const formData = Object.fromEntries(form.entries());
    formData.date= new Date(date).toDateString()

    const bookingData = {
      ...formData,
      roomId: room._id,
      roomName: room.roomName,
      roomImage: room.roomImage,
      userID: user.id,
      userName: user.name,
      userEmail: user.email,
      status: 'Confirmed'

    }
   

      //delete request with jwt verification
    const { data } = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking-room`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization:`Bearer ${data.token}`
      },
      body: JSON.stringify(bookingData)
    })

    const result = await res.json();
    if(result.response=="ok"){

      toast.success(result.message)
      router.refresh()
        setIsOpen(false) 
    }

     else{
      toast.error(result.message)
      setIsOpen(true)
    }
   

  }





  return (
    <Modal isOpen={isOpen} onOpenChange={setIsOpen}>
      {
        user ?
          <Button  onPress={() => setIsOpen(true)}
 
           className=' bg-[#22D3EE] hover:bg-[#06B6D4]
                    text-[#07111F] w-full rounded-xl mt-4 transition-all duration-300 flex items-center gap-2'>
            <PiCalendarMinusBold />  Book Now
          </Button>
          : <Link href={'/login'}>
            <Button
              slot="close"
              className=" rounded-lg bg-[#22D3EE] hover:bg-[#06B6D4]  text-base w-full text-[#07111F]">
              <PiCalendarMinusBold /> Login to Book
            </Button>
          </Link>
      }

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className=" mx-auto w-full max-w-xl min-h-[80vh]
           bg-white/5  border border-white/10 backdrop-blur-3xl my-10">
            <Modal.CloseTrigger className="bg-white/10" />
            <Modal.Header>

              <Modal.Heading className="text-[#E2E8F0] text-xl">
                Book <span className="text-[#22D3EE]">{room.roomName}</span></Modal.Heading>
              <p className="text-[#F8FAFC]">
                pick a booking and time slot. Bookings run on the hour
              </p>
            </Modal.Header>
            <Modal.Body className="p-4 w-full">

              <form onSubmit={handleBooking}
                className=" space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">


                  {/* date field */}
                  <div className="md:col-span-2">

                    <DateField
                      isRequired
                      className="w-full" name="date"
                      type="date"
                      value={date}
                      onChange={setDate}
                      minValue={today(getLocalTimeZone())}
                    >


                      <Label className="text-[#E2E8F0] text-base">Date</Label>

                      <DateField.Group className="rounded-lg border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#d4e0f1] bg-[#ffffff0f]">

                        <DateField.Input type="date">
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>

                        <DateField.Suffix>
                          <Calendar className="size-4 text-muted" />
                        </DateField.Suffix>
                      </DateField.Group>
                      <FieldError>date field must be feature</FieldError>
                    </DateField>
                  </div>

                  <div className="w-full md:col-span-2 flex items-center gap-4">

                    {/* start time */}
                    <Select
                      isRequired
                      name="startTime"
                      className="w-full"
                      placeholder="Start time"
                      onChange={(e) => { setStartTime(e) }}


                    >
                      <Label className="text-[#E2E8F0] text-base">Start time</Label>

                      <Select.Trigger
                        className="h-10 px-4 rounded-lg bg-white/5 border border-white/10 text-[#F8FAFC] hover:border-cyan-400/40 transition-all duration-300 ">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover
                        className="bg-[#0F172A]/95 backdrop-blur-2xl border border-white/10 rounded-lg">
                        <ListBox>
                          {
                            timeSlots.map((time) =>
                              <ListBox.Item
                                key={time.id}
                                id={time.id}
                                textValue={time.label}


                                className="text-[#F8FAFC] hover:bg-cyan-400/10 hover:text-cyan-300 rounded-md transition-all">
                                {time.label}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            )
                          }
                        </ListBox>
                      </Select.Popover>
                      <FieldError />
                    </Select>

                    {/* end time */}
                    <Select
                      isRequired
                      name="endTime"
                      className="w-full"
                      placeholder="End time"
                      onChange={(e) => { setEndTime(e) }}

                    >
                      <Label className="text-[#E2E8F0] text-base">End time</Label>

                      <Select.Trigger
                        className="h-10 px-4 rounded-lg bg-white/5 border border-white/10 text-[#F8FAFC] hover:border-cyan-400/40 transition-all duration-300 ">
                        <Select.Value />
                        <Select.Indicator />
                      </Select.Trigger>

                      <Select.Popover
                        className="bg-[#0F172A]/95 backdrop-blur-2xl border border-white/10 rounded-lg" >
                        <ListBox>
                          {
                            filteredTime.map((time) =>
                              <ListBox.Item key={time.id}
                                id={time.id}
                                textValue={time.label}
                                className="text-[#F8FAFC] hover:bg-cyan-400/10 hover:text-cyan-300 rounded-md transition-all">
                                {time.label}
                                <ListBox.ItemIndicator />
                              </ListBox.Item>
                            )
                          }
                        </ListBox>
                      </Select.Popover>
                      <FieldError />
                    </Select>
                  </div>
                  {/* Description */}
                  <div className="md:col-span-2">
                    <TextField name="shortDescription">
                      <Label className="text-[#E2E8F0] text-base">Special Note (Optional)</Label>
                      <TextArea rows={3}
                        placeholder="Describe the Study Room experience..."
                        className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#869dbd]"
                      />
                      <FieldError />
                    </TextField>
                  </div>


                  {/* Price */}
                  <div className=" md:col-span-2">
                    <TextField name="totalPrice" type="number">
                      <Label className="text-[#E2E8F0] text-base">Total Cost($)</Label>
                      <Input
                        type="number"
                        value={totalPrice}
                        readOnly
                        className="
                             rounded-lg bg-[#ffffff0f]
                             border-[#ffffff1f]
                             focus:border-[#22D3EE]
                             text-[#F8FAFC]"
                      />
                      <FieldError />
                    </TextField>
                  </div>


                </div>

                {/* Buttons */}
                <Modal.Footer>

                  <Button
                    slot="close"
                    className=" rounded-lg  bg-red-500 hover:bg-red-600 
                    text-[#07111F] text-base">
                    Cancel
                  </Button>
                  <Button
              
                    type="submit"
                    className=" rounded-lg  bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F] text-base">
                    Book Room
                  </Button>
                </Modal.Footer>
              </form>

            </Modal.Body>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}