
import TableProduct from "../../components/UI/TableProduct";
import { region, products } from "../../service/db";
import "./style.scss"

import { Table } from 'flowbite-react';

const index = () => {

    console.log(region)
    return (
        <section>
            <div className="mx-auto px-5">
                <div className="flex flex-col py-5">
                    <h1 className="text-center mb-5 font-['InterSemiBold'] text-[20px]">Welcome to The Food Warehouse!</h1>
                    <div className="flex gap-x-2">
                        <aside className="w-[300px]  p-5 rounded-md border-dashed border">
                            <ul className="flex flex-col  gap-y-1">
                                {
                                    region?.map((item) => (
                                        <li key={item?.id} className="p-1 border rounded-md text-[15px] hover:bg-green-600 hover:text-white cursor-pointer duration-150 font-['InterMedium']">{item?.name}</li>
                                    ))
                                }
                            </ul>

                        </aside>
                        <div className="grow p-5 rounded-md border-dashed border">
                            <Table>
                                <Table.Head>
                                    <Table.HeadCell>
                                        №
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Product Image
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Name
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Category
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Price
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Count
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Availability
                                    </Table.HeadCell>
                                    <Table.HeadCell>
                                        Action
                                    </Table.HeadCell>

                                </Table.Head>
                          

                            {
                                products?.map((item, index) => {
                                    return <TableProduct key={item?.id} state={item} number={index} />
                                })
                            }

                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;