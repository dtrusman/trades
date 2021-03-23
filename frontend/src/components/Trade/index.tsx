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
  const [price, setPrice] = useState('')
  const [gain1, setGain1] = useState('')
  const [gain2, setGain2] = useState('')
  const [gain3, setGain3] = useState('')
  
  const [form] = Form.useForm()

  useEffect(() => {
    list(setData)
  }, [])

  useEffect(() => {
    form.resetFields();
    formData && save(formData, setData)
  }, [formData])

  useEffect(() => {
    const out1 = parseFloat(price) + parseFloat(price) * (parseInt(gain1) / 100);
    const out2 = parseFloat(price) + parseFloat(price) * (parseInt(gain2) / 100);
    const out3 = parseFloat(price) + parseFloat(price) * (parseInt(gain3) / 100);
    out1 && form.setFieldsValue({ out1 })
    out2 && form.setFieldsValue({ out2 })
    out3 && form.setFieldsValue({ out3 })
  }, [gain1, gain2, gain3])

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
          <Input min="0" step="0.00001" style={{ width: '100%' }} onChange={(value) => setPrice(value.target.value)} />
        </Form.Item>

        <Form.Item name="value" label="Valor entrada" rules={[{ required: true, message: 'Valor entrada é obrigatório'}]}>
          <Input min="0" step="0.00001" style={{ width: '100%' }} />
        </Form.Item>

        <PartialsContainer>
          <Form.Item name="gain1" label="Ganho 1" rules={[{ required: true, message: 'Ganho 1 é obrigatório'}]}>
            <Input min="0" step="0.00001" style={{ width: '100%' }} onChange={(value) => setGain1(value.target.value)} />
          </Form.Item>
          <Form.Item name="sell1" label="Venda 1" rules={[{ required: true, message: 'Venda 1 é obrigatório'}]}>
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="out1" label="Saída 1" rules={[{ required: true, message: 'Saída 1 é obrigatório'}]}>
            <Input disabled={true} style={{ width: '100%' }} />
          </Form.Item>
        </PartialsContainer>

        <PartialsContainer>
          <Form.Item name="gain2" label="Ganho 2">
            <Input min="0" step="0.00001" style={{ width: '100%' }} onChange={(value) => setGain2(value.target.value)} />
          </Form.Item>
          <Form.Item name="sell2" label="Venda 2">
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="out2" label="Saída 2" rules={[{ required: true, message: 'Saída 2 é obrigatório'}]}>
            <Input disabled={true} style={{ width: '100%' }} />
          </Form.Item>
        </PartialsContainer>

        <PartialsContainer>
          <Form.Item name="gain3" label="Ganho 3">
            <Input min="0" step="0.00001" style={{ width: '100%' }} onChange={(value) => setGain3(value.target.value)} />
          </Form.Item>
          <Form.Item name="sell3" label="Venda 3">
            <Input min="0" step="0.00001" style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="out3" label="Saída 3" rules={[{ required: true, message: 'Saída 3 é obrigatório'}]}>
            <Input disabled={true} style={{ width: '100%' }} />
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