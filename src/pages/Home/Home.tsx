import React from 'react';
import { useSelector } from 'react-redux';
import {RootState} from "../../store/rootReducer";
import Card from "../../components/Card/Card";
import styles from './Home.module.css';

const Home: React.FC = () => {
    const cats = useSelector((state: RootState) => state.cats.cats);

    return (
        <div className={styles.cardContainer}>
            {cats.length > 0 && cats.map((cat) => (
                <Card key={cat.id} cat={cat} />
            ))}
        </div>
    );
};

export default Home;
