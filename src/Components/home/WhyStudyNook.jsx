import { FiCalendar, FiShield, FiClipboard } from "react-icons/fi";

const WhyStudyNook = () => {

    const whyStudyNookData = [
        {
            id: 1,
            title: "Easy Booking",
            description:
                "Pick a date, choose an hour, see the cost — done. No back-and-forth emails or paperwork.",
            icon: <FiCalendar />,
        },
        {
            id: 2,
            title: "Conflict-Free Scheduling",
            description:
                "Smart overlap detection prevents double-bookings, so the room you reserve is the room you get.",
            icon: <FiShield />,
        },
        {
            id: 3,
            title: "Manage Your Listings",
            description:
                "Own a room? List it, set your hourly rate, and keep full control from your dashboard.",
            icon: <FiClipboard />,
        },
    ];

    return (
        <section className="bg-linear-to-b from-[#07111F] to-[#0F172A] 
       py-6 md:py-10 rounded-2xl mt-20 mb-15 px-2 md:px-6">
            {/* heading text */}
            <div className="mb-10 space-y-2 text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Why <span className="text-[#22D3EE]">StudyNook?</span>
                </h1>
                <p className="text-[#94A3B8] px-5">
                    Built around the way real students study -quiet, focused, and on your schedule.
                </p>
            </div>

            {/* card box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    whyStudyNookData.map((whyData) =>
                        <div key={whyData.id}

                            className=" rounded-lg flex flex-col gap-3
                            p-4 bg-[#ffffff14] border border-[#ffffff1f]
                          hover:border-[#22D3EE]
                          hover:shadow-[0_10px_40px_rgba(34,211,238,0.18)]">

                            <span className="text-[#22D3EE] text-2xl
                            bg-[#22d3ee1f] p-2 w-fit rounded-lg">
                                {whyData.icon}
                            </span>

                            <h3 className="text-lg font-semibold">
                                {whyData.title}</h3>

                            <p className="text-[#94A3B8]">{whyData.description}</p>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default WhyStudyNook;