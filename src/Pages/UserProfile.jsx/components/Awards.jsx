const Awards = () => {
    return (
        <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Awards</h3>
            <div className="flex mt-4">
                {/* Education Path Icon */}
                <span className="flex flex-col items-center justify-center mr-4">
                    <div>
                        <span className="education_path_showing bg-green-100 text-green-600 text-lg rounded-full w-8 h-8 flex items-center justify-center">
                            B
                        </span>
                    </div>
                    <div className="mt-6 border border-dashed border-green-600 h-full mb-1"></div>
                </span>

                {/* Education Details */}
                <div className="flex-grow ml-4 mb-10">
                    <span className="educationYearLabelBgColor text-gray-700 rounded-xl bg-ffe8de inline-block mb-3">
                        2019
                    </span>
                    <div className="text-gray-950 font-bold">Best Manager</div>
                    <p className="text-gray-700 mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
                        ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in
                        faucibus.
                    </p>
                </div>
            </div>

            <div className="flex ">
                {/* Education Path Icon */}
                <span className="flex flex-col items-start justify-start mr-4">
                    <div>
                        <span className="education_path_showing bg-green-100 text-green-600 text-lg rounded-full w-8 h-8 flex items-center justify-center ">
                            C
                        </span>
                    </div>
                </span>

                {/* Education Details */}
                <div className="flex-grow ml-4">
                    <span className="educationYearLabelBgColor text-gray-700 rounded-xl bg-ffe8de inline-block mb-3">
                        2022
                    </span>
                    <div className="text-gray-950 font-bold">Creative Design</div>
                    <p className="text-gray-700 mt-2">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                        quae ab illo inventore veritatis et.
                    </p>
                </div>
            </div>

            <hr className="my-10 border-t border-gray-300" />
        </div>
    );
};

export default Awards;
