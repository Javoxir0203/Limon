"use client"
import { InputMask, InputMaskChangeEvent } from "primereact/inputmask";
import { useState } from "react";

export default function FormatNumber() {
  const [number, setNumber] = useState<string | undefined>();

  return (
    <div className="card  flex justify-content-center">
      <InputMask
        value={number}
        onChange={(e: InputMaskChangeEvent) => setNumber(e.target.value)}
        mask="+998-999-99-99"
        placeholder="+998-999-99-99"
        className="border-[#E6E9EF] placeholder:font-semibold py-[13px] pl-[20px] rounded-[8px] focus:outline-[#ffc007] focus:outline-[1px] border text-[14px] leading-[18px] placeholder:text-[#A5AAB4] transiition-all duration-300 w-[80%]"
      />
    </div>
  )
}