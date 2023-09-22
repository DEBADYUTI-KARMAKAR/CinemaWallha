import Pagination from "./Pagination";

function Frvourites() {
  return (
    <div>
      <div className="flex mt-4 p-2 justify-center gap-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
          All Genres
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
          All Genres
        </button>
      </div>
      <div className="flex mt-4 p-2 justify-center gap-5">
        <input type="text" placeholder="search"
        className="border-2 p-2 rounded-xl text-center"
        ></input>
        <input type="number" value={1}
        className="border-2 p-2 rounded-xl text-center"
        ></input>
      </div>
      <h2>Searching</h2>
      <h2>Data Table</h2>
      <Pagination></Pagination>
    </div>
  );
}

export default Frvourites;
