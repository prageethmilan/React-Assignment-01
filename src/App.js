import Layout from "./components/Layout/Layout";
import { Routes,Route } from 'react-router-dom'
import WelcomePage from "./pages/WelcomePage";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";

function App() {

    return (
        <Layout>
            <Routes>
                <Route path={'/'} element={<WelcomePage/>}/>
                <Route path={'/auth'} element={<AuthPage/>}/>
                <Route path={'/products'} element={<HomePage/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
