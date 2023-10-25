

import { region } from "../../service/db";
import "./style.scss"

const index = () => {

    console.log(region)
    return (
        <section>
            <div className="mx-auto px-5">
                <div className="flex flex-col py-5">
                    <h1 className="text-center mb-5">Welcome to The Food Warehouse!</h1>
                    <div className="flex gap-x-2">
                        <aside className="w-[300px]  p-5 rounded-md border-dashed border">
                            <ul className="flex flex-col  gap-y-1">
                                {
                                    region?.map((item) => (
                                        <li className="p-1 border rounded-md">{item?.name}</li>
                                    ))
                                }
                            </ul>

                        </aside>
                        <div className="grow p-5 rounded-md border-dashed border">
                            main
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;