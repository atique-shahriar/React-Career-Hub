
const SingleCategory = ({ category }) => {
    const { logo, category_name, availability } = category;
    return (
        <div className="bg-base-100 shadow-xl flex flex-col py-8 border items-center rounded-xl">
            <img src={logo} alt="icons" className="p-4" />
            <h2 className="card-title">{category_name}</h2>
            <p>{availability}</p>
        </div>
    );
};

export default SingleCategory;