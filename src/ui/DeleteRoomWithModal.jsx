"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";


import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-hot-toast";

export function DeleteRoomWithModal({ room }) {

    const router = useRouter();
  

    

    const handleRoomDelete = async () => {

        //delete request with jwt verification
        const {data} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-rooms/${room._id}`, {
            method: 'DELETE',
            headers:{
                authorization:`Bearer ${data.token}`
            }
        });

        const result = await res.json();
        if(result.deletedCount >0){
            toast.success(`${room.roomName} room deleted successfully!`);
            router.push('/all-rooms')
        }

    }


    return (
        <AlertDialog>
            <Button className='bg-transparent border border-red-500 hover:bg-red-500 text-red-400 hover:text-[#CBD5E1]
            w-full rounded-lg mt-4 transition-all duration-300 flex items-center gap-2'>
                <RiDeleteBin6Line />  Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-md bg-[#ffffff14] border border-[#ffffff1f]
                          hover:border-[rgba(239,68,68,0.18)]
                         hover:shadow-[20px_20px_40px_rgba(239,68,68,0.18)] backdrop-blur-3xl">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading className="text-xl text-white/80">Delete Room permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p className="text-[#94A3B8]">
                                This will permanently delete <strong>Room</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer className="flex items-center gap-3">

                            <Button slot="close"
                                className='bg-[#22D3EE] hover:bg-[#06B6D4]
                                 text-[#07111F]  rounded-lg transition-all duration-300'>
                                Cancel
                            </Button>

                            <Button onClick={handleRoomDelete}
                             slot="close"
                                className=' bg-red-500 hover:bg-red-600 text-[#CBD5E1]
                            rounded-lg transition-all duration-300'>
                                Confirm  Delete
                            </Button>

                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}