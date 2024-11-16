'use client';

export const cards = async () => {
  try {
    const result = await fetch('/api/hello', {
      method: 'GET',
    }).then((res) => res.json());

    return result;
  } catch (e: unknown) {
    const error = e as Error;

    return {
      status: error.name,
      data: error.message,
    };
  }
};
