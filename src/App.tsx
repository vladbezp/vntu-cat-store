import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import Home from './pages/Home/Home';
import CatDetailsPage from './pages/Details/CatDetailsPage';
import ContactPage from './pages/Contact/ContactPage';
import Navigation from "./components/Navigation/Navigation";
import {routes} from "./types/routes";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavigation = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Router>
            <Layout style={{ minHeight: '100vh' }}>
                <Header style={{ backgroundColor: '#e6e6ff', padding: '0 50px', display: 'flex', alignItems: 'center' }}>
                    <h2 style={{ color: '#3f3f7a', margin: 0 }}>Cats Store</h2>
                </Header>
                <Layout>
                    <Sider collapsible collapsed={collapsed} onCollapse={toggleNavigation} theme={"light"} className="mobile-sider">
                        <Navigation collapsed={collapsed} />
                    </Sider>
                    <Content style={{ padding: '50px', backgroundColor: 'white', overflow: 'auto' }}>
                        <Routes>
                            <Route path={`${routes.HOME}`} element={<Home />} />
                            <Route path={`${routes.CAT_DETAILS}`} element={<CatDetailsPage />} />
                            <Route path={`${routes.CONTACT}`} element={<ContactPage />} />
                        </Routes>
                    </Content>
                </Layout>
            </Layout>
        </Router>
    );
};

export default App;
