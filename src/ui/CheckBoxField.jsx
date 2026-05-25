const CheckBoxField = () => {

    const amenities = [
        "Whiteboard",
        "Projector",
        "Wi-Fi",
        "Power Outlets",
        "Quiet Zone",
        "Air Conditioning",
    ];

    return (


        <>

            {amenities.map(item =>
                <div key={item}
                    className="border-white/10 bg-[#111827]/60 
                px-4 py-3 rounded-lg text-sm flex items-center gap-2 cursor-pointer hover:border-cyan-400">

                    <input type="checkbox"
                        name="amenities"
                        id={item}
                        value={item}
                        className="size-4  rounded-full appearance-none bg-transparent outline-cyan-500 outline-1 checked:bg-cyan-400"
                    />

                    <label htmlFor={item}> {item}</label>
                </div>
            )}
        </>

    );
};

export default CheckBoxField;