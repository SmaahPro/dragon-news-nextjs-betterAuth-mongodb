const AboutUs = () => {
    return (
        <div className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-14">
                <h1 className="text-4xl md:text-5xl font-bold text-red-600">
                    About Dragon News
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Journalism Without Fear or Favour
                </p>
            </div>

            <div className="bg-base-200 rounded-2xl p-8 shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                <p className="text-gray-700 leading-8">
                    Dragon News is a modern digital news platform dedicated to bringing
                    readers accurate, fast, and trustworthy news from around the world.
                    Our mission is to keep people informed with facts, balanced reporting,
                    and meaningful stories that matter every day.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-base-200 rounded-2xl p-8 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 leading-8">
                        To deliver truthful journalism, fight misinformation, and create a
                        platform where every voice matters.
                    </p>
                </div>

                <div className="bg-base-200 rounded-2xl p-8 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4 text-green-600">
                        Our Vision
                    </h2>
                    <p className="text-gray-700 leading-8">
                        To become one of the most trusted digital news sources in the world,
                        connecting communities through reliable information.
                    </p>
                </div>
            </div>

            <div className="bg-base-200 rounded-2xl p-8 shadow-md mb-10">
                <h2 className="text-2xl font-semibold mb-6">Why Choose Dragon News?</h2>

                <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <h3 className="font-bold text-lg mb-2">Fast Updates</h3>
                        <p className="text-gray-600">
                            Get breaking news instantly as events happen.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Trusted Sources</h3>
                        <p className="text-gray-600">
                            Every story is checked and verified before publishing.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg mb-2">Global Coverage</h3>
                        <p className="text-gray-600">
                            News from politics, sports, business, technology and more.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-14">
                <p className="text-gray-500">
                    © 2026 Dragon News. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;