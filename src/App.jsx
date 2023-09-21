import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Pagination from "./components/Pagination";
import Fevourites from "./components/Fevourites";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
                
              </>
            }
          ></Route>
          <Route
            path="/fevourites"
            element={
              <>
                <Fevourites />
              </>
            }
          ></Route>

          <Route
            path="*"
            element={
              <>
                <NotFound />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
