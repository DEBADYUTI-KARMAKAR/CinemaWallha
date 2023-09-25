import { useState } from "react";
import Pagination from "./Pagination";

function Frvourites() {
  let [currentGenre, setCurrentGenre] = useState('All Genres');


  return (
    <div>
      <div className="flex mt-4 p-2 justify-center gap-5">
        <button className={ currentGenre=='All Genres' ?
        'm-2 text-lg bg-blue-950 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl':
        'm-2 text-lg  bg-blue-400 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-xl'
        }>All Genres </button>
        <button className={ currentGenre=='Action' ?
        'm-2 text-lg bg-blue-950 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-xl':
        'm-2 text-lg  bg-blue-400 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-xl'
        }>Action </button>
      </div>
      <div className="flex mt-4 p-2 justify-center gap-5">
        <input type="text" placeholder="search"
        className="border-2 p-2 rounded-xl text-center"
        ></input>
        <input type="number" value={1}
        className="border-2 p-2 rounded-xl text-center"
        ></input>
      </div>
      <DataTable />
      <Pagination />
    </div>
  );

  function DataTable(){
    return(
      // <!-- component -->
<div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
  <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
    <thead className="bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
        <div className='flex'>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" className="mr-2 cursor-pointer"></img>
                  <div>Popularity</div>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" className="ml-2 mr-2 cursor-pointer"></img>
                </div>
        </th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">
        <div className='flex'>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-up-arrows-those-icons-lineal-those-icons-3.png" className="mr-2 cursor-pointer"></img>
                  <div>Rating</div>
                  <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-down-arrows-those-icons-lineal-those-icons-4.png" className="ml-2 mr-2 cursor-pointer"></img>
                </div>
        </th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Genres</th>
        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Remove</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
      <tr className="hover:bg-gray-50">
        <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
            <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
          </div>
          <div className="text-sm">
            <div className="font-medium text-gray-700">Steven Jobs</div>
            <div className="text-gray-400">jobs@sailboatui.com</div>
          </div>
        </th>
        <td className="px-6 py-4">
          5
        </td>
        <td className="px-6 py-4">8</td>
        <td className="px-6 py-4">
          <div className="flex gap-2">
            <span
              className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
            >
              Action
            </span>
            
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex justify-end gap-4">
          <span
              className="inline-flex  items-center gap-1 rounded-full  px-2 py-1 text-xs font-semibold text-red-600"
            >
             Delete
            </span>
          </div>
        </td>
      </tr>
      
    </tbody>
  </table>
</div>
    );
  }
}



export default Frvourites;
