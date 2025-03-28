import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";
import Comic from "./Pages/Comic/Comic";
import Reading from "./Pages/Reading/Reading";
import CategoryComic from "./Pages/CategoryComic/CategoryComic";
import CategoryList from "./Pages/CategoryList/CategoryList";
import NewestComic from "./Pages/NewestComic/NewestComic";
import PopularComic from "./Pages/PopularComic/PopularComic";
import User from "./Pages/User/User";
import SearchResults from "./Pages/SearchResults/SearchResults";

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
              {/* <Route path=":chapterId" element={<Reading />}></Route> */}
            </Route>
          </Route>
          <Route path="/categories" element={<CategoryComic />}>
            <Route path=":categoryId" element={<CategoryComic />}></Route>
          </Route>
          <Route path="/allcategory" element={<CategoryList />} />
          <Route path="/newest" element={<NewestComic />} />
          <Route path="/popular" element={<PopularComic />} />
          <Route path="/profile" element={<User />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
