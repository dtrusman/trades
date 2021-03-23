import { connect, MongoClient } from 'mongodb';

class Connection {
  static connectDB = () => {
    const url =
      'mongodb://admin:admin@127.0.0.1:27017/admin?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false';
    return MongoClient.connect(url);
  };

  static database = async () => {
    const dbo = await Connection.connectDB();
    return dbo.db('trades');
  };
}

export default Connection;
