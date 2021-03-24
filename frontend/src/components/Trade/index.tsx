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
  const [gain, setGain] = useState('')
  const [loss, setLoss] = useState('')
  
  
  const [form] = Form.useForm()

  useEffect(() => {
    list(setData)
  }, [])

  useEffect(() => {
    form.resetFields();
    formData && save(formData, setData)
  }, [formData])

  useEffect(() => {
    const out = parseFloat(price) + parseFloat(price) * (parseInt(gain) / 100);
    out && form.setFieldsValue({ out })
  }, [gain])

  useEffect(() => {
    const stop = parseFloat(price) - parseFloat(price) * (parseInt(loss) / 100);
    stop && form.setFieldsValue({ stop })
  }, [loss])

  return (
    <Wrapper>
      <Form labelCol={{ span: 3 }} wrapperCol={{ span: 22 }} form={form} name="trading-form" onFinish={values => onFinish({setFormData, values})} autoComplete="off">
        <Form.Item name="currency" label="Moeda" labelAlign="left" rules={[{ required: true, message: 'Moeda é obrigatório'}]}>
          <Input placeholder="Moeda" />
        </Form.Item>

        <Form.Item name="code" label="Código Moeda" labelAlign="left" rules={[{ required: true, message: 'Código Moeda é obrigatório'}]}>
          <Input placeholder="Código Moeda" />
        </Form.Item>

        <Form.Item name="quantity" label="Quantidade" labelAlign="left" rules={[{ required: true, message: 'Quantidade é obrigatório'}]}>
          <InputNumber min="0" max="9999999999" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item name="price" label="Preço entrada" labelAlign="left" rules={[{ required: true, message: 'Preço entrada é obrigatório'}]}>
          <Input min="0" step="0.00001" style={{ width: '100%' }} onChange={(value) => setPrice(value.target.value)} />
        </Form.Item>

        <Form.Item name="value" label="Valor entrada" labelAlign="left" rules={[{ required: true, message: 'Valor entrada é obrigatório'}]}>
          <Input min="0" step="0.00001" style={{ width: '100%' }} />
        </Form.Item>

        <PartialsContainer>
          <Form.Item name="gain" label="Ganho" labelCol={{span: 7}} rules={[{ required: true, message: 'Ganho é obrigatório'}]}>
            <Input min="0" max="100" step="0.1" maxLength={4} style={{ width: '100%' }} onChange={(value) => setGain(value.target.value)} />
          </Form.Item>
          <Form.Item name="sell" label="Venda" labelCol={{span: 7}} rules={[{ required: true, message: 'Venda é obrigatório'}]}>
            <Input min="0" max="100" step="0.1" maxLength={4} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="out" label="Saída" labelCol={{span: 7}} rules={[{ required: true, message: 'Saída é obrigatório'}]}>
            <Input disabled={true} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="loss" label="Perda" labelCol={{span: 7}} rules={[{ required: true, message: 'Perda é obrigatório'}]}>
            <Input min="0" max="100" step="0.1" maxLength={4} style={{ width: '100%' }} onChange={(value) => setLoss(value.target.value)} />
          </Form.Item>
          <Form.Item name="stop" label="Stop" labelCol={{span: 7}} rules={[{ required: true, message: 'Stop é obrigatório'}]}>
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