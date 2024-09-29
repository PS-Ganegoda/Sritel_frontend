"use client";
import {useEffect, useState} from 'react';
import Navbar from "@/app/components/Navbar";
import {baseUrlBILL} from "@/app/config";

interface BillingInfo {
  id: number;
  date: string;
  amount: string;
  status: 'Paid' | 'Due';
}

const Billing: React.FC = () => {
  const [billingInfo, setBillingInfo] = useState<BillingInfo[]>([

  ]);


  useEffect(() => {


    const requestOptions = {
      method: "GET",
      credentials: "include",
      redirect: "follow"
    };

    fetch(baseUrlBILL+ "/billing/my-bills", requestOptions)
        .then((response) => {
          if(response.status == 200) {
            return response.json()
          }
          throw new Error('Failed to fetch data')
        })
        .then((result) => {
          console.log(result)

            setBillingInfo(result)


        })
        .catch((error) => {
            alert('Failed to fetch data')
            console.error('Error:', error);
        });
  }, []);
  const handlePayNow = (billId: number) => {
    console.log('Pay Now clicked for Bill ID:', billId);
  };

  return (
    <div className={`flex flex-col min-h-[98vh] bg-gray-50 dark:bg-gray-900`}>
      <Navbar />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-800 p-6">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 p-8 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#2b4b55] dark:text-[#fb4df0]">Bill Details</h2>

          </div>
          <div className="space-y-4">
            {billingInfo.map((bill) => (
              <div
                key={bill.id}
                className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-600"
              >
                <div>
                  <p className="text-[#000] dark:text-[#fff]"><strong>Bill ID:</strong> {bill.id}</p>
                  <p className="text-[#000] dark:text-[#fff]"><strong>Amount:</strong> {bill.amount}</p>
                  <p
                    className={`text-lg ${
                      bill.status === 'Unpaid' ? 'text-red-500' : 'text-green-500'
                    }`}
                  >
                    {bill.status}
                  </p>
                </div>
                {bill.status === 'Unpaid' && (
                  <button
                    onClick={() => handlePayNow(bill.id)}
                    className="bg-[#2b4b55] text-white px-4 py-2 rounded hover:bg-[#fb4df0]"
                  >
                    Pay Now
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
