const CareerPage = () => {
    return (
        <div className="max-w-6xl mx-auto px-6 py-16">
            <div className="text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-bold text-red-600">
                    Careers at Dragon News
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Join our team and help shape the future of digital journalism.
                </p>
            </div>

            <div className="bg-base-200 rounded-2xl p-8 shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-4">Why Work With Us?</h2>
                <p className="text-gray-700 leading-8">
                    Dragon News is built on truth, creativity, and innovation. We are
                    always looking for passionate people who want to make a difference in
                    media and storytelling. Whether you are a journalist, designer,
                    developer, or marketer — there is a place for you here.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="bg-base-200 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-xl font-bold mb-3">Flexible Work</h3>
                    <p className="text-gray-600">
                        Remote-friendly culture with flexible working hours.
                    </p>
                </div>

                <div className="bg-base-200 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
                    <p className="text-gray-600">
                        Learn new skills and grow your career with mentorship.
                    </p>
                </div>

                <div className="bg-base-200 rounded-2xl p-6 shadow-md text-center">
                    <h3 className="text-xl font-bold mb-3">Creative Team</h3>
                    <p className="text-gray-600">
                        Work with talented people who value ideas and teamwork.
                    </p>
                </div>
            </div>

            <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>

                <div className="space-y-5">
                    <div className="bg-base-200 rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-bold">News Reporter</h3>
                        <p className="text-gray-600 mt-2">
                            Cover breaking news, interviews, and feature stories.
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-bold">Frontend Developer</h3>
                        <p className="text-gray-600 mt-2">
                            Build fast and modern user experiences using React & Next.js.
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-2xl p-6 shadow-md">
                        <h3 className="text-xl font-bold">Social Media Manager</h3>
                        <p className="text-gray-600 mt-2">
                            Grow audience engagement across all social platforms.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-red-600 text-white rounded-2xl p-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Ready to Join Us?</h2>
                <p className="mb-6">
                    Send your resume and portfolio to careers@dragonnews.com
                </p>
                <button className="btn bg-white text-red-600 border-none hover:bg-gray-100">
                    Apply Now
                </button>
            </div>
        </div>
    );
};

export default CareerPage;