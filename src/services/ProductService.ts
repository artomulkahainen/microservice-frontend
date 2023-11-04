import { get } from '../utils/FetchUtil';
import type { ProductDTO } from './ProductServiceDtos';

export const getAllProducts = (): Promise<ProductDTO[]> => get('/api/products');
