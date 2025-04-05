import type { HTTP_METHOD } from './constant';
import type { ValueOf } from './type';

export type HttpMethod = ValueOf<typeof HTTP_METHOD>;

export interface UrlFormData {
  url: string;
}
