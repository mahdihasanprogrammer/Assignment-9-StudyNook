import { Label, ListBox, Select } from "@heroui/react";

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

const selectClass =
  "w-full rounded-lg bg-white/10 border text-[#F8FAFC]  border-white/10 backdrop-blur-xl";

const triggerClass =
  "h-10 px-4 rounded-lg bg-white/5 border border-white/10 text-[#F8FAFC] hover:border-cyan-400/40 transition-all duration-300 ";

const popoverClass =
  "bg-[#0F172A]/95 backdrop-blur-2xl border border-white/10 rounded-lg";

const itemClass =
  "text-[#F8FAFC] hover:bg-cyan-400/10 hover:text-cyan-300 rounded-md transition-all";

const labelClass = "text-sm text-[#94A3B8] mb-2";

const BookingTime = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      
      {/* Start Hour */}
      <Select 
        placeholder="Select start time"
      >
        <Label className={labelClass}>Start Hour</Label>

        <Select.Trigger className={{triggerClass, selectClass}}>
          <Select.Value  />
          <Select.Indicator className="text-cyan-400" />
        </Select.Trigger>

        <Select.Popover className={popoverClass}>
          <ListBox>
            {timeSlots.map((time) => (
              <ListBox.Item
                key={time.id}
                id={time.id}
                textValue={time.label}
                className={itemClass}
              >
                {time.label}
                <ListBox.ItemIndicator className="text-cyan-400" />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>

      {/* End Hour */}
      <Select
        placeholder="Select end time"
      >
        <Label className={labelClass}>End Hour</Label>

        <Select.Trigger className={{triggerClass,selectClass}}>
          <Select.Value />
          <Select.Indicator className="text-cyan-400" />
        </Select.Trigger>

        <Select.Popover className={popoverClass}>
          <ListBox>
            {timeSlots.map((time) => (
              <ListBox.Item
                key={time.id}
                id={time.id}
                textValue={time.label}
                className={itemClass}
              >
                {time.label}
                <ListBox.ItemIndicator className="text-cyan-400" />
              </ListBox.Item>
            ))}
          </ListBox>
        </Select.Popover>
      </Select>
    </div>
  );
};

export default BookingTime;