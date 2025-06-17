'use client';

import { useForm } from 'react-hook-form';
import createUser from './actions';

export default function Home() {
  const { register, reset, handleSubmit } = useForm();

  async function submit() {
    await createUser();
  }

  async function aftersubmit(data) {
    await createUser(data); // Send form data to server
    reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Welcome to ALFS </h2>

        <button
          onClick={submit}
          className="w-full bg-blue-100 text-blue-700 font-medium py-2 rounded hover:bg-blue-200"
        >
          Pls sign up to proceed further
        </button>

        <form onSubmit={handleSubmit(aftersubmit)} className="space-y-4">
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            {...register("phone")}
            type="text"
            placeholder="Phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600"
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
}
