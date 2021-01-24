import React from 'react';
import styled from 'styled-components';
import { Card } from 'antd';
import DevAvatar from '../../assets/img/dev.jpg'
import { LikeOutlined, UserAddOutlined, HeartOutlined } from '@ant-design/icons';
import { Tooltip, notification } from 'antd';

const key = 'updatable';


const CardProfile = () => {


    const openNotification = () => {
        notification.open({
            key,
            message: 'Notification Title',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            onClick: () => {
                console.log('Notification Clicked!');
            },
        });
    };
    return (
        <CardStyled
            style={{ width: 300 }}
            cover={
                <img
                    alt="example"
                    src={DevAvatar}
                />
            }
            actions={[
                <Tooltip placement="top" title="Curtir" arrowPointAtCenter>
                    <LikeOutlined onClick={openNotification} />
                 </Tooltip>,
                <Tooltip placement="top" title="Adicionar" arrowPointAtCenter>
                    <UserAddOutlined onClick={openNotification} />
                 </Tooltip>,
                <Tooltip placement="top" title="Favoritar" arrowPointAtCenter>
                    <HeartOutlined onClick={openNotification} />
                 </Tooltip>,
            ]}
        >
            <Title size="18">Kabir Moareb</Title>
            <Title size="12">Desenvolvedor</Title>
        </CardStyled>
    );
}

export default CardProfile



const CardStyled = styled(Card)`
  border: thin solid #e7e7e7;
  border-radius: 5px;
  overflow: hidden;
  `


const Title = styled.div`
font-size: ${props => props.size + 'px' || '12px'};
`
