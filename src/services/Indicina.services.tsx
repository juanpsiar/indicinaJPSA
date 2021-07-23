import { client } from './api';

const headers = {
  'Access-Control-Allow-Origin': '*',
};
class IndicinaServices {
  static async postAuthentication(code) {
    let result;
    await client
      .post(`/dev/auth`, code)
      .then((resp) => {
        console.log(`response POST ${resp}`);
        result = resp;
      })
      .catch((error) => console.log('error', error));
    console.log('result data', result.data.data);
    return result.data.data;
  }
}

export default IndicinaServices;
