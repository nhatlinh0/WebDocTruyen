import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
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
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const GuestGuard = ({ children }) => {
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // Nếu đã đăng nhập, chuyển hướng về trang chủ
  if (userId && token) {
    return <Navigate to="/" replace />;
  }

  // Nếu chưa đăng nhập, hiển thị nội dung của route
  return children;
};

function App() {
  return (
    <div className="w-full mx-auto bg-[#231B27]">
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
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
            <Route path="/profile" element={<User />}>
              <Route path=":menu" element={<User />}></Route>
            </Route>
            <Route path="/search" element={<SearchResults />} />
          </Route>

          <Route
            path="/login"
            element={
              <GuestGuard>
                <Login />
              </GuestGuard>
            }
          />
          <Route
            path="/register"
            element={
              <GuestGuard>
                <Register />
              </GuestGuard>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
