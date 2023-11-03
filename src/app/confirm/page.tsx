import React from "react";

const page = () => {
  // confirmation page for reservation form
  // confirmation page has a title on top
  // confirmation page has a button to redirect to reservation form and a button to submit the contents
  // confirmation page has a table to show the content of the reservation form corresponding to the input fields in reservation/page.tsx
  // each set in the table has a label on the top and the content on the buttom
  // each contents in each sets have white background
  // use tailwindcss to style the page
  return (
    <div className="flex justify-center items-center h-screen mt-10">
      <div className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4">Confirmation</h1>
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="border px-4 py-2">Name</td>
              <td className="border px-4 py-2">John Doe</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Email</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Departure Flight</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Departure Place</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Destination</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Date</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Number of Suitecase</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Comments</td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-between mt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Back
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
