import React from 'react';
import Plant from '../img/home/h.png'

const Home = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        {/* text and img wrapper */}
      <div className='flex flex-col justify-center'>
      {/* text */}
      <div className=' lg:mt-60 w-full pt-36 pb-6 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center items-center lg:items-start'>
        <h1 className='h1' >
        Disease - <br/>Plant Pathogen
        </h1>
        <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12'>
        <span>Instant </span>Plant Disease Detection User
        </p>
      </div>
      {/* image */}
      <div className='flex justify-end max-h-96 lg:max-h-max'>
        <div className='sm:lg:-left-10 relative lg:-right-40 overflow-hidden'>
          <img src={Plant} className='lg:mt-60 sm:mr-20 lg:mr-0'></img>
        </div>
      </div>
      </div>
      </div>
    </section>





  // <section className='section'>
  //   <div className='container mx-auto h-full relative'>
  //   {/* text and img wrapper */}
  //   <div className='flex flex-col justify-center'>
  //   {/* text */}
  //   <div className='w-full pt-36 pb-14 lg:pt-0 lg:pb-0 lg:w-auto z-10 lg:absolute flex flex-col justify-center lg:items-start'>
  //     <h1 className='h2 mt-11 text-[56px] lg:text-[56px] '>
  //       {/* <div className='w-[110px] float-left items-center mt-6 '>
  //       </div> */}
  //   Pathogen Guide: <br></br>Plant Diseases
  //     </h1>
  //     <p className='text-[26px] lg:text-[36px] font-primary mb-4 lg:mb-12 '>
  //     <span>Transform </span> Plant Care: Instant Disease Detection <br></br> for a <span>Greener</span> World.
  //     </p>
  //   </div>
  //   <div className='flex justify-center max-h-188 lg:max-h-max'>
  //     <div className='relative lg:-right-40 size-60 overflow-hidden lg:mt-11'>
  //       <img src={Plant}/>
  //     </div>
  //   </div>
  //   </div>
  //   </div>
  // </section>



  // <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
  //     <div className="hero-map" />

  //     <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
  //       <img 
  //         src={Memo}
  //         alt="camp"
  //         width={50}
  //         height={50}
  //         className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
  //       />
  //       <h1 className="bold-52 lg:bold-88">Welcome</h1>
  //       <p className="mt-6 text-gray-30 xl:max-w-[520px] px-19 py-8">
  //       <span>Revolutionize</span> plant care with our cutting-edge image detection technology, <span>identifying diseases</span> at a glance for a healthier and thriving green world.
  //       </p>

  //       <div className="my-11 flex flex-wrap gap-5">
  //       </div>
  //     </div>

  //     <div className="relative flex flex-1 items-start">
  //       <div className="relative z-20 flex mt-6 flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

  //          <div className="flex flex-col">
  //           <div className="flexBetween">
  //             <img src={Plant} alt="close"  className='' />
  //           </div>
  //           <p className="bold-20 text-white">Aguas Calientes</p>
  //         </div>
  //       </div>
  //     </div>
  //   </section>


      // <section className=''>
      //   <div className=''>
      //     <div>
      //       <h1>
      //       <span>Pathogen Guide:</span> <br></br>Plant Diseases
      //       </h1>
      //       <p>
      //       <span>Transform </span> Plant Care: Instant Disease Detection <br></br> for a <span>Greener</span> World.
      //       </p>
      //     </div>
      //     <img src={Plant}></img>
      //   </div>
      // </section>
  )};

export default Home;
