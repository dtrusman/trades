import { Request, Response } from 'express';
import { ObjectID } from 'mongodb';
import Connection from './connection';

class Controller {
  save = async (request: Request, response: Response) => {
    const {
      currency,
      code,
      quantity,
      price,
      value,
      gain,
      sell,
      out,
      loss,
      stop,
    } = request.body;

    const order = {
      currency,
      code,
      quantity,
      price,
      value,
      gain,
      sell,
      out,
      loss,
      stop,
    };

    const db = await Connection.database();
    const res = await db.collection('orders').insertOne(order);

    if (!res.insertedCount) {
      return response.status(400).send({ message: 'Sua ordem não foi salva' });
    }

    return response.json(order);
  };

  list = async (request: Request, response: Response) => {
    const db = await Connection.database();

    const items = db.collection('orders').find({});

    const array = [];

    await items.forEach(item => array.push(item));

    return response.json(array);
  };

  delete = async (request: Request, response: Response) => {
    let message = 'Item removido com sucesso!';

    const { id } = request.params;

    const db = await Connection.database();

    const res = await db.collection('orders').deleteOne({
      _id: new ObjectID(id),
    });

    if (!res.deletedCount) {
      message =
        'Error, item não removido, entre em contato com o administrador!';
    }

    return response.send(message);
  };
}

export default new Controller();
