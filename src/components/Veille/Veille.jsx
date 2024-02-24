import { Outlet } from "react-router-dom";

export default function Veille() {
    return(
        <div className="flex flex-col w-full h-full pt-10 md:pt-16 ">
            <div className="mx-auto mt-20">
                <div id="titre" className="text-2xl font-bold text-center font-victor">
                    <h2>Ma veille technologique</h2>
                </div>
            </div>
            <div className="w-11/12 px-1 py-4 mx-auto md:w-3/5">
                <Outlet />
            </div>
        </div>
    )
}