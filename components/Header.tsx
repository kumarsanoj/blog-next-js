import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between p-5 ">
            <div className="flex">
                <Link href={'/'}>
                    <img className="w-44 object-contain cursor-pointer" src={"https://links.papareact.com/yvf"} alt="" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>
            <div className="flex items-center space-x-5 text-green-600">
                <div>Sign In</div>
                <div className="border border-green-600 px-4 py-1 rounded-full">Get Started</div>
            </div>
        </header>
     );
}
 
export default Header;
