import Layout from "./components/Layout/Layout";
import {useSelector} from "react-redux";
import AddItemForm from "./components/Items/AddItemForm";
import AddCustomerForm from "./components/Customers/AddCustomerForm";
import CustomersPage from "./pages/CustomersPage";

function App() {

    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (
        <Layout>
            {/*<Routes>*/}
            {/*    {!isLoggedIn ? <Route path={'/'} element={<WelcomePage/>}/> :*/}
            {/*        <Route path={'/'} element={<Navigate replace to={'/products'}/>}/>}*/}
            {/*    {!isLoggedIn ? <Route path={'/auth'} element={<AuthPage/>}/> :*/}
            {/*        <Route path={'/auth'} element={<Navigate replace to={'/products'}/>}/>}*/}
            {/*    {!isLoggedIn ? <Route path={'/products'} element={<Navigate replace to={'/auth'}/>}/> :*/}
            {/*        <Route path={'/products'} element={<HomePage/>}/>}*/}
            {/*    {!isLoggedIn ? <Route path={'/profile'} element={<Navigate replace to={'/auth'}/>}/> :*/}
            {/*        <Route path={'/profile'} element={<EditProfile/>}/>}*/}
            {/*    {!isLoggedIn ? <Route path={'/products/:productId'} element={<Navigate replace to={'/auth'}/>}/> :*/}
            {/*        <Route path={'/products/:productId'} element={<ProductDetail/>}/>}*/}
            {/*    <Route path={'*'} element={<NotFound/>}/>*/}
            {/*</Routes>*/}
            <CustomersPage/>
        </Layout>
    );
}

export default App;
