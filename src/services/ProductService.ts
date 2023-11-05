import { get } from '@/utils/fetchUtils';
import type { ProductDTO } from './ProductServiceDtos';

export const getAllProducts = (): Promise<ProductDTO[]> => get('/api/products');
