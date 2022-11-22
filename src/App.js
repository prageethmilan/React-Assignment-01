import Layout from "./components/Layout/Layout";
import {Navigate, Route, Routes} from 'react-router-dom'
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";
import {useContext} from "react";
import NotFound from "./pages/NotFound";
import EditProfile from "./components/Profile/EditProfile";

function App() {

    const authCtx = useContext(AuthContext);

    return (
        <Layout>
            <Routes>
                {!authCtx.isLoggedIn && <Route path={'/'} element={<WelcomePage/>}/>}
                {authCtx.isLoggedIn && <Route path={'/'} element={<Navigate replace to={'/products'}/>}/>}
                {!authCtx.isLoggedIn && <Route path={'/auth'} element={<AuthPage/>}/>}
                {authCtx.isLoggedIn && <Route path={'/auth'} element={<Navigate replace to={'/products'}/>}/>}
                {authCtx.isLoggedIn && <Route path={'/products'} element={<HomePage/>}/>}
                {!authCtx.isLoggedIn && <Route path={'/products'} element={<Navigate replace to={'/auth'}/>}/>}
                {authCtx.isLoggedIn && <Route path={'/profile'} element={<EditProfile/>}/>}
                {!authCtx.isLoggedIn && <Route path={'/profile'} element={<Navigate replace to={'/auth'}/>}/>}
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
