import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {RootState} from "../../store/rootReducer";
import {setCats} from "../../store/cats/catsSlice";
import Card from "../../components/Card/Card";
import {fetchCats} from "../../store/cats/catsAPI";
import styles from './Home.module.css';

const Home: React.FC = () => {
    const dispatch = useDispatch();
    const cats = useSelector((state: RootState) => state.cats.cats);

    useEffect(() => {
        const fetchCatsAsync = async () => {
            const catsData = await fetchCats();
            dispatch(setCats(catsData));
        };

        fetchCatsAsync();
    }, [dispatch]);

    return (
        <div className={styles.cardContainer}>
            {cats.length > 0 && cats.map((cat) => (
                <Card key={cat.id} cat={cat} />
            ))}
        </div>
    );
};

export default Home;
