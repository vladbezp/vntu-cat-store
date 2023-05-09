import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from "../../store/rootReducer";
import { Cat } from "../../store/cats/catsSlice";
import { setActiveKey } from '../../store/navigation/navigationSlice';
import {routes} from "../../types/routes";
import "./Navigation.css"

interface NavigationProps {
    collapsed: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ collapsed }) => {
    const cats = useSelector((state: RootState) => state.cats.cats);
    const activeKey = useSelector((state: RootState) => state.navigation.activeKey);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;

        if (path === routes.HOME) {
            dispatch(setActiveKey('1'));
        } else if (path.startsWith(routes.CAT_DETAILS.replace(':id', ''))) {
            const catId = path.split('/')[2];
            dispatch(setActiveKey(`cat-${catId}`));
        } else if (path === routes.CONTACT) {
            dispatch(setActiveKey('4'));
        }
    }, [location, dispatch]);

    return (
        <Menu
            mode="inline"
            selectedKeys={[activeKey]}
            style={{ height: '100%', borderRight: 0, display: collapsed ? 'none' : 'block' }}
        >
            <Menu.Item key="1">
                <Link to="/cat-store/">Домівка</Link>
            </Menu.Item>
            <Menu.SubMenu key="sub1" title="Котики">
                {cats.map((cat: Cat) => (
                    <Menu.Item key={`cat-${cat.id}`}>
                        <Link to={`${routes.CAT_DETAILS.replace(':catId', cat.id.toString())}`}>{cat.name}</Link>
                    </Menu.Item>
                ))}
            </Menu.SubMenu>
            <Menu.Item key="4">
                <Link to={routes.CONTACT}>Контакти</Link>
            </Menu.Item>
        </Menu>
    );
};

export default Navigation;
