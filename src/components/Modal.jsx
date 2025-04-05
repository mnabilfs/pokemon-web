import React from "react";
import { MdClose } from "react-icons/md";

function Modal({ modalOPen, toggleModal, data }) {
  return (
    <>
      {modalOPen && (
        <div
          id="default_modal"
          tabIndex="-1"
          className="fixed inset-0 flex items-center justify-center z-50 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleModal}
          />

          <div className="relative p-4 mx-auto max-w-2xl w-full">
            <div className="bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 md:p-5 rounded-t">
                <h3 className="text-xl font-semibold text-gray-900">
                  {data?.species?.name?.toUpperCase()}
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                  onClick={toggleModal}
                  data-modal-hide="default_modal"
                >
                  <MdClose />
                </button>
              </div>

              <div className="p-4 md:p-5 space-y-4 overflow-y-scroll h-[30rem]">
                <img
                  src={data?.sprites?.other["official-artwork"]?.front_default}
                  alt="pokemon-pict"
                  className="w-25"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
