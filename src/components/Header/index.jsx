
import {NavLink} from "react-router-dom"
import "./style.scss";

const index = () => {
    return (
        <header className="bg-slate-200">
           <div className="mx-auto px-5">
                <nav className="flex items-center justify-between h-[60px]">
                    <NavLink to="/" className="text-2xl font-['InterBold'] text-green-600">F.W</NavLink>
                    <NavLink to="/admin" className="uppercase font-['InterMedium'] border border-green-400 p-2 rounded-lg bg-green-600 text-white">Admin dashboard</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default index;