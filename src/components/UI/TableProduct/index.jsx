



import { Table } from 'flowbite-react';

const index = ({state:{img, name, category, price, status, count}, number}) => {
  return (
   
   
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>
            {number+1}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
             <img src={img} alt={name}  className="w-[70px] h-[70px] object-contain"/>
          </Table.Cell>
          <Table.Cell>
            {name}
          </Table.Cell>
          <Table.Cell>
            {category}
          </Table.Cell>
          <Table.Cell>
            {price} сум
          </Table.Cell>
          <Table.Cell>
            {count}
          </Table.Cell>
          <Table.Cell>
            <div className={`${count > 0 ? "bg-blue-600" : "bg-red-600 line-through"} text-white text-center p-2 rounded-md`}>
              {status}
            </div>
          </Table.Cell>
          <Table.Cell>
           <button   className={`${count > 0 ? "bg-green-600 text-white p-2 rounded-md hover:bg-transparent hover:text-green-600 border hover:border-green-600": "bg-gray-600 text-white p-2 rounded-md cursor-not-allowed"}`}> Add </button>
         
         </Table.Cell>
        </Table.Row>
  
      </Table.Body>
  
  )
}


export default index;

