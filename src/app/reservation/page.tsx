"use client";
import "../global.css";
import { useLogic } from "./logic";

export default function Page() {
  // reservation form with name, email, departureFlight, departurePlace, destination, date, numberOfSuitecase, comments and confirm button using react-hook-form
  // form located at the center of the page and it has a shodow
  // the form has a title on top and a button on the bottom to redirect to confirmation page
  // form width is 90% of the page when the screen is smaller than 425px and 50% of the page when the screen is larger than 425px
  // each feald has label on top and input field below wrapped in div with margin bottom 6
  // each input field expand to full width with light gray border (with radius) and size is md (medium)
  // form's background-color is similar to #F6F6F6
  // use react-hook-form to manage the form
  // use tailwindcss to style the form
  // use form validation and submit handler
  // use form reset after submit
  // use form state to show loading indicator
  // use form state to show success message after submit
  // use form state to show error message after submit
  // use form state to show error message for each field

  const { register, handleSubmit, errors, onSubmit } = useLogic();
  return (
    <div className="flex justify-center items-center h-screen mt-20">
      <form
        className="bg-gray-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="text-2xl font-bold mb-4">Reservation</h1>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">Name is required</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-red-500 text-xs italic">Email is required</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="departureFlight"
          >
            Departure Flight
          </label>
          <input
            id="departureFlight"
            type="text"
            placeholder="Departure Flight"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("departureFlight", { required: true })}
          />
          {errors.departureFlight && (
            <p className="text-red-500 text-xs italic">
              Departure Flight is required
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="departurePlace"
          >
            Departure Place
          </label>
          <input
            id="departurePlace"
            type="text"
            placeholder="Departure Place"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("departurePlace", { required: true })}
          />
          {errors.departurePlace && (
            <p className="text-red-500 text-xs italic">
              Departure Place is required
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="destination"
          >
            Destination
          </label>
          <input
            id="destination"
            type="text"
            placeholder="Destination"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("destination", { required: true })}
          />
          {errors.destination && (
            <p className="text-red-500 text-xs italic">
              Destination is required
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            id="date"
            type="date"
            placeholder="Date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("date", { required: true })}
          />
          {errors.date && (
            <p className="text-red-500 text-xs italic">Date is required</p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numberOfSuitecase"
          >
            Number Of Suitecase
          </label>
          <input
            id="numberOfSuitecase"
            type="number"
            placeholder="Number Of Suitecase"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("numberOfSuitecase", {
              required: true,
              min: 1,
              max: 10,
              valueAsNumber: true,
            })}
          />
          {errors.numberOfSuitecase && (
            <p className="text-red-500 text-xs italic">
              Number Of Suitecase is required
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="comments"
          >
            Comments
          </label>
          <textarea
            id="comments"
            placeholder="Comments"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("comments")}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
}
