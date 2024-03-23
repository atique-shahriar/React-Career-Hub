import Button from "../Button/Button";

const Banner = () => {
    return (
        <div className="bg-gray-100">
            <div className="hero w-4/5 mx-auto py-10">
                <div className="hero-content flex-col lg:flex-row lg:gap-32">
                    <div>
                        <h1 className="text-5xl font-bold xl:w-3/6 leading-tight">One Step Closer To Your Dream Job</h1>
                        <p className="py-6 xl:w-3/4">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                        <Button btnText="Get Started"></Button>
                    </div>
                    <img src="../../../public/assets/images/user.png" className="max-w-sm rounded-lg" />
                </div>
            </div>
        </div>
    );
};

export default Banner;