const Navbar = () => {
    return (
        <nav className="bg-gray-950 p-4 flex justify-between items-center">
            <div className="text-white text-lg font-semibold">FreeLance</div>

            <div>
                <button className="bg-white text-gray-950  hover:text-white px-4 py-2 rounded-md hover:bg-green-500">
                    Sign Up
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
