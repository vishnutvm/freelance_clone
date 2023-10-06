/* eslint-disable react/prop-types */
import { AiFillStar } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsCalendar2Date } from 'react-icons/bs';

const Profile = ({ userData }) => {
    return (
        <div className="userProfile_div bg-white p-4 shadow-md rounded-xl mt-4">
            <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-normal ">
                <div className="flex-shrink-0">
                    <div style={{ width: '7.5rem', height: '7.5rem' }} className="rounded-full overflow-hidden">
                        <img
                            src={userData.profileImageUrl}
                            alt="User Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className=" flex-grow mt-4 md:mt-0 md:ml-4">
                    <span className="font-semibold text-xl text-gray-900">{userData.name}</span>
                    <div className="text-gray-600 text-sm">{userData.role}</div>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-0 items-center mt-3 text-gray-800 text-sm">
                        <div className="flex items-center justify-center mr-4">
                            <AiFillStar color="#E1C03F" size={16} />
                            <span className="text-link ml-1">{userData.rating} ({userData.reviewCount} Review)</span>
                        </div>
                        <div className="flex items-center justify-center mr-4">
                            <CiLocationOn color="black" size={16} />
                            <span className="text-link ml-1">{userData.location}</span>
                        </div>
                        <div className="flex items-center justify-center">
                            <BsCalendar2Date color="black" size={16} />
                            <span className="text-link ml-1">{userData.birthdate}</span>
                        </div>
                    </div>
                </div>
                <div className="md:ml-auto mt-5 md:mt-0 flex gap-3 justify-self-center">
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                        Invite
                    </button>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
