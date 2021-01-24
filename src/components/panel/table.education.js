import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { BiTrash } from 'react-icons/bi'
import styled from 'styled-components';
import { RemoveEducation } from '../../store/User/user.action';

const columns = (handleRemove) => [
    {
        title: 'Area de Estudo',
        dataIndex: 'fieldofstudy',
        key: `fieldofstudy`,

    },
    {
        title: 'Escola',
        dataIndex: 'school',
        key: 'school',
    },
    {
        title: 'Grau',
        dataIndex: 'degree',
        key: 'degree'
    },
    {
        title: 'Inicio',
        dataIndex: 'from',
        key: 'from',
        render: (date) => new Date(date).toLocaleDateString()
    },
    {
        title: 'Fim',
        dataIndex: 'to',
        key: 'to',
        render: (date) => new Date(date).toLocaleDateString()
    },
    {
        title: 'Acão',
        dataIndex: 'action',
        key: 'action',
        render: (k, v, i) => <ActionTrash key={i} onClick={() => handleRemove(v)}><BiTrash /></ActionTrash>
    },
];

export default function TableEducation() {

    const dispatch = useDispatch()
    const dataSource = useSelector(state => state.user.profile.education)
    const prepareTable = dataSource && dataSource.map(it => ({ ...it, key: it._id }))

    const handleRemove = (item) => {

        dispatch(RemoveEducation(item))

    }



    return (
        <Table pagination={false} dataSource={prepareTable} columns={columns(handleRemove)} />
    )
}


const ActionTrash = styled.div`
    font-size: 16px;
    color: red

`