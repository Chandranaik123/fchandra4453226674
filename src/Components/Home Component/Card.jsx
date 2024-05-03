import React from 'react'
import img1 from '../IMG/BIDKALKATTE.jpeg'
import img2 from '../IMG/goli.jpeg'
function Card() {
  return (
    <div>
        <section className="">
  <div className="flex flex-wrap mx-auto md:flex-nowrap p-12">

    <a href="">
      <div className="flex w-full">
        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={img1} alt="blog"/>
          <div className="px-6 py-8">
            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
              <span className="">Mandarthi</span>
            </h4>
            <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Near Bank of Baroda ,1st Floor Mandarthi , karnataka India 576223.</p>
          </div>
        </div>
      </div>
    </a>

    <a href="">
      <div className="flex w-full">
        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={img2} alt="blog"/>
          <div className="px-6 py-8">
            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
              <span className="">Goliyangadi</span>
            </h4>
            <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Balaji Complex, Halady Road Goliyangadi , Karnataka 576212.</p>
          </div>
        </div>
      </div>
    </a>

    <a href="">
      <div className="flex w-full">
        <div className="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8">
          <img className="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={img1} alt="blog"/>
          <div className="px-6 py-8">
            <h4 className="mt-4 text-2xl font-semibold text-neutral-600">
              <span className="">Bidkalkatte</span>
            </h4>
            <p className="mt-4 text-base font-normal text-gray-500 leading-relax">Mahadevi Complex Kudapura Road, Bidkalkatte ,Karnataka 576222. </p>
          </div>
        </div>
      </div>
    </a>

  </div>
</section>
    </div>
  )
}

export default Card