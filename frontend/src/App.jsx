import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Comic from "./Pages/Comic/Comic";
import Reading from "./Pages/Reading/Reading";
import CategoryComic from "./Pages/CategoryComic/CategoryComic";
import CategoryList from "./Pages/CategoryList/CategoryList";

function App() {
  return (
    <div className="w-full mx-auto bg-[#231B27]">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comic" element={<Comic />}>
            <Route path=":comicId" element={<Comic />}></Route>
          </Route>
          <Route path="/reading" element={<Reading />}>
            <Route path=":comicSlug" element={<Reading />}>
              <Route path=":chapterId" element={<Reading />}></Route>
            </Route>
          </Route>
          <Route path="/category" element={<CategoryComic />} />
          <Route path="/allcategory" element={<CategoryList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
