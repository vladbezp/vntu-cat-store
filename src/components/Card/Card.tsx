import React, {useState} from 'react';
import {Card as AntCard} from 'antd';
import CatModal from '../CardModal/CatModal';
import {Cat} from '../../store/cats/catsSlice';
import styles from './Card.module.css';

interface Props {
    cat: Cat;
}

const Card: React.FC<Props> = ({cat}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <AntCard
                hoverable
                className={styles.card}
                cover={<img alt={cat.name} src={cat?.imageUrls.find(el => el) ?? ""} className={styles["card-image"]}/>}
                onClick={showModal}
            >
                <AntCard.Meta title={cat.name}/>
            </AntCard>
            {isModalVisible && <CatModal cat={cat} onClose={closeModal}/>}
        </>
    );
};

export default Card;
