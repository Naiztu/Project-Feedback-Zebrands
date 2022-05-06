import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Piker({ estado: { e1, e2 }, setEstado: { sE1, sE2 } }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-4  w-11/12 mx-auto">
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={e1}
        onChange={(date) => {
          sE1(date);
        }}
        selectsStart
        startDate={e1}
        endDate={e2}
        className="font-bold text-xl bg-primary-50 hover:bg-primary-50/80 hover:scale-105 active:scale-95  transition-all ease-in-out rounded-lg cursor-pointer h-10 text-center text-white"
      />
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={e2}
        onChange={(date) => {
          sE2(date);
        }}
        selectsEnd
        startDate={e1}
        endDate={e2}
        minDate={e1}
        className="font-bold text-xl bg-primary-50 hover:bg-primary-50/80 hover:scale-105 active:scale-95  transition-all ease-in-out rounded-lg cursor-pointer h-10 text-center text-white"
      />
    </div>
  );
}
