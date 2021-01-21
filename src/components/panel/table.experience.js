import { Table } from 'antd';
const dataSource = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Empresa',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Cargo',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Período',
        dataIndex: 'address',
        key: 'address',
    },
];

export default function TableExperience() {
    return (
        <Table pagination={false} dataSource={dataSource} columns={columns} />
    )
}
