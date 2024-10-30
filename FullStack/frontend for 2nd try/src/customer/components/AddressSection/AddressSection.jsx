import React from 'react'
import SavedAddress from '../SavedAddress/SavedAddress'
import AddressForm from '../AddressForm/AddressForm'

function AddressSection() {
    return (
        <div className="col-span-12">
            <div className="bg-gray-100 dark:bg-slate-800 grid grid-cols-12 gap-6 p-6 lg:p-12 mt-12">
                <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
                    <AddressForm />
                </div>

                <div className="col-span-12 lg:col-start-7 lg:col-span-6 bg-white rounded order-1 lg:order-2">
                    <div className="bg-white dark:bg-[#0b1727] pt-6 lg:px-12 rounded-md mb-6">
                        <h4 className="font-medium text-2xl">Saved Address</h4>
                    </div>
                    <div className="h-[75vh] sm:h-[85vh] overflow-y-scroll">
                        <SavedAddress />
                        <SavedAddress />
                        <SavedAddress />
                        <SavedAddress />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddressSection