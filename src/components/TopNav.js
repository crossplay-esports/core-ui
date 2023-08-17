import React from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function TopNav() {
  return (
    <div className="border font-quicksand  border-gray-100 p-2">
      <div className="flex flex-row">
        <div className="search flex-grow">
          <label
            for="default-search"
            class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div class="relative">
            <div class="absolute inset-y-0 left-0 w-8 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="stroke-violet-500" />
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Players, Teams, Fixtures..."
              required
            />
            <button
              type="submit"
              class="text-white absolute right-2.5 bottom-2.5 bg-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
        <div className="team flex flex-col ml-2 text-violet-800 items-end text-xs h-12 justify-center">
          <div>
            Est. June 2021
          </div>
          <div className="text-md font-bold">
            Team -  Bengaluru FC
          </div>
        </div>
        <div className="profile h-14 w-14 border-2 border-gray-300 rounded-3xl ml-4 justify-center overflow-hidden hover:cursor-pointer hover:ring-2 hover:ring-violet-700">
          <img src="https://i.pravatar.cc/300" />
        </div>
      </div>
    </div>
  );
}
