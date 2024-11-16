'use client';

import { useQuery } from '@tanstack/react-query';
import { getCards } from '../(actions)';

const MCards = () => {
  const { data, status } = useQuery({
    queryKey: ['main-get-shop-data'],
    queryFn: () => getCards(),
    refetchOnWindowFocus: false,
  });

  console.log(data, status);

  return <div>MCards</div>;
};

export default MCards;
