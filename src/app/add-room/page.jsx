"use client"
import { authClient } from "@/lib/auth-client";
import CheckBoxField from "@/ui/CheckBoxField";
import { Button, Card, FieldError, Input, Label, ListBox, TextArea, TextField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const AddDestinationPage = () => {

    const router = useRouter();

    // get user data from db;
    const {data: session, } = authClient.useSession();
    const user = session?.user;
    


    const handleAddRoom = async (event) => {
        event.preventDefault();

        const form = new FormData(event.currentTarget)
        const formData = Object.fromEntries(form.entries());
        formData.amenities = form.getAll('amenities');

        // add current user information and form data in a object,
        const addRoomData = {
            
            userId: user?.id,
            userName: user?.name,
            userEmail: user?.email,
            userImage: user?.image,
            ...formData

        };

        // call post api for added new room data in a database;
        const res = await fetch(`http://localhost:9000/add-room`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(addRoomData)
        });
        const resultAddRoom = await res.json();

        // check response of backend;
        if (resultAddRoom.insertedId) {
            toast.success('Room added successful');
            router.push('/all-rooms')
        }


    }
    return (
        <Card className="mx-auto max-w-xl my-15 bg-white/5 
     border border-white/10 backdrop-blur-3xl">
            <form onSubmit={handleAddRoom}
                className="p-2 space-y-8"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Room Name */}
                    <div className="md:col-span-3">
                        <TextField name="roomName" isRequired>
                            <Label className="text-[#E2E8F0]">Room Name</Label>
                            <Input placeholder="write room name"
                                className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text[#64748B]" />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Description */}
                    <div className="md:col-span-3">
                        <TextField name="shortDescription" isRequired>
                            <Label className="text-[#E2E8F0]">Description</Label>
                            <TextArea rows={3}
                                placeholder="Describe the Study Room experience..."
                                className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text[#64748B]"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Image URL - Removed preview */}
                    <div className="md:col-span-3">
                        <TextField name="roomImage" isRequired>
                            <Label className="text-[#E2E8F0]">Image URL</Label>

                            <Input
                                type="url"
                                placeholder="https://example.com/bali-paradise.jpg"
                                className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text[#64748B]"
                            />
                            <FieldError />
                        </TextField>
                    </div>

                    {/* Floor */}
                    <TextField name="floor" isRequired>
                        <Label className="text-[#E2E8F0]">Floor</Label>

                        <Input placeholder="text/number, e.g., “3rd Floor" className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text[#64748B]" />
                        <FieldError />
                    </TextField>

                    {/* Capacity */}
                    <TextField name="seatCapacity" isRequired>
                        <Label className="text-[#E2E8F0]">Capacity</Label>
                        <Input placeholder="number, e.g., 4"
                            className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text[#64748B]" />
                        <FieldError />
                    </TextField>


                    {/* Price */}
                    <TextField name="hourlyRate" type="number" isRequired>
                        <Label className="text-[#E2E8F0]">Price ($)</Label>
                        <Input
                            type="number"
                            placeholder="1299"
                            className="rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text[#64748B]"
                        />
                        <FieldError />
                    </TextField>

                    <div className="w-full md:col-span-3">
                        <CheckBoxField />
                    </div>

                </div>

                {/* Buttons */}

                <Button
                    type="submit"
                    variant="outline"

                    className=" rounded-lg w-full bg-[#22D3EE] hover:bg-[#06B6D4] text-[#07111F] text-base"
                >
                    Add Room
                </Button>
            </form>
        </Card>
    );
};

export default AddDestinationPage;