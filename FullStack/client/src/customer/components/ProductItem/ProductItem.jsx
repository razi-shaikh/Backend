import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faStar } from "@fortawesome/free-solid-svg-icons";

const QtyField = ({ name, value, onChange }) => {
  const qtyControl = (qty) =>
    onChange({
      target: {
        name,
        type: "radio",
        value: qty < 1 ? 1 : qty,
      },
    });

  return (
    <div className="h-10 border dark:border-slate-700 rounded-full flex w-36 relative mt-4 overflow-hidden">
      <button
        className="px-4 py-1 inline-flex justify-center border-r dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10"
        type="button"
        onClick={() => qtyControl(parseInt(value) - 1)}
      >
        -
      </button>
      <input
        type="number"
        className="px-4 py-1 inline-flex justify-center max-w-[60px] text-center bg-transparent focus:outline-none
        [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        value={value}
        disabled
        onChange={(e) => qtyControl(e.target.value)}
      />
      <button
        className="px-4 py-1 inline-flex justify-center border-l dark:border-slate-700 text-blue-600 hover:bg-blue-600 hover:bg-opacity-10"
        type="button"
        onClick={() => qtyControl(parseInt(value) + 1)}
      >
        +
      </button>
    </div>
  );
};


const ProductItem = ({ item, index, onChange, button, review }) => {
  const { img, title, price, qty } = item;
  return (
    <div className="flex flex-col md:flex-row items-start p-2 md:p-6 mb-4">

      <div className="w-full lg:max-w-[150px] rounded-xl mr-4 md:mr-6 mb-4 lg:mb-0">
        <a href="#!">
          <div className="relative w-full" style={{ paddingTop: '100%' }}>
            <img
              src={img}
              alt={title}
              className="absolute top-0 left-0 w-full h-full object-cover object-top rounded-xl"
            />
          </div>
        </a>
      </div>

      <div className="flex">
        {/* product details */}
        <div>
          <div className="text-base md:text-lg hover:text-blue-600 mb-4">
            <a href="#!">{title}</a>
          </div>
          <div>
            <div className="flex gap-4">
              <h3 className="text-xl font-bold text-black">₹{price}</h3>
              <h3 className="text-xl font-bold text-black opacity-50 line-through">₹999</h3>
              <h3 className="text-xl font-bold text-green-600">5% Off</h3>
            </div>

            <div className={`${button ? "hidden" : "flex"} items-center justify-between`}>
              <QtyField
                name={`${index}`}
                value={qty}
                onChange={(e) => onChange(e, index)}
              />
              {/* delete button  */}
              <div>
                <button className="w-10 h-10 bg-gray-200 dark:bg-slate-900 text-blue-600 inline-flex justify-center items-center rounded-full">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className={`${review ? "hidden" : "flex"} items-center pt-4 text-blue-600 `}>
              <FontAwesomeIcon icon={faStar} />
              <p className='pl-2'>Rate & Review Product</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductItem