import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Row, Col, Image, Carousel, Tag, Divider } from 'antd';
import { RootState } from '../../store/rootReducer';

import './CatDetailsPage.css';

const CatDetailsPage: React.FC = () => {
    const { catId } = useParams<{ catId: string }>();
    const cat = useSelector((state: RootState) =>
        state.cats.cats.find((cat) => cat.id === catId)
    );

    if (!cat) {
        return <div>Кіт не знайдений.</div>;
    }

    return (
        <Row gutter={[16, 16]} className="cat-details-container">
            <Col xs={24} sm={24} md={12} lg={16} xl={18} className="cat-details">
                <div>
                    <h1 className="cat-details__name">
                        {cat.name}
                        {cat.tags.map((tag, index) => (
                            <Tag color="blue" className="cat-details__tag" key={index}>
                                {tag}
                            </Tag>
                        ))}
                    </h1>
                </div>
                <Carousel className="cat-details__carousel" autoplay={true} autoplaySpeed={6000}>
                    {cat?.imageUrls &&
                        cat?.imageUrls?.map((url, index) => {
                            if (url?.match(/(\.mp4$|\.webm$)/)) {
                                return <video key={index} src={url} controls className="cat-media" />;
                            } else {
                                return <Image key={index} src={url} alt={`${cat.name} ${index}`} className="cat-media" />;
                            }
                        })}
                </Carousel>
                <Divider className="cat-details__divider" />
                <div className="cat-details__description">
                    <h2 className="cat-details__subtitle">Опис:</h2>
                    <p>{cat.description}</p>
                </div>
                <div className="cat-details__age">
                    <h2 className="cat-details__subtitle">Вік:</h2>
                    <p>{cat.age} роки</p>
                </div>
                <div className="cat-details__breed">
                    <h2 className="cat-details__subtitle">Порода:</h2>
                    <p>{cat.breed}</p>
                </div>
            </Col>
        </Row>
    );
};

export default CatDetailsPage;
