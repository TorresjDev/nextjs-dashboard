// import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { fetchFilteredCustomers } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const customers = await fetchFilteredCustomers(query);
  console.log('Hello');

  console.log({ customers });

  return (
    <div className="w-full">
      {/* <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Customer</h1>
      </div> */}
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8"></div>
      {/* <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}> */}
      <Table customers={customers} />
      {/* </Suspense> */}
    </div>
  );
}
