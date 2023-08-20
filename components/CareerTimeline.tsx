import React from 'react';

function CareerTimeline() {
    const timelineData = [
      { date: "January 2022 - June 2023", position: "DevOps Developer",place:"STONE MOBILE S.r.l - Torino (TO) Sviluppatore Java DevOps " },

  // Aggiungi altre voci del tuo percorso di carriera qui

    ];
  
    return (
      <section id="career">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Career Timeline</h2>
          <div className="relative">
            <div className="absolute h-full w-1 bg-gray-300 left-3"></div>
            
            <div className="space-y-4 pl-5">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <div className="ml-4">
                    <p className="text-sm font-semibold">{item.position}</p>
                    <p className="text-gray-500">{item.date}</p>
                    <p className="text-gray-500">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

export default CareerTimeline;