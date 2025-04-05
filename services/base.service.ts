import axios from 'axios';

const API_URL = 'http://localhost:9090';

export default class BaseService {
  protected async post<T>(endpoint: string, data: T) {
    try {
      const { data: response } = await axios.post(
        `${API_URL}${endpoint}`,
        data
      );
      return response;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
}
