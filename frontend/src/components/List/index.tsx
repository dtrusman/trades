import React from 'react'
import { Table } from 'antd'
import { Out, Loss, Delete, ButtonName } from './styles'
import { remove } from '../../services'
import  { AlignType } from '../../interfaces'

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
      align: 'center' as AlignType
    },
    {
      title: 'Código Moeda',
      dataIndex: 'code',
      key: 'code',
      align: 'center' as AlignType
    },
    {
      title: 'Quantidade',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center' as AlignType
    },
    {
      title: 'Preço Entrada',
      dataIndex: 'price',
      key: 'price',
      align: 'center' as AlignType
    },
    {
      title: 'Valor Entrada',
      dataIndex: 'value',
      key: 'value',
      align: 'center' as AlignType
    },
    {
      title: <Out>Ganho %</Out>,
      dataIndex: 'gain',
      key: 'gain',
      align: 'center' as AlignType
    },
    {
      title: <Out>Venda %</Out>,
      dataIndex: 'sell',
      key: 'sell',
      align: 'center' as AlignType
    },
    {
      title: <Out>Saída</Out>,
      dataIndex: 'out',
      key: 'out',
      align: 'center' as AlignType
    },
    {
      title: <Loss>Loss %</Loss>,
      dataIndex: 'loss',
      key: 'loss',
      align: 'center' as AlignType
    },
    {
      title: <Loss>Stop</Loss>,
      dataIndex: 'stop',
      key: 'stop',
      align: 'center' as AlignType
    },
    {
      title: 'Action',
      key: 'action',
      align: 'center' as AlignType,
      render: (text: any, record: any) => (       
        <Delete onClick={() => remove(record._id, setData)}>
          <ButtonName>Remover</ButtonName>
        </Delete>
      ),
    }
  ]

  return (
    <Table columns={columns} dataSource={data} size="middle" bordered={true} />
  )
}

export default List