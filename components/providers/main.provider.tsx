'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from '../general';

const queryClient = new QueryClient();

const MProvider = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid grid-cols-1 gap-2.5">
        <Header />
        <div className="mx-auto w-full gap-2.5 px-10 py-2.5">{children}</div>
      </div>
    </QueryClientProvider>
  );
};

export default MProvider;
