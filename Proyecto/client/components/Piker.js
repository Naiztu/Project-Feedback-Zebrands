import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Piker({ estado: { e1, e2 }, setEstado: { sE1, sE2 } }) {
  const BotonFecha = forwardRef(({ value, onClick }, ref) => (
    <button className="btn" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <div className="flex flex-row space-x-2">
      <DatePicker
        selected={e1}
        onChange={(date) => sE1(date)}
        selectsStart
        startDate={e1}
        endDate={e2}
        customInput={<BotonFecha />}
      />
      <DatePicker
        selected={e2}
        onChange={(date) => sE2(date)}
        selectsEnd
        startDate={e1}
        endDate={e2}
        minDate={e1}
        customInput={<BotonFecha />}
      />
    </div>
  );
}
