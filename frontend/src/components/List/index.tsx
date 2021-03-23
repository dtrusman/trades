import React from 'react'
import { Table } from 'antd'
import { Out, Delete, ButtonName } from './styles'
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
      title: 'Ganho 1',
      dataIndex: 'gain1',
      key: 'gain1',
    },
    {
      title: 'Venda 1',
      dataIndex: 'sell1',
      key: 'sell1',
    },
    {
      title: <Out>Saída 1</Out>,
      dataIndex: 'out1',
      key: 'out1',
    },
    {
      title: 'Ganho 2',
      dataIndex: 'gain2',
      key: 'gain2',
    },
    {
      title: 'Venda 2',
      dataIndex: 'sell2',
      key: 'sell2',
    },
    {
      title: <Out>Saída 2</Out>,
      dataIndex: 'out2',
      key: 'out2',
    },
    {
      title: 'Ganho 3',
      dataIndex: 'gain3',
      key: 'gain3',
    },
    {
      title: 'Venda 3',
      dataIndex: 'sell3',
      key: 'sell3',
    },
    {
      title: <Out>Saída 3</Out>,
      dataIndex: 'out3',
      key: 'out3',
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