import Layout from "./components/Layout/Layout";
import {Navigate, Route, Routes} from 'react-router-dom'
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import {useSelector} from "react-redux";
import NotFound from "./pages/NotFound";
import EditProfile from "./components/Profile/EditProfile";
import ProductDetail from "./components/Products/ProductDetail";

function App() {

    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <Layout>
            <Routes>
                {!isLoggedIn ? <Route path={'/'} element={<WelcomePage/>}/> :
                    <Route path={'/'} element={<Navigate replace to={'/products'}/>}/>}
                {!isLoggedIn ? <Route path={'/auth'} element={<AuthPage/>}/> :
                    <Route path={'/auth'} element={<Navigate replace to={'/products'}/>}/>}
                {!isLoggedIn ? <Route path={'/products'} element={<Navigate replace to={'/auth'}/>}/> :
                    <Route path={'/products'} element={<HomePage/>}/>}
                {!isLoggedIn ? <Route path={'/profile'} element={<Navigate replace to={'/auth'}/>}/> :
                    <Route path={'/profile'} element={<EditProfile/>}/>}
                {!isLoggedIn ? <Route path={'/products/:productId'} element={<Navigate replace to={'/auth'}/>}/> :
                    <Route path={'/products/:productId'} element={<ProductDetail/>}/>}
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
