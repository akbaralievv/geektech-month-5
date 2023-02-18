import { BrowserRouter, Routes,Route } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import NavBar from "./components/navBar/NavBar";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import { LoginPage } from "./pages/loginPage/LoginPage";
import Layout from "./components/hoc/Layout";
import NewPage from "./pages/newPage/NewPage";
import UsersPage from "./pages/usersPage/UsersPage";
import UserMoreInfo from "./components/userMorInfo/UserMoreInfo";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
            <Route index element={<MainPage/>} />
            <Route path="about" element={<AboutPage/>} />
            <Route path="portfolio" element={<PortfolioPage/>}/>
            <Route path="newpage" element={<NewPage/>}/>
            <Route path="/users" element={<UsersPage/>}></Route>
            <Route path="/users/:id" element={<UserMoreInfo/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
      </Route>

      <Route path="login" element={<LoginPage></LoginPage>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
