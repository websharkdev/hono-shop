'use client';

import { signIn, useSession } from '@/lib/auth.client';
import { MCards } from './(components)';
import { Button } from '@/components/ui/button';

const Page = () => {
  const isLoggined = true;
  const session = useSession();

  console.log(session);
  return (
    <div className="grid grid-cols-1 gap-2.5">
      {isLoggined ? (
        <h5 className="max-w-md truncate text-nowrap text-lg font-semibold">
          Welcome, Alex!
        </h5>
      ) : null}
      <MCards />
    </div>
  );
};

export default Page;
