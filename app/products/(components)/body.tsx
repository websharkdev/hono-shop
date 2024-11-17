'use client';

import PCard from '@/components/custom/product.card';
import { ProductItemProps } from '@/types/product.types';
import { useQuery } from '@tanstack/react-query';
import { getCards } from '../(actions)';

const Body = () => {
  const { data, status } = useQuery({
    queryKey: ['products-get-shop-data'],
    queryFn: () => getCards(),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="grid w-full grid-cols-5 gap-2.5">
      {status === 'success'
        ? data.map((card: ProductItemProps, index: number) => (
            <PCard
              {...card}
              status={status}
              key={`main-product-cards--${index}`}
            />
          ))
        : [
            ...Array(20).fill({
              title: '...',
              amount: 0,
              description: '...',
              imageURL: '...',
              status,
            }),
          ].map((placeholder, index) => (
            <PCard {...placeholder} key={`main-product-cards--${index}`} />
          ))}
    </div>
  );
};

export default Body;
