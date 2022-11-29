import Layout from "./components/Layout/Layout";
import {useSelector} from "react-redux";
import {Routes,Route,Navigate} from 'react-router-dom'
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import EditProfile from "./components/Profile/EditProfile";
import ProductDetail from "./components/Products/ProductDetail";
import NotFound from "./pages/NotFound";
import AddItemForm from "./components/Items/AddItemForm";
import CustomersPage from "./pages/CustomersPage";
import OrderPage from "./pages/OrderPage";

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
                {!isLoggedIn ? <Route path={'/items/:status'} element={<Navigate replace to={'/auth'}/>}/> :
                    <Route path={'/items/:status'} element={<AddItemForm/>}/>}
                {!isLoggedIn ? <Route path={'/customers'} element={<Navigate replace to={'/auth'}/>}/> :
                    <Route path={'/customers'} element={<CustomersPage/>}/>}
                {!isLoggedIn ? <Route path={'/orders'} element={<Navigate replace to={'/auth'}/>}/> :
                    <Route path={'/orders'} element={<OrderPage/>}/>}
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>

        </Layout>
    );
}

export default App;
