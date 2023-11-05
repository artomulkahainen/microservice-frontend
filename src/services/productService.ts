import { get } from '@/utils/fetchUtils';
import type { ProductDTO } from './productServiceDtos';

export const getAllProducts = (): Promise<ProductDTO[]> => get('/api/products');
