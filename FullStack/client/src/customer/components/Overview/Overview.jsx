import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddressSection from "../AddressSection/AddressSection";
import OrderSummary from "../OrderSummary/OrderSummary";


const Overview = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useSearchParams();
  console.log(query.get("step"));
  let step = query.get("step");

  const progressBardetails = [
    { value: "1" },
    { value: "2" },
    { value: "3" },
    { value: "4" },
  ];

  const ProgressBar = () => {
    return (
      <div className="col-span-12">
        <div className="flex items-center justify-between relative mb-12">
          <div className="absolute top-5 right-0 left-0 border-t-2 border-dashed dark:border-slate-700"></div>
          {progressBardetails.map((item, i) => (
            <span
              className={`relative w-10 h-10 shadow flex justify-center items-center text-lg z-20 cursor-pointer rounded-full border 
                  ${i <= step - 1
                  ? "bg-blue-600 text-white  border-blue-600"
                  : "bg-gray-100 dark:bg-slate-700 dark:border-slate-600"
                } `}
              key={i}
            >
              {item.value}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (

    // make a OrderSummary fix when its scroll down 
    <div className="max-w-6xl mx-auto">
      <section className="py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white relative overflow-hidden z-10">
        <div className="container px-4 mx-auto">
          <div className="row justify-content-center">
            <ProgressBar />
            {/* Address Section */}
            {step == 2 ? <AddressSection /> : <OrderSummary />}
            {/* <AddressSection /> */}
          </div>
        </div>
      </section>
    </div>

  );
};

export default Overview