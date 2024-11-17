'use client';

import { ProductItemProps } from '@/types/product.types';
import axios from 'axios';

export const carditem = async (id: number) => {
  try {
    const result = await axios('/api/shop', {
      method: 'GET',
    }).then((response) => response.data);

    return result.data.find((item: ProductItemProps) => item.id === id);
  } catch (e: unknown) {
    const error = e as Error;

    return {
      status: error.name,
      data: error.message,
    };
  }
};
