import Link from 'next/link';

const CardTransactionComp = () => {
  return (
    <>
      <div className="w-[270px] bg-fix rounded-2xl shadow-xl">
        <div className="p-4">
          <h1 className=" text-[20px] font-medium flex justify-center">
            Ticket
          </h1>
          <hr className="mt-2 border-1 border-black" />
          <div className="mt-3">
            <h2 className="text-[20px] font-medium">Type Ticket</h2>
            <div className="flex flex-wrap justify-between">
              <div>
                <p className="text-[10px]">price</p>
                <text className=" font-semibold">IDR 120.000</text>
              </div>
            </div>
          </div>
        </div>
        <Link href="/transactions">
          <button className="w-full bg-fourth shadow-2xl h-[50px] rounded-br-2xl rounded-bl-2xl">
            Checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default CardTransactionComp;
