"use client";


import { Button, Calendar, DateField, FieldError, Input, Label, Modal, Surface, TextArea, TextField } from "@heroui/react";
import { PiCalendarMinusBold } from "react-icons/pi";
import CheckBoxField from "./CheckBoxField";
import TimeSlot from "./TimeSlot";
import Link from "next/link";

export function BookNowModalBtn({ room, user }) {

  return (
    <Modal>
      {
        user ?
          <Button className=' bg-[#22D3EE] hover:bg-[#06B6D4]
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
            <Modal.CloseTrigger />
            <Modal.Header>

              <Modal.Heading className="text-[#E2E8F0] text-xl">
                Book <span className="text-[#22D3EE]">{room.roomName}</span></Modal.Heading>
              <p className="text-[#F8FAFC]">
                pick a booking and time slot. Bookings run on the hour
              </p>
            </Modal.Header>
            <Modal.Body className="p-4 w-full">

              <form
                className=" space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {/* date field */}
                  <div className="md:col-span-2">

                    <DateField className="w-full" name="date" type="date">

                      <Label className="text-[#E2E8F0] text-base">Date</Label>

                      <DateField.Group className="rounded-lg border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#869dbd] bg-[#ffffff0f]">

                        <DateField.Input type="date">
                          {(segment) => <DateField.Segment segment={segment} />}
                        </DateField.Input>

                        <DateField.Suffix>
                          <Calendar className="size-4 text-muted" />
                        </DateField.Suffix>
                      </DateField.Group>
                    </DateField>
                  </div>

                  <div className="w-full md:col-span-2">
                    <TimeSlot />
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
                    <TextField name="hourlyRate" type="number" isRequired>
                      <Label className="text-[#E2E8F0] text-base">Total Cost($)</Label>
                      <Input
                        type="number"
                        placeholder="1299"
                        className="
                            rounded-lg bg-[#ffffff0f] border-[#ffffff1f] focus:border-[#22D3EE] text-[#F8FAFC] placeholder:text-[#869dbd]"
                      />
                      <FieldError />
                    </TextField>
                  </div>


                </div>

                {/* Buttons */}
                <Modal.Footer>

                  <Button
                    slot="close"
                    className=" rounded-lg  bg-red-500 hover:bg-red-600 text-[#07111F] text-base">
                    Cancel
                  </Button>
                  <Button
                    slot="close"
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