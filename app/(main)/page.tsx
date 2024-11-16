import { MCards } from './(components)';

const Page = () => {
  const isLoggined = true;

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
