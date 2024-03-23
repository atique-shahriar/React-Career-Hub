const CategoryList = () => {
    return (
        <div className="bg-none w-4/5 mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-4">Job Category List</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                <div className="bg-base-100 shadow-xl flex flex-col py-8 border items-center rounded-xl">
                    <img src="../../../public/assets/icons/accounts.png" alt="icons" className="p-4" />
                    <h2 className="card-title">Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-base-100 shadow-xl flex flex-col py-8 border items-center rounded-xl">
                    <img src="../../../public/assets/icons/accounts.png" alt="icons" className="p-4" />
                    <h2 className="card-title">Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-base-100 shadow-xl flex flex-col py-8 border items-center rounded-xl">
                    <img src="../../../public/assets/icons/accounts.png" alt="icons" className="p-4" />
                    <h2 className="card-title">Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-base-100 shadow-xl flex flex-col py-8 border items-center rounded-xl">
                    <img src="../../../public/assets/icons/accounts.png" alt="icons" className="p-4" />
                    <h2 className="card-title">Account & Finance</h2>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryList;