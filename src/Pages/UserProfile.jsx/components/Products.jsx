/* eslint-disable react/prop-types */
import { AiFillStar } from 'react-icons/ai';

const Products = ({ products = [] }) => {
    return (
        <div className="flex flex-wrap -mx-4">
            {products?.map((product, index) => (
                <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 px-4 mb-4">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="relative">
                            <img
                                src={product.imageSrc}
                                alt="Service Image"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="px-6 py-3">
                            <div>
                                <a className="text-gray-500 text-sm">{product.category}</a>
                            </div>
                            <h2 className="text-xl font-semibold mt-2">
                                <a className="text-gray-700 hover:text-green-600 text-lg cursor-pointer hover:underline">
                                    {product.title}
                                </a>
                            </h2>
                            <div className="flex items-center mt-4">
                                <AiFillStar color="#E1C03F" size={16} />
                                <span className="text-link ml-1 text-gray-700">
                                    {product.rating} <span className='text-gray-500'>({product.reviews} Reviews)</span>
                                </span>
                            </div>
                            <hr className="my-3 border-t border-gray-300" />
                            <div className="info-bottom flex items-center justify-between mt-4">
                                <div className="flex items-center">
                                    <img
                                        src={product.author.imageSrc}
                                        alt="Author Image"
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <span className="text-gray-700 text-ellipsis ml-2">{product.author.name}</span>
                                </div>
                                <div className="flex flex-col justify-end items-end">
                                    <span className="text-gray-700">Starting at:</span>
                                    <div className='text-gray-950 font-semibold '>${product.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;
