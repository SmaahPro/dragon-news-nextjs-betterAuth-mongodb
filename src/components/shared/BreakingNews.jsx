import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex justify-between gap-4 items-center bg-gray-200 py-4 px-5 container mx-auto rounded-3xl">
            <button className="btn bg-red-700 text-white">Latest News</button>
            <Marquee pauseOnHover={true}>
                HELLO GUYS HOW ARE YOU. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Fugit iste et itaque, velit eligendi aliquid labore at rem deserunt aperiam.
            </Marquee>
        </div>
    );
};

export default BreakingNews;