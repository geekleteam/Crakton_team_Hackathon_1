"use client"
import { TableDemo } from "@/components";
import withAuth from "@/components/with-auth";
import React , {useContext} from "react";
import { ChatContext } from '@/context/chat.context';


function Chat() {
  const { chatData } = useContext(ChatContext);

  const headers = chatData.headers
  const list = chatData.data



	return (
		<div className="flex flex-col text-center px-8 items-center justify-center">
			<div className="my-20">
				<h1 className="text-3xl font-bold">Welcome to Geekle AI Chat</h1>
				<p className="text-lg">You can start with these prompts.</p>
			</div>
			{/* <div className="grid grid-cols-6 w-full h-full gap-2 place-items-center content-center items-center">
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
				<div className="col-span-2 bg-slate-800 rounded-md w-full p-2"></div>
			</div> */}

<div className="p-4">
      {/* <h2 className="text-2xl font-bold mb-4">Product Comparison</h2> */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y ">
          <thead className=" text-white">
            <tr>
              {headers?.map((header, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                 {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {list?.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
		</div>
	);
}

{
	/* <div className="text-sm px-5 bg-slate-900">
	<TableDemo />
</div> */
}

export default withAuth(Chat);
