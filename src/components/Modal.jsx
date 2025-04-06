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
          role="dialog"
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
                <div className="flex justify-center w-full">
                  <img
                    src={
                      data?.sprites?.other["official-artwork"]?.front_default
                    }
                    alt="pokemon-pict"
                    className="w-25"
                  />
                </div>
                <div className="grid grid-cols-2">
                  {/* Detail Pokemon */}
                  <div>
                    <h4 className="text-xl mb-5">Details</h4>
                    <div className="flex flex-col">
                      <p className="text-sm leading-relaxed text-gray-500">
                        Height: {data?.height} dm
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500">
                        Weight: {data?.weight} kg
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500">
                        Type:{" "}
                        {data?.types?.map((type, index) => {
                          if (index == data?.types?.length - 1) {
                            return (
                              <span key={index}>
                                {type.type.name.charAt(0).toUpperCase() +
                                  type.type.name.slice(1)}
                              </span>
                            );
                          } else {
                            return (
                              <span key={index}>
                                {type.type.name.charAt(0).toUpperCase() +
                                  type.type.name.slice(1)}
                                ,{" "}
                              </span>
                            );
                          }
                        })}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500">
                        Base Experience: {data?.base_experience}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500">
                        Species:{" "}
                        {data?.species?.name.charAt(0).toUpperCase() +
                          data?.species?.name.slice(1)}
                      </p>
                      <p className="text-sm leading-relaxed text-gray-500">
                        Abilities:{" "}
                        {data?.abilities?.map((abilities, index) => {
                          if (index == data?.abilities?.length - 1) {
                            return (
                              <span key={index}>
                                {abilities.ability.name
                                  .charAt(0)
                                  .toUpperCase() +
                                  abilities.ability.name.slice(1)}
                              </span>
                            );
                          } else {
                            return (
                              <span key={index}>
                                {abilities.ability.name
                                  .charAt(0)
                                  .toUpperCase() +
                                  abilities.ability.name.slice(1)}
                                ,{" "}
                              </span>
                            );
                          }
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Stats Pokemon */}
                  <div>
                    {data?.stats?.map((stat, index) => {
                      return (
                        <div className="my-2" key={index}>
                          <div className="flex justify-between">
                            <p className="text-sm leading-relaxed text-gray-500">
                              {stat.stat.name.toUpperCase()}
                            </p>
                            <p className="text-sm leading-relaxed text-gray-500">
                              {stat.base_stat} %
                            </p>
                          </div>
                          <div className="bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2.5 rounded-full"
                              style={{
                                width: `${Math.min(stat.base_stat, 100)}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
