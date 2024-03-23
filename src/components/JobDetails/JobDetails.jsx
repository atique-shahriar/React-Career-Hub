import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ImProfile } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import Button from "../Button/Button";


const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();

    const job = jobs.find(job => job.id == id)

    console.log(id, job);
    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;
    const { phone, email, address } = contact_information;

    return (
        <div className="">
            <div className="bg-gray-50">
                <h2 className="text-center text-2xl font-semibold py-12">Job Details</h2>
            </div>
            <div className="grid grid-cols-3 w-4/5 mx-auto py-10 gap-12">
                <div className="col-span-2 space-y-4 text-justify">
                    <p><span className="font-semibold">Job Description: </span>{job_description}</p>
                    <p><span className="font-semibold">Job Responsibility: </span>{job_responsibility}</p>
                    <p><span className="font-semibold block mb-2">Educational Requirements: </span>{educational_requirements}</p>
                    <p><span className="font-semibold block mb-2">Experience: </span>{experiences}</p>
                </div>
                <div className="col-span-1">
                    <div>
                        <div className="p-4 space-y-1 bg-gray-100 rounded-lg ">
                            <p className="font-semibold">Job Details</p>
                            <hr />
                            <div className="flex items-center gap-1">
                                <RiMoneyDollarCircleLine />
                                <span className="font-semibold">Salary:</span>
                                <p className="font-base"> {salary}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <ImProfile />
                                <span className="font-semibold">Job Title:</span>
                                <p className="font-base"> {job_title}</p>
                            </div>

                            <p className="font-semibold pt-4">Contact Information</p>
                            <hr />

                            <div className="flex items-center gap-1">
                                <FiPhone />
                                <span className="font-semibold">Phone:</span>
                                <p className="font-base"> {phone}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <MdOutlineEmail />
                                <span className="font-semibold">Email:</span>
                                <p className="font-base"> {email}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <CiLocationOn />
                                <span className="font-semibold">Address:</span>
                                <p className="font-base flex"> {address}</p>
                            </div>
                        </div>
                        <div >
                            <button className="btn mt-6 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold">Apply Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;