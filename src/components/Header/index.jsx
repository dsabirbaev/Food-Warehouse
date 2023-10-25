
import {NavLink} from "react-router-dom"
import "./style.scss";

const index = () => {
    return (
        <header className="bg-slate-400">
           <div className="mx-auto px-5">
                <nav className="flex items-center justify-between h-[60px]">
                    <NavLink to="/">W.H</NavLink>
                    <NavLink to="/admin" className="uppercase">Admin dashboard</NavLink>
                </nav>
            </div>
        </header>
    );
};

export default index;