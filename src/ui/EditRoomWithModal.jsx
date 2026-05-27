"use client";

import {Button,  FieldError, Input, Label, Modal, Surface, TextArea, TextField} from "@heroui/react";

import { FaRegEdit } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/lib/auth-client";


export function EditRoomWithModal({room}) {

const router = useRouter();
const allAmenities = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];

console.log(room)
    const handleRoomEdit =async (event)=>{

        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const formData = Object.fromEntries(form.entries());
        formData.amenities = form.getAll('amenities');
        console.log('formdata from edit', formData);

        const { data } = await authClient.token();
        

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-rooms/${room._id}`,{
            method:'PATCH',
            headers:{
                'Content-type': 'application/json',
                authorization: `Bearer ${data.token}`
            },
            body:JSON.stringify(formData)
        })

        const result = await res.json();
        if(result.modifiedCount >0){
            toast.success('Room updated successfully');
            router.refresh(`all-rooms/${room._id}`)
        }
    }


  return (
    <Modal>
      <Button className='bg-transparent border border-[#22D3EE] hover:bg-[#22D3EE] text-cyan-400
                       hover:text-[#07111F] w-full rounded-lg mt-4 transition-all duration-300 flex items-center gap-2'>
                           <FaRegEdit /> Edit
                       </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="mx-auto max-w-xl bg-white/5 
     border border-white/10 backdrop-blur-3xl h-screen min-h-[70vh] my-10">
             <h1 className="text-2xl font-bold text-center text-cyan-500">Update Room Information</h1>

          <Modal.Heading className="">
             <Modal.CloseTrigger className="bg-white/10" />
          </Modal.Heading>
               
            
            <Modal.Body className="p-2">
             
       
            <form onSubmit={handleRoomEdit}
                className="px-2 py-5 space-y-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Room Name */}
                    <div className="md:col-span-3">
                        <TextField name="roomName" isRequired
                        defaultValue={room.roomName}>
                            
                            <Label className="text-[#E2E8F0]">Room Name</Label>
                            <Input placeholder="write room name"
                                className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-3">
                        <TextField name="shortDescription" isRequired
                        defaultValue={room.shortDescription}>
                            <Label className="text-[#E2E8F0]">Description</Label>
                            <TextArea rows={3}
                                placeholder="Describe the Study Room experience..."
                                className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-3">
                        <TextField name="roomImage" isRequired
                        defaultValue={room.roomImage}>
                            <Label className="text-[#E2E8F0]">Image URL</Label>

                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Floor */}
                    <TextField defaultValue={room.floor}
                     name="floor" isRequired>
                        <Label className="text-[#E2E8F0]">Floor</Label>

                        <Input placeholder="text/number, e.g., “3rd Floor" className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]" />
                        <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField defaultValue={room.seatCapacity}
                     name="seatCapacity" isRequired>
                        <Label className="text-[#E2E8F0]">Capacity</Label>
                        <Input placeholder="number, e.g., 4"
                            className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#64748B]" />
                        <FieldError />
                    </TextField>


                    {/* Price */}
                    <TextField defaultValue={room.hourlyRate}
                     name="hourlyRate" type="number" isRequired>
                        <Label className="text-[#E2E8F0]">Price ($)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text[#64748B]"
                        />
                        <FieldError />
                    </TextField>

                    <div className="w-full md:col-span-3">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">

            {allAmenities.map(item =>
                <div key={item}
                className="border-white/10 bg-[#111827]/60 
                px-4 py-3 rounded-lg text-sm flex items-center gap-2 cursor-pointer hover:border-cyan-400">

                    <input type="checkbox"
                     name="amenities"
                      id={item}
                     value={item}
                     defaultChecked={room.amenities.includes(item)}
                      className="size-4  rounded-full appearance-none bg-transparent outline-cyan-500 outline-1 checked:bg-cyan-400"
                      />

                    <label htmlFor={item}> {item}</label>
                </div>
            )}

        </div>
                    </div>

                </div>

                {/* Buttons */}

                <Button slot="close"
                    type="submit"
                    variant="outline"

                    className=" rounded-lg w-full bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F] text-base"
                >
                    Update Room
                </Button>
            </form>
       
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}