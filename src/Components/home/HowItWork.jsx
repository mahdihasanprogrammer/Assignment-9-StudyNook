import { FiSearch, FiCalendar, FiCreditCard } from "react-icons/fi";

const HowItWork = () => {

    const howItWorksData = [
        {
            id: "01",
            step: "STEP 1",
            title: "Browse Rooms",
            description:
                "Filter by floor, capacity, amenities, or hourly rate to find your fit.",
            icon: <FiSearch />,
        },
        {
            id: "02",
            step: "STEP 2",
            title: "Pick a Time",
            description:
                "Choose a date and an open time slot — we'll prevent any conflicts.",
            icon: <FiCalendar />,
        },
        {
            id: "03",
            step: "STEP 3",
            title: "Study Peacefully",
            description:
                "Get a confirmation, show up, and focus. Manage everything from your dashboard.",
            icon: <FiCreditCard />,
        },
    ];
    return (
        <section className="py-6 md:py-10 rounded-2xl my-15 px-2 md:px-6
         text-center 
        bg-linear-to-b from-[#0F172A] to-[#07111F]">
            {/* heading text */}
            <div className="mb-10 space-y-2 text-center">
                <h1 className="text-3xl md:text-4xl font-bold">
                    How It Works
                </h1>
                <p className="text-[#94A3B8] px-5">
                    From browsing to booked in under a minute.
                </p>
            </div>

            {/* card box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    howItWorksData.map((worksData) =>
                        <div key={worksData.id}

                            className=" rounded-lg flex flex-col gap-3
                            p-4 bg-[#ffffff12] border border-[#ffffff1a]
                          hover:border-[#22D3EE]
                          hover:shadow-[0_10px_40px_rgba(34,211,238,0.18)]">

                            <span className="text-[#22D3EE] text-2xl
                            bg-[#22d3ee1a] p-2 w-fit rounded-lg mx-auto">
                                {worksData.icon}
                            </span>

                            <h3 className="text-lg font-semibold">
                                {worksData.title}</h3>

                            <p className="text-[#94A3B8]">{worksData.description}</p>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default HowItWork;