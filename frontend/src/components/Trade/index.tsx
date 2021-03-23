import React, { useState, useEffect } from 'react'
import { Form, Input, InputNumber, Button } from 'antd'
import { Wrapper, TableContainer, PartialsContainer } from './styles'
import List from '../List'
import { save, list } from '../../services'
import { Order } from '../../interfaces'
import { onFinish } from './utils'

const Trade: React.FC = () => {
  const [formData, setFormData] = useState<Order>()
  const [data, setData] = useState<[]>([])

  const [form] = Form.useForm()

  useEffect(() => {
    list(setData)
  }, [])

  useEffect(() => {
    form.resetFields();
    formData && save(formData, setData)
  }, [formData])

  return (
    <Wrapper>
      <Form form={form} name="trading-form" onFinish={values => onFinish({setFormData, values})} autoComplete="off">
        <Form.Item name="currency" rules={[{ required: true, message: 'Moeda é obrigatório'}]}>
          <Input placeholder="Moeda" />
        </Form.Item>

        <Form.Item name="code" rules={[{ required: true, message: 'Código Moeda é obrigatório'}]}>
          <Input placeholder="Código Moeda" />
        </Form.Item>

        <Form.Item name="quantity" label="Quantidade" rules={[{ required: true, message: 'Quantidade é obrigatório'}]}>
          <InputNumber min="0" max="9999999999" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="price" label="Preço entrada" rules={[{ required: true, message: 'Preço entrada é obrigatório'}]}>
          <Input min="0" step="0.00001" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="value" label="Valor entrada" rules={[{ required: true, message: 'Valor entrada é obrigatório'}]}>
          <Input min="0" step="0.00001" style={{ width: '100%' }} />
        </Form.Item>

        <PartialsContainer>
          <Form.Item name="gain1" label="Ganho 1" rules={[{ required: true, message: 'Ganho 1 é obrigatório'}]}>
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="sell1" label="Venda 1" rules={[{ required: true, message: 'Venda 1 é obrigatório'}]}>
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
        </PartialsContainer>

        <PartialsContainer>
          <Form.Item name="gain2" label="Ganho 2">
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="sell2" label="Venda 2">
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
        </PartialsContainer>

        <PartialsContainer>
          <Form.Item name="gain3" label="Ganho 3">
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="sell3" label="Venda 3">
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
        </PartialsContainer>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>

      <TableContainer>
        <List data={data} setData={setData} />
      </TableContainer>
    </Wrapper>
  )
}

export default Trade