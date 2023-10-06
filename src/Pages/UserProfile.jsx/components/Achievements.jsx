import { FiList, FiTarget, FiClipboard } from 'react-icons/fi';
import { TbTargetArrow } from 'react-icons/tb';
const Achievements = () => {
  return (
    <div className=" p-4  rounded-lg mt-4 bg-white">
      <ul className="grid  sm:grid-cols-2 md:grid-cols-4 gap-4 text-md">
        <li className="flex items-center ">
          <div className="text-gray-700 p-2 rounded-full mr-2">
            <FiTarget size={40} />
          </div>
          <div className="font-semibold text-gray-900 ">
            <div>Project Success</div>
            <div>0</div>
          </div>
        </li>
        <li className=" icon flex items-center">
          <div className="  text-gray-700 p-2 rounded-full mr-2">
            <FiList size={40} />
          </div>
          <div className="font-semibold text-gray-900 ">
            <div>Total Service</div>
            <div>3</div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="text-gray-700 p-2 rounded-full mr-2">
            <TbTargetArrow size={40} />
          </div>
          <div className="font-semibold text-gray-900 ">
            <div>Completed Service</div>
            <div>0</div>
          </div>
        </li>
        <li className="flex items-center">
          <div className="text-gray-700 p-2 rounded-full mr-2">
            <FiClipboard size={40} />
          </div>
          <div className="font-semibold text-gray-900 ">
            <div>In Queue service</div>
            <div>0</div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
