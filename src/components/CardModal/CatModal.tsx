import React from 'react';
import {Cat} from '../../store/cats/catsSlice';
import {Button, Modal} from "antd";
import CatDetail from "../CardDetail/CatDetail";

interface CatModalProps {
    cat: Cat;
    onClose: () => void;
}

const CatModal: React.FC<CatModalProps> = ({cat, onClose}) => {
    return (
        <Modal
            title={cat.name}
            visible={true}
            onCancel={onClose}
            footer={[
                <Button key="back" onClick={onClose}>
                    Закрити
                </Button>,
            ]}
        >
            <CatDetail cat={cat}/>
        </Modal>
    );
};

export default CatModal;
