import React from 'react';
import { Cat } from '../../store/cats/catsSlice';
import { Descriptions, Image, Tag } from 'antd';
import {Link} from "react-router-dom";
import {routes} from "../../types/routes";
import styles from './CatDetail.module.css';

interface CatDetailProps {
    cat: Cat;
}

const CatDetail: React.FC<CatDetailProps> = ({ cat }) => {
    return (
        <div className={styles['cat-detail-container']}>
            <div className={styles['cat-tags']}>
                {cat.tags && cat.tags.map((tag) => (
                    <Tag key={tag} color="purple">
                        {tag}
                    </Tag>
                ))}
            </div>
            <Image
                src={cat?.imageUrls[0] ?? ""}
                alt={cat.name}
                preview={false}
                className={styles['cat-image']}
            />
            <Descriptions
                bordered
                column={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2, xxl: 2 }}
                className={styles['cat-descriptions']}
            >
                <Descriptions.Item label="Вік">{cat.age} роки</Descriptions.Item>
                <Descriptions.Item label="Порода">{cat.breed}</Descriptions.Item>
                <Descriptions.Item label="Опис">{cat.description}</Descriptions.Item>
            </Descriptions>
            <Link to={`${routes.CAT_DETAILS.replace(':id', cat.id.toString())}`}>Нажміть для більш детальної інформації!</Link>
        </div>
    );
};

export default CatDetail;
