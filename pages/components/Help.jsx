import React from 'react'

const Help = () => {
  return (
    <div className='h-[100vh] w-full grid justify-center items-center
                    grid-cols-4 px-40'>

        <div className='grid items-center justify-left
                      w-full h-auto col-span-2'
        >
          <h1 className='text-left'>A helping tool for the Doctors</h1>
          <p className='text-justify w-full lg:w-2/3'>With our state-of-the-art AI technology, MedicalProne makes predicting chest diseases from X-ray images a breeze for doctors everywhere. Say goodbye to guesswork and hello to accurate diagnoses with just a few clicks. Let MedicalProne help you focus on what really matters - providing the best possible care for your patients. Try it out now and see the difference for yourself!</p>
        </div>
        <div className='grid items-center justify-center
                      w-full h-full col-span-2'
        >
          help
        </div>

    </div>
  )
}

export default Help