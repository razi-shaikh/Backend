import React from 'react'
import { useNavigate } from "react-router-dom";

function AddressForm() {
    const navigate = useNavigate()

    const inputs = [
        {
            level: "Full Name",
            type: "text",
            placeholder: "Jon Doe",
            htmlFor: "name",
            required: true,
        },
        {
            level: "Email",
            type: "email",
            placeholder: "example@gmail.com",
            htmlFor: "email",
            required: true,
        },
        {
            level: "Phone",
            type: "number",
            placeholder: "+88016***78",
            htmlFor: "phone",
            className: "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
            required: true,
        },
        {
            level: "Home Address",
            type: "text",
            placeholder: "11 Zia Uddin Road",
            htmlFor: "address",
            required: false,
        },
        {
            level: "Country",
            type: "text",
            placeholder: "Bangladesh",
            htmlFor: "country",
            required: false,
        },
        {
            level: "Pin Code",
            type: "number",
            placeholder: "****",
            htmlFor: "post",
            className: "[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none",
            required: true,
        },
    ];

    const InputItem = ({ input }) => {
        return (
            <div className="flex flex-col gap-2 mt-6">
                <label htmlFor={input.htmlFor} className="font-medium">
                    {input.level}{" "}
                    <span className="text-blue-600">{input.required ? "*" : ""}</span>
                </label>
                <input type={input.type}
                    className={`h-14 p-4 bg-blue-600 bg-opacity-5 dark:bg-slate-700 focus:outline-none focus:border focus:border-blue-600 rounded-md ${input.className}`}
                    id={input.htmlFor}
                    placeholder={input.placeholder}
                    required />
                {/* <TextField id="outlined-basic" label={input.placeholder} variant="outlined" /> */}
                {/* helperText="Incorrect entry." error */}
            </div>
        );
    };

    return (
        <form action="">
            <h4 className="font-medium text-2xl">Your Billing Details</h4>
            {inputs.map((input, i) => (
                <InputItem input={input} key={i} />
                // <TextField id="outlined-basic" label="Outlined" variant="outlined" key={i} />
            ))}
            {/* check box */}
            <div className="flex items-center my-4">
                <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Save this Address</label>
            </div>
            <button className="text-white bg-blue-600 hover:bg-opacity-90 p-4 px-9 flex justify-center items-center leading-none h-full rounded-md w-full mt-6"
                onClick={() => navigate('/overview?step=3')}>Continue</button>
        </form>
    );
}

export default AddressForm
