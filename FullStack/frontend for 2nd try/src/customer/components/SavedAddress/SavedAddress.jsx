import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const SavedAddress = ({ products }) => {
  const navigate = useNavigate()

  return (
    <div className="bg-white dark:bg-[#0b1727] px-6 lg:px-12">

      <div className="bg-gray-100 dark:bg-slate-800 p-4 lg:p-6 mt-1 ">
        <div>
          {/* Name and Delete */}
          <div className="flex justify-between items-center">
            <h6 className="font-medium text-2xl">Razi</h6>
            <button className="w-10 h-10 bg-gray-200 dark:bg-slate-900 text-blue-600 inline-flex justify-center items-center rounded-full">
              <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
          {/* Address */}
          <div className="my-4">
            <h2>
              Plot No 17, Line No L, Room No 2, Road No 9, Baiganwadi, Govandi, Mumbai,
            </h2>
            <h2>India - 400043</h2>
            <h2 className=" font-medium">9967908218</h2>
            <h2 className=" font-medium">skrazi9913@gmail.com</h2>
          </div>
          {/* Button */}
          <div className="flex gap-3">
            <button className="text-white bg-blue-600 hover:bg-opacity-90 p-4 px-9 flex justify-center items-center leading-none h-full rounded-md w-full"
              onClick={() => navigate('/overview?step=3')}>Continue</button>
            <button className="text-white bg-blue-600 hover:bg-opacity-90 p-4 px-9 flex justify-center items-center leading-none h-full rounded-md w-full">Edit</button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SavedAddress
