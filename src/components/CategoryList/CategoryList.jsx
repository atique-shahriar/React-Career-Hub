import { useEffect, useState } from "react";
import SingleCategory from "../SingleCategory/SingleCategory";

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("../data/categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className="bg-none w-4/5 mx-auto mt-10 py-10">
            <h1 className="text-3xl font-bold text-center mb-4">Job Category List</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
                {
                    categories.map(category => <SingleCategory key={category.id} category={category}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryList;