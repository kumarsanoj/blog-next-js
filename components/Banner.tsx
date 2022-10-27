const Banner = () => {
    return (
        <div className="flex justify-between p-10 lg:py-5 bg-yellow-400 border border-black items-center">
            <div className="px-10 space-y-5">   
                <h1 className="text-6xl font-serif"><span className="underline decoration-black decoration-4">Medium</span> is place to write, read and connect</h1>
                <h2>Its easy to post and commenton any topic </h2>
            </div>
            <div
                className="text-8xl hidden md:inline-flex font-serif" 
                >
                M
            </div>
        </div>
     );
}
 
export default Banner;
