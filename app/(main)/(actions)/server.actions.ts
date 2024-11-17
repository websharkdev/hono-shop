'use client';

import axios from 'axios';

export const cards = async () => {
  try {
    const result = await axios('/api/shop', {
      method: 'GET',
    }).then((response) => response.data);

    return result.data;
  } catch (e: unknown) {
    const error = e as Error;

    return {
      status: error.name,
      data: error.message,
    };
  }
};
