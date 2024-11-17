'use client';

import PCard from '@/components/custom/product.card';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getCardItem } from '../(actions)';

const Body = () => {
  const { productID } = useParams(); // ID of the current page (product)
  const { data, status } = useQuery({
    queryKey: ['product-item-get-data', productID],
    queryFn: () => getCardItem(Number.parseInt(productID as string)),
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex items-center justify-center">
      <PCard {...data} status={status} />
    </div>
  );
};

export default Body;
