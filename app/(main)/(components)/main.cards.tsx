'use client';

import PCard from '@/components/custom/product.card';
import { ProductItemProps } from '@/types/product.types';
import { useQuery } from '@tanstack/react-query';
import { getCards } from '../(actions)';
import { Fragment } from 'react';

const MCards = () => {
  const { data, status } = useQuery({
    queryKey: ['main-get-shop-data'],
    queryFn: () => getCards(),
    refetchOnWindowFocus: false,
  });

  return (
    <Fragment>
      <div className="grid w-full grid-cols-5 gap-2.5">
        {status === 'success'
          ? data
              .slice(0, 20)
              .map((card: ProductItemProps, index: number) => (
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

      {status === 'success' && data.length > 20 ? (
        <div className="col-span-full flex flex-col items-center justify-center gap-2.5 text-pretty font-medium text-gray-800">
          <h6 className="text-lg font-semibold">Hey there!</h6>
          <p>
            We are show only small percent of our products, check products
            section
          </p>
        </div>
      ) : null}
    </Fragment>
  );
};

export default MCards;
