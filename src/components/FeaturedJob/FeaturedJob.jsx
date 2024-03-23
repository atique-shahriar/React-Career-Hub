import Button from "../Button/Button";
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const FeaturedJob = ({ jobs }) => {
    const { id, logo, job_title, company_name,
        remote_or_onsite, job_type, location, salary
    } = jobs;
    return (
        <div className="bg-base-100 shadow-xl flex flex-col p-8 space-y-2 border rounded-xl">
            <img src={logo} alt="icons" className="w-32 h-10" />
            <h2 className="card-title">{job_title}</h2>
            <p>{company_name}</p>

            <div className="flex gap-4">
                <button className="w-24 border py-1 border-violet-600 rounded-md text-violet-600 font-medium">{remote_or_onsite}</button>
                <button className="w-24 border py-1 border-violet-600 rounded-md text-violet-600 font-medium">{job_type}</button>
            </div>

            <div className="flex gap-6">
                <div className="flex items-center gap-1"><CiLocationOn /><p>{location}</p></div>
                <div className="flex items-center gap-1"><RiMoneyEuroCircleLine /><p>Salary: {salary}</p></div>
            </div>

            <Link to={`/job/${id}`}><Button btnText="View Details"></Button></Link>
        </div >
    );
};

FeaturedJob.propTypes = {
    jobs: PropTypes.object,
}

export default FeaturedJob;