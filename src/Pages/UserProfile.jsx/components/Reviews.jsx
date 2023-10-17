import { AiFillStar } from 'react-icons/ai';
const ReviewSection = () => {
    return (
        <div id="reviews" className='mt-10'>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1 Review</h3>
            <div className=" flex gap-8  flex-col md:flex-row items-center justify-center">
                <div className='w-3/4 md:w-1/3'
                    style={{
                        display: 'flex',
                        backgroundColor: '#FFEDE8',
                        borderRadius: '10px',
                        padding: '3.75rem 1.875rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <span style={{ color: '#E1C03F' }} className="text-6xl font-bold">
                        3.0
                    </span>
                    <div className="flex  text-gray-300">
                        <AiFillStar color="#E1C03F" size={16} />
                        <AiFillStar color="#E1C03F" size={16} />
                        <AiFillStar color="#E1C03F" size={16} />
                        <AiFillStar size={16} />
                        <AiFillStar size={16} />
                    </div>
                    <span className="text-sm text-gray-700">1 rating</span>
                </div>
                <div className="flex flex-col px-10 w-10/12  md:w-2/3">
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-gray-900">
                            5 Star
                        </a>
                        <div className="w-2/4 h-1 mx-4 bg-gray-200 rounded ">
                            <div
                                className="h-1 bg-yellow-300 rounded"
                                style={{ width: '70%' }}
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">0%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-gray-900">
                            4 Star
                        </a>
                        <div className="w-2/4 h-1 mx-4 bg-gray-200 rounded ">
                            <div
                                className="h-1 bg-yellow-300 rounded"
                                style={{ width: '70%' }}
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">0%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-gray-900">
                            3 Star
                        </a>
                        <div className="w-2/4 h-1 mx-4 bg-gray-200 rounded ">
                            <div
                                className="h-1 bg-yellow-300 rounded"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">100%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-gray-900">
                            2 Star
                        </a>
                        <div className="w-2/4 h-1 mx-4 bg-gray-200 rounded ">
                            <div
                                className="h-1 bg-yellow-300 rounded"
                                style={{ width: '0%' }}
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">0%</span>
                    </div>
                    <div className="flex items-center mt-4">
                        <a href="#" className="text-sm font-medium text-gray-900">
                            1 Star
                        </a>
                        <div className="w-2/4 h-1 mx-4 bg-gray-200 rounded ">
                            <div
                                className="h-1 bg-yellow-300 rounded"
                                style={{ width: '0%' }}
                            />
                        </div>
                        <span className="text-sm font-medium text-gray-500 ">0%</span>
                    </div>
                </div>
            </div>

            <div id="comments" className="mt-6">
                <ul >
                    <li className="flex flex-col item-start justify-start gap-4 ">
                        <div className="flex  space-x-4">
                            <div className="flex-shrink-0  self-start">
                                <img
                                    src="https://secure.gravatar.com/avatar/87250bdf8483607f9d96cc0f31293e83?s=80&amp;d=mm&amp;r=g"
                                    alt="User Avatar"
                                    className="w-14 h-14 rounded-full"
                                />
                            </div>
                            <div >
                                <div className=" text-gray-900 text-md font-semibold">Admin</div>
                                <div className="flex items-center text-gray-600">
                                    <div className="flex items-center justify-center mr-4">
                                        <AiFillStar color="#E1C03F" size={16} />
                                        <span className="text-link ml-1 text-gray-900">3.0</span>
                                    </div>
                                    <div className="ml-2 text-gray-900">November 9, 2022</div>
                                </div>
                            </div>
                        </div>
                        <div className="text-gray-700">
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                    </li>
                </ul>
            </div>
            <div id="review_form_wrapper" className="mt-6">
                <div id="review_form" className="commentform">
                    <div className="commentform reset-button-default">
                        <div className="clearfix">
                            <div id="respond" className="comment-respond">
                                <h4 className="text-gray-900 text-xl font-semibold mb-4">Add a review</h4>
                                <form action="" method="post" id="commentform" className="comment-form" noValidate>
                                    <div className="choose-rating clearfix">
                                        <div className="choose-rating-inner row">
                                            <div className="col-sm-12 col-xs-12">
                                                <div className="form-group yourview">
                                                    <div className="text-gray-500">Your Rating for this listing</div>
                                                    <div className="flex text-gray-300">
                                                        {/* Replace the following stars with your rating component */}
                                                        <AiFillStar color="#E1C03F" size={16} />
                                                        <AiFillStar color="#E1C03F" size={16} />
                                                        <AiFillStar color="#E1C03F" size={16} />
                                                        <AiFillStar size={16} />
                                                        <AiFillStar size={16} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-4 text-gray-800">
                                        <div className="space-4 flex flex-col">
                                            <label className="font-semibold text-md my-2">Your Comment</label>
                                            <textarea
                                                id="comment"
                                                className="border rounded-md p-3 bg-white"
                                                placeholder="Comment"
                                                name="comment"
                                                cols="45"
                                                rows="5"
                                                aria-required="true"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="flex flex-col md:flex-row my-3 gap-5">
                                            <div className="w-full sm:w-1/2 space-4 flex flex-col">
                                                <label className="font-semibold text-md my-2">Your Name</label>
                                                <input
                                                    id="author"
                                                    placeholder="Name"
                                                    className="border rounded-md p-3 bg-white"
                                                    name="author"
                                                    type="text"
                                                    value=""
                                                    size="30"
                                                    aria-required="true"
                                                />
                                            </div>
                                            <div className="w-full sm:w-1/2">
                                                <div className="form-group space-4 flex flex-col">
                                                    <label className="font-semibold text-md my-2">Your Email</label>
                                                    <input
                                                        id="email"
                                                        placeholder="Email"
                                                        className="border rounded-md p-3 bg-white"
                                                        name="email"
                                                        type="text"
                                                        value=""
                                                        size="30"
                                                        aria-required="true"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="flex items-center">
                                        <input id="checkbox" type="checkbox"></input>
                                        <label htmlFor="checkbox" className="text-gray-800 ml-2 text-md">
                                            Save my name, email, and website in this browser for the next time I comment.
                                        </label>
                                    </p>
                                    <p className="my-5">
                                        <input
                                            name="submit"
                                            type="submit"
                                            id="submit"
                                            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-10 rounded-md"
                                            value="Submit Review"
                                        />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ReviewSection;
