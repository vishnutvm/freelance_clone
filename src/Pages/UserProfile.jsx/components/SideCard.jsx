import { AiOutlineMail } from 'react-icons/ai';
import { BsArrowUpRight, BsGenderMale } from 'react-icons/bs';
import { CiLocationOn, CiPhone } from 'react-icons/ci';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { LiaLanguageSolid } from 'react-icons/lia';

const SideCard = ({ data = {} }) => {
    return (
        <div className="mt-[-5rem] w-[70%] mx-auto md:ml-auto sticky top-1">
            <div className="col-span-3 md:col-span-4 lg:col-span-3 xl:col-span-2 lg:block ">
                <div className="p-7 border bg-white rounded-md shadow-sm">
                    <div className="freelancer-info-detail">
                        <div className="freelancer-salary-wrapper text-gray-900 flex align-top gap-1 ">
                            <span className="text-3xl font-bold">${data.hourlyRate.min}</span>{' '}
                            <span className="text-md">-</span>{' '}
                            <span className="text-3xl font-bold">${data.hourlyRate.max}</span>{' '}
                            <span className="text-md">/ hr</span>
                        </div>
                        <ul className="my-5 text-base">
                            <li className="flex items-center justify-between space-x-3">
                                <div className="flex align-middle justify-center gap-1">
                                    <div className="mt-1"><CiLocationOn color="black" size={18} /></div>
                                    <div className="text-gray-900">Location</div>
                                </div>
                                <div className="">
                                    <a href="" className="text-gray-900 ">{data.location}</a>
                                </div>
                            </li>
                            <hr className="my-5 border-t border-gray-300" />
                            <li className="flex items-center justify-between space-x-3">
                                <div className="flex align-middle justify-center gap-1">
                                    <div className="mt-1"><IoDocumentTextOutline color="black" size={18} /></div>
                                    <div className="text-gray-900">Type</div>
                                </div>
                                <div className="">
                                    <a href="" className="text-gray-900 ">{data.type}</a>
                                </div>
                            </li>
                            <hr className="my-5 border-t border-gray-300" />
                            <li className="flex items-center justify-between space-x-3">
                                <div className="flex align-middle justify-center gap-1">
                                    <div className="mt-1"><LiaLanguageSolid color="black" size={18} /></div>
                                    <div className="text-gray-900">English Level</div>
                                </div>
                                <div className="">
                                    <a href="" className="text-gray-900 ">{data.englishLevel}</a>
                                </div>
                            </li>
                            <hr className="my-5 border-t border-gray-300" />
                            <li className="flex items-center justify-between space-x-3">
                                <div className="flex align-middle justify-center gap-1">
                                    <div className="mt-1"><BsGenderMale color="black" size={18} /></div>
                                    <div className="text-gray-900">Gender</div>
                                </div>
                                <div className="">
                                    <a href="" className="text-gray-900 ">{data.gender}</a>
                                </div>
                            </li>
                            <hr className="my-5 border-t border-gray-300" />
                            <li className="flex items-center justify-between space-x-3">
                                <div className="flex align-middle justify-center gap-1">
                                    <div className="mt-1"><AiOutlineMail color="black" size={18} /></div>
                                    <div className="text-gray-900">Email</div>
                                </div>
                                <div className="">
                                    <a href="" className="text-gray-900 ">{data.email}</a>
                                </div>
                            </li>
                            <hr className="my-5 border-t border-gray-300" />
                            <li className="flex items-center justify-between space-x-3">
                                <div className="flex align-middle justify-center gap-1">
                                    <div className="mt-1"><CiPhone color="black" size={18} /></div>
                                    <div className="text-gray-900">Phone Number</div>
                                </div>
                                <div className="">
                                    <a href="" className="text-gray-900 ">{data.phoneNumber}</a>
                                </div>
                            </li>
                            <button
                                className="my-6 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-md w-full flex align-middle justify-center gap-3"
                            >
                                Contact me <span className='mt-1'><BsArrowUpRight size={20} /></span>
                            </button>
                        </ul>
                    </div>
                </div>

                <div className="my-4 p-7 border bg-white rounded-md shadow-sm">
                    <div className="flex flex-col gap-3">
                        <span className='text-lg text-gray-950 font-semibold'>My Skills</span>
                        <div className="flex flex-wrap align-middle justify-start gap-4">
                            {data.skills.map((skill, index) => (
                                <span key={index} className="px-4 py-1 bg-[#FFEDE8] text-gray-900 rounded-3xl flex align-middle justify-center">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideCard;
