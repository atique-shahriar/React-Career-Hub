import { useEffect, useState } from "react";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const FeaturedJobs = () => {

    const [featuredJobs, setFeaturedJobs] = useState([])

    useEffect(() => {
        fetch("./data/jobs.json")
            .then(res => res.json())
            .then(data => setFeaturedJobs(data))
    }, [])
    console.log(featuredJobs);

    return (
        <div className="bg-none w-4/5 mx-auto py-10">
            <h1 className="text-3xl font-bold text-center mb-4">Featured Jobs</h1>
            <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-6 mt-8">
                {
                    featuredJobs.map(jobs => <FeaturedJob key={jobs.id} jobs={jobs}></FeaturedJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;