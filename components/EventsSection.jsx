// components/EventsSection.js

import React from 'react';



const EventsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Event Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Event Title 1</h3>
            <p className="text-gray-700 mb-2">Date: May 20, 2024</p>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor justo sit amet urna facilisis, quis varius leo volutpat.</p>
          </div>

          {/* Event Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Event Title 2</h3>
            <p className="text-gray-700 mb-2">Date: June 10, 2024</p>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor justo sit amet urna facilisis, quis varius leo volutpat.</p>
          </div>

          {/* Event Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Event Title 3</h3>
            <p className="text-gray-700 mb-2">Date: July 5, 2024</p>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor justo sit amet urna facilisis, quis varius leo volutpat.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
