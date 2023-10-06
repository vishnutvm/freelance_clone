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
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam rem
                            aperiam, eaque ipsa quae ab illo inventore veritatis et
                            quasi architecto beatae vitae dicta sunt explicabo.
                        </div>
                    </li>
                </ul>
            </div>

            {/* <div id="review_form_wrapper" className="mt-6">
                <div id="review_form" className="commentform">
                    <div className="commentform reset-button-default">
                        <div className="clearfix">
                            <div id="respond" className="comment-respond">
                                <h4 className="text-xl font-semibold mb-4">Add a review</h4>
                                <form
                                    action="https://demoapus1.com/freeio-new/wp-comments-post.php"
                                    method="post"
                                    id="commentform"
                                    className="comment-form"
                                    noValidate
                                >
                                    <div className="choose-rating clearfix">
                                        <div className="choose-rating-inner row">
                                            <div className="col-sm-12 col-xs-12">
                                                <div className="form-group yourview">
                                                    <div className="font-semibold text-lg">
                                                        Your Rating for this listing
                                                    </div>
                                                    <div className="wrapper-rating-form">
                                                        <div className="comment-form-rating">
                                                            <ul className="review-stars">
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                            </ul>
                                                            <ul className="review-stars filled">
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                                <li>
                                                                    <span className="fa fa-star text-yellow-500"></span>
                                                                </li>
                                                            </ul>
                                                            <input
                                                                type="hidden"
                                                                value="5"
                                                                name="rating"
                                                                id="_input_rating"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="group-upload-preview clearfix"></div>
                                    <div className="form-group space-4">
                                        <label className="font-semibold text-lg">
                                            Your Comment
                                        </label>
                                        <textarea
                                            id="comment"
                                            className="form-control border rounded-md p-2"
                                            placeholder="Comment"
                                            name="comment"
                                            cols="45"
                                            rows="5"
                                            aria-required="true"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label className="font-semibold text-lg">
                                                    Your Name
                                                </label>
                                                <input
                                                    id="author"
                                                    placeholder="Name"
                                                    className="form-control border rounded-md p-2"
                                                    name="author"
                                                    type="text"
                                                    value=""
                                                    size="30"
                                                    aria-required="true"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6">
                                            <div className="form-group">
                                                <label className="font-semibold text-lg">
                                                    Your Email
                                                </label>
                                                <input
                                                    id="email"
                                                    placeholder="Email"
                                                    className="form-control border rounded-md p-2"
                                                    name="email"
                                                    type="text"
                                                    value=""
                                                    size="30"
                                                    aria-required="true"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <p className="comment-form-cookies-consent">
                                        <input
                                            id="wp-comment-cookies-consent"
                                            name="wp-comment-cookies-consent"
                                            type="checkbox"
                                            value="yes"
                                        />
                                        <label htmlFor="wp-comment-cookies-consent">
                                            Save my name, email, and website in this browser for the
                                            next time I comment.
                                        </label>
                                    </p>
                                    <p className="form-submit">
                                        <input
                                            name="submit"
                                            type="submit"
                                            id="submit"
                                            className="btn btn-theme btn-inverse bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md"
                                            value="Submit Review"
                                        />
                                        <input
                                            type="hidden"
                                            name="comment_post_ID"
                                            value="4099"
                                            id="comment_post_ID"
                                        />
                                        <input
                                            type="hidden"
                                            name="comment_parent"
                                            id="comment_parent"
                                            value="0"
                                        />
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ReviewSection;
