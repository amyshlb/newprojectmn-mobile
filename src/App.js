import "./assets/css/style.css";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import NewsCategoriesPage from "./pages/NewsCategoriesPage";
import NewsCategoryPage from "./pages/NewsCategoryPage";
import HomePage from "./pages/HomePage";
import NewsDetailPage from "./pages/NewsDetailPage";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<NewsDetailPage />} />
          <Route path="/categories" element={<NewsCategoriesPage />} />
          <Route path="/category/post/:id" element={<NewsCategoryPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;