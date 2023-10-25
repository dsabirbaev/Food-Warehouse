
import TableAdmin from "../../components/UI/TableAdmin";
import { products } from "../../service/db";
import { Table } from 'flowbite-react';
const index = () => {
    return (
        <section>
            <div className='mx-auto px-5'>
                <div className="py-5">
                    <div className="border-dashed border p-5 rounded-md mb-5">
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
                                    return <TableAdmin key={item?.id} state={item} number={index} />
                                })
                            }

                            </Table>
                    </div>

                    <div className=" flex justify-end">
                        <button className="text-lg text-white bg-indigo-600 rounded-md p-4 w-fit hover:shadow-2xl duration-200 hover:bg-indigo-400">Add product</button>
                    </div>
                </div>
            </div>        
        </section>
    );
};

export default index;