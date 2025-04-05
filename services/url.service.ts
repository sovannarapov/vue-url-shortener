import BaseService from './base.service';
import type { UrlFormData } from '@/domain/interface';

export default class UrlService extends BaseService {
  async create(form: UrlFormData) {
    return await this.post('/api/url/create', form);
  }
}
