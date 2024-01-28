import React from 'react'

const LoadingSkeleton = () => {
  return (
    <div className='flex'>
    <div className="mb-10 w-full border border-purple-400 p-2 rounded-md animate-pulse md:w-1/2 lg:w-1/3">
    <div className="mb-8 overflow-hidden rounded bg-gray-200">
      <div className="w-full h-40"></div> {/* Placeholder for image */}
    </div>
    <div>
      <span className="mb-5 inline-block rounded bg-purple-500 px-4 py-1 text-center text-xs font-semibold leading-loose text-white"> {/* Placeholder for date */}
        loading ...
      </span>
      <h3>
        <p className="mb-4 inline-block text-xl font-semibold text-gray-400 hover:text-purple-600 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* Placeholder for title */}
          &nbsp;
        </p>
      </h3>
      <p className="dark:text-gray-400"> {/* Placeholder for description */}
        &nbsp;
      </p>
    </div>
  </div>
  <div className="mb-10 w-full border border-purple-400 p-2 rounded-md animate-pulse md:w-1/2 lg:w-1/3">
    <div className="mb-8 overflow-hidden rounded bg-gray-200">
      <div className="w-full h-40"></div> {/* Placeholder for image */}
    </div>
    <div>
      <span className="mb-5 inline-block rounded bg-purple-500 px-4 py-1 text-center text-xs font-semibold leading-loose text-white"> {/* Placeholder for date */}
        loading ...
      </span>
      <h3>
        <p className="mb-4 inline-block text-xl font-semibold text-gray-400 hover:text-purple-600 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* Placeholder for title */}
          &nbsp;
        </p>
      </h3>
      <p className="dark:text-gray-400"> {/* Placeholder for description */}
        &nbsp;
      </p>
    </div>
  </div>


  <div className="mb-10 w-full border border-purple-400 p-2 rounded-md animate-pulse md:w-1/2 lg:w-1/3">
    <div className="mb-8 overflow-hidden rounded bg-gray-200">
      <div className="w-full h-40"></div> {/* Placeholder for image */}
    </div>
    <div>
      <span className="mb-5 inline-block rounded bg-purple-500 px-4 py-1 text-center text-xs font-semibold leading-loose text-white"> {/* Placeholder for date */}
        loading ...
      </span>
      <h3>
        <p className="mb-4 inline-block text-xl font-semibold text-gray-400 hover:text-purple-600 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* Placeholder for title */}
          &nbsp;
        </p>
      </h3>
      <p className="dark:text-gray-400"> {/* Placeholder for description */}
        &nbsp;
      </p>
    </div>
  </div>
  </div>
  )
}

export default LoadingSkeleton
