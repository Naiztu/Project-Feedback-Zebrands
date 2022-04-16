import React, { useState } from "react";

export default function Dato({ isSaved, data, index, handleChange }) {
  const [isEdited, setIsEdited] = useState(false);
  return (
    <div className="rowDimension">
      <div className="dimesion basis-7/12">{data[0]}</div>
      {isSaved && !isEdited ? (
        <div className=" coment basis-4/12"> {data[1]}</div>
      ) : (
        <textarea
          type="text"
          id={index}
          value={data[1]}
          onChange={handleChange}
          className=" text-area-info basis-4/12"
          placeholder="Dato del member"
        ></textarea>
      )}

      {isSaved && (
        <div className=" flex  basis-1/12 items-center">
          <button
            className="btn"
            onClick={() => {
              setIsEdited(!isEdited);
            }}
          >
            x
          </button>
        </div>
      )}
    </div>
  );
}

Dato.defaultProps = {
  isSaved: true,
};
