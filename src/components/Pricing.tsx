import React, { useState } from "react";
import Container from "./Container";
import green1 from '../assets/Rectangle 18.png'

interface Package {
  name: string;
  monthPrice: string;
  yearPrice: string;
  desc: string;
  green:string;
}

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const packages: Package[] = [
    {
      name: 'start',
      monthPrice: '19',
      yearPrice: '199',
      desc: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      green:green1,
    },
    {
      name: 'Advance',
      monthPrice: '22',
      yearPrice: '222',
      desc: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      green:green1,

    },
    {
      name: 'Premium',
      monthPrice: '33',
      yearPrice: '333',
      desc: 'A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      green:green1,

    },
  ];

  return (
    <div>
      <Container>
        <div className="text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold mb-2 text-[#010851]">Here are all our plans</h2>
          <p className="text-[#707070] mx-auto md:w-1/3 p-4">A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
        </div>

        {/* Toggle container */}
        <div className="mt-16">
  <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
    <span className="mr-4 text-2xl font-semibold">Monthly</span>
    <div className="relative rounded-full bg-gray-300 w-14 h-6 transition-all duration-300 ease-in-out">
      <div
        className={`absolute left-0 top-0 w-6 h-6 rounded-full transition-transform duration-300 transform ${
          isYearly ? "translate-x-full bg-[#010851] ml-3" : "bg-gray-600"
        }`}
      ></div>
    </div>
    <span className="ml-4 text-2xl font-semibold">Yearly</span>
  </label>
  <input
    type="checkbox"
    id="toggle"
    className="hidden"
    checked={isYearly}
    onChange={() => setIsYearly(!isYearly)}
  />
</div>


<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:w-11/12 mx-auto mt-12">
  {packages.map((pack,index)=><div key={index} className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl">
    <h3 className="text-3xl font-bold text-centertext-[#010851] ">{pack.name}</h3>
    <p className="my-5  text-[#000000] lg:w-[240px] text-left">{pack.desc}</p>
    <p className="my-5 font-extrabold text-[4rem] text-[#9A7AF1] inline-flex">
      {isYearly ? `$${pack.yearPrice}`:`$${pack.monthPrice}`}</p>
      <span className="text-medium text-base font-gray-400"> / {isYearly? 'year':'month'}</span>
      <ul className="mt-4 space-y-4 px-4">
        <li className="flex items-center gap-3">
          <img src={pack.green} alt="green" className="w-4 h-4" />
          Videos of Lessons
        </li>
        <li className="flex items-center gap-3">
          <img src={pack.green} alt="green" className="w-4 h-4" />
          Homework check
        </li>
        <li className="flex items-center gap-3">
          <img src={pack.green} alt="green" className="w-4 h-4" />
          Additional practical task
        </li><li className="flex items-center gap-3">
          <img src={pack.green} alt="green" className="w-4 h-4" />
          Monthly conferences 
        </li><li className="flex items-center gap-3">
          <img src={pack.green} alt="green" className="w-4 h-4" />
          Personal advice from teachers
        </li>
      </ul>
      <div className="mx-auto text-center flex items-center justify-center mt-5">
        <button className="btn rounded">Get started</button>
        </div>

    </div>

    )}
</div>
      </Container>
    </div>
  );
}

export default Pricing;
