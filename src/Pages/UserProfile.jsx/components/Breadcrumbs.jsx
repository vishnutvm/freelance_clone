import React from 'react';
import { CiShare1 } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai'
import { TiWarning } from 'react-icons/ti'

const Breadcrumbs = () => {
    return (
        <div className="bg-white p-4 gutter-space-padding" >
            <div className="container mx-auto">
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="sm:w-1/2">
                        <ol className="flex flex-row gap-3 text-gray-600 text-sm">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 text-base font-normal hover:underline"
                                >
                                    Home
                                </a>
                            </li>
                            <li>/</li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-500 text-base font-normal hover:underline"
                                >
                                    Freelancers
                                </a>
                            </li>
                            <li>/</li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-900 text-base font-normal hover:underline"
                                >
                                    John Powell
                                </a>
                            </li>
                        </ol>
                    </div>

                    <div className="sm:w-1/2 mt-4 sm:mt-0 flex justify-center sm:justify-end gap-3">
                        <div className="flex items-center">
                            <div className="text-gray-600 hover:text-white rounded-full p-2 hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer border-solid border border-gray-400">
                                <CiShare1 size={13} />
                            </div>
                            <span className="ml-2 text-gray-600 font-medium">Share</span>
                        </div>

                        <div className="flex items-center">
                            <div className="text-gray-600 hover:text-white rounded-full p-2 hover:bg-green-500 transition duration-300 ease-in-out cursor-pointer border-solid border border-gray-400">
                                <AiOutlineHeart size={13} />
                            </div>
                            <span className="ml-2 text-gray-600 font-medium">Save</span>
                        </div>

                        <div className="flex items-center">
                            <div className="text-gray-600 cursor-pointer">
                                <TiWarning size={18} color="#ffc107" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Breadcrumbs;
