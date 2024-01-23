import React, { useState } from 'react'

function FAQ(props) {
    
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }
    
    return (
        <div className={` ${open ? 'bg-[#F9FAFB] rounded-2xl border-[1px] border-[#EAECF0]' : props.last? '': 'border-b-[1px] border-[#EAECF0] '}  p-6 `} >
            <div className="mb-2 flex justify-between gap-2 cursor-pointer" onClick={handleClick} >
                <h5 className="text-lg font-semibold text-[#101828] " >
                    {props.question}
                </h5>
                <img src={open ? process.env.PUBLIC_URL + "/images/minuscircle.svg" : process.env.PUBLIC_URL + "/images/pluscircle.svg" } alt="open question" className="w-6 h-6" />
            </div>
            <p className={` ${open ? "block" : "hidden"} text-base text-[#475467] `} >
                ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with
                varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars,
                ensuring you have the right fit for your needs.
            </p>
        </div>
    )
}

export default FAQ