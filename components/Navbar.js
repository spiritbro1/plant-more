import react from 'react'

export default function Navbar(){
    return (<>
     <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Plant More</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>document.getElementById('air').scrollIntoView()}>Check Air Quality</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>document.getElementById('forest-chart').scrollIntoView()}>Forest Data</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>document.getElementById('plants').scrollIntoView()}>Plant Now!</a>
            <a className="mr-5 hover:text-gray-900 cursor-pointer" onClick={()=>document.getElementById('open-data').scrollIntoView()}>Open Source</a>
          </nav>
          <button onClick={()=>document.getElementById('donate').scrollIntoView()} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Donate 
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://images.unsplash.com/photo-1614223971553-03f27919b97b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=600&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=720"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Plant More
            </h1>
            <p className="mb-8 leading-relaxed">
              Trees act like the lungs of the earth. Trees help the planet
              breathe by turning carbon dioxide into clean, pure oxygen. Trees
              and forests around the world also act like the planet's air
              conditioning system and keep the planet cool. They help stop
              global warming. Yet the damage to our rainforest is getting higher
              year by year. And without rainforest our oxygen is getting low
              year by year. Now you can help protect the earth by simple step
              planting a plants! see below to see the data of our
              forest. And some of the plants you can plant to help prevent
              the damage.
            </p>
            <div className="flex justify-center">
              <button onClick={()=>document.getElementById('forest-chart').scrollIntoView()} className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                See Forest Data
              </button>
              <button onClick={()=>document.getElementById('plants').scrollIntoView()} className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                How Can You Help?
              </button>
            </div>
          </div>
        </div>
      </div>
    </>);
}