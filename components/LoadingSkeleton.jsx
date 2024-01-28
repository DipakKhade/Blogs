import React from 'react'

const LoadingSkeleton = () => {
  return (
    <>

<div className="p-4 md:p-4">
        <section className="pt-4 dark:bg-zinc-900 lg:pb-20 ">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4">
                <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                  <span className="mb-2 block text-lg font-semibold text-purple-500">
                    Blogs
                  </span>
                  <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">
                    Recent Blog
                  </h2>
                  <p className="text-base text-body-color dark:text-white">
                    Blogs about web tech
                  </p>
                </div>
              </div>
            </div>

            
          </div>
        </section>
      </div>
    <div className='md:flex m-1'>
   
    <div className="mb-10 w-full border md:m-2 border-purple-400 p-2 rounded-md animate-pulse md:w-1/2 lg:w-1/3">
    <div className="mb-8 overflow-hidden rounded bg-gray-200">
      <div className="w-full h-40"></div> {/* Placeholder for image */}
    </div>
    <div>
      <span className="mb-5 inline-block rounded bg-purple-500 px-4 py-1 text-center text-xs font-semibold leading-loose text-white"> {/* Placeholder for date */}
        loading ...
      </span>
      <h3>
        <p className="mb-4 inline-block text-xl font-semibold text-gray-400 hover:text-purple-600 dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"> {/* Placeholder for title */}
        loading ...
        </p>
      </h3>
      <p className="dark:text-gray-400"> {/* Placeholder for description */}
        &nbsp;
      </p>
    </div>
  </div>
  <div className="mb-10 md:m-2 w-full border border-purple-400 p-2 rounded-md animate-pulse md:w-1/2 lg:w-1/3">
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


  <div className="mb-10 md:m-2 w-full border border-purple-400 p-2 rounded-md animate-pulse md:w-1/2 lg:w-1/3">
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

  </>
  )
}

export default LoadingSkeleton
