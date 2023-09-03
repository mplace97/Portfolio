import React from 'react';


interface TimelineItemProps {
  title: string;
  description: string;
  date: string; 
}

function TimelineItem({ title, description, date }: TimelineItemProps) {


  return (
    <li className="border-l-2 border-blue-600">
      <div className="md:flex flex-start">
        <div className="bg-blue-600 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" className="text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h288c8.8 0 16 7.2 16 16v64c0 8.8-7.2-16-16 16H80c-8.8 0-16-7.2-16-16v-64zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
          </svg>
        </div>
        <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10">
          <div className="flex justify-between mb-4">
            <a href="https://www.stonemob.com/" className="font-medium text-blue-600 hover:text-blue-700 focus:text-blue-800 duration-300 transition ease-in-out text-sm">{title}</a>
          </div>
          <p className="text-gray-700 mb-6">{date}</p>
          <p className="text-gray-700 mb-6">{description}</p>
          { /*<button type="button" className="inline-block px-4 py-1.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true">Preview</button> 
            <button type="button" className="inline-block px-3.5 py-1 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true">See demo</button>
          */}
        </div>
      </div>
    </li>
  );
}

function CareerTimeline() {
  const timelineData = [
    {
      title: 'STONE MOBILE S.r.l',
      description: 'Sviluppatore Java DevOps su progetto per Nexi S.p.A su gestione, modifica e creazione di workflow per prelievo allo sportello ATM Bancomat-Pagobancomat',
      date: 'January 2022 - June 2023',
    },
 
 
    // Aggiungi altre voci del tuo percorso di carriera qui
  ];

  return (
    <section id="career">
      <h1 className="my-10 text-center font-bold text-4xl">
         Carrer Timeline
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>    
    <ol>
      {timelineData.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </ol>
    </section>
  );
}



export default CareerTimeline;