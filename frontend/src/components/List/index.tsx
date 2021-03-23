import React from 'react'
import { Table } from 'antd'
import { Out, Loss, Delete, ButtonName } from './styles'
import { remove } from '../../services'

interface Props {
  data: [];
  setData: Function;
}

const List: React.FC<Props> = ({ data, setData }) => {
  
  const columns = [
    {
      title: 'Moeda',
      dataIndex: 'currency',
      key: 'currency',
    },
    {
      title: 'Código Moeda',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Preço Entrada',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Valor Entrada',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: <Out>Ganho %</Out>,
      dataIndex: 'gain',
      key: 'gain',
    },
    {
      title: <Out>Venda %</Out>,
      dataIndex: 'sell',
      key: 'sell',
    },
    {
      title: <Out>Saída</Out>,
      dataIndex: 'out',
      key: 'out',
    },
    {
      title: <Loss>Loss %</Loss>,
      dataIndex: 'loss',
      key: 'loss',
    },
    {
      title: <Loss>Stop</Loss>,
      dataIndex: 'stop',
      key: 'stop',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: any) => (       
        <Delete onClick={() => remove(record._id, setData)}>
          <ButtonName>Remover</ButtonName>
        </Delete>
      ),
    }
  ]

  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default List