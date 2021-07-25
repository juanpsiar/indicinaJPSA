import { client } from './api';

class IndicinaServices {
  static async postAuthentication(code) {
    let result;
    await client
      .post(`/dev/auth`, code)
      .then((resp) => {
        result = resp;
      })
      .catch((error) => console.log('error', error));
    return result.data.data;
  }
}

export default IndicinaServices;
