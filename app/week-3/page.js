import React from 'react';
import ItemList from './items-list';

const Page = () => {
  return (
    <main className=" p-2 m4 bg- bg-slate-950">
      <h1 className="text-3xl font-bold text-White-800 mb-5">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
