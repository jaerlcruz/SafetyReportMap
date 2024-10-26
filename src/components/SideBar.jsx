import { useState, useEffect } from 'react';

function SideBar() {
  return (
    <>
      <div className="w-1/5 h-3/4 bg-white flex flex-col m-16 rounded-lg p-4">
        <button>
        {/* Button should open AddMarker component for user to input a new marker. */}
        Add Marker
        </button>
        <div className="text-black text-xl text-left bg-slate-200 m-4 p-4 rounded-lg">
          {/* Display details for a marker, if selected. Otherwise, inform user to select a marker to view details. */}
          {/* May have to pass in details component. */}
          <h2>Incident Details</h2>
          {/* TODO: Use conditional to see if marker is selected. */}
          <p className="text-gray-500">Select a marker to see incident details.</p>
        </div>
        <div className="text-black">
          {/* List of available resources, i.e. police number, how to get an escort, etc. */}
          <h2>Resources</h2>
        </div>
      </div>
    </>
  )
}

export default SideBar;