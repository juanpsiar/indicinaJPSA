import { client } from './api';

class IndicinaServices {
  static async postAuthentication(code) {
    const result = await client.post(`/dev/auth`, code);
    console.log('result data', result);
    return result;
  }
}

export default IndicinaServices;
