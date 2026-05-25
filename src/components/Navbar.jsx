export default function Navbar(){

    return(
        <>
        <nav className="flex justify-between p-2 w-full fixed bg-transparent">
            <div className="maintitle text-2xl font-bold text-amber-50 max-sm:text-4xl">
                EV-olution
            </div>
            <div className="buttons flex gap-4 max-sm:hidden">
                <button className="text-white font-bold p-1.5 cursor-pointer rounded-xl">Home</button>
                <button className="text-white font-bold p-1.5 cursor-pointer rounded-xl">Explore</button>
                <button className="text-white font-bold p-1.5 cursor-pointer rounded-xl">About</button>
                <button className="text-black bg-white p-1.5 cursor-pointer rounded-3xl">Contact</button>
            </div>
        </nav>
        </>
    )

}