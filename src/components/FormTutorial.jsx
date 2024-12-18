// based on condition set in App.jsx, FormTutorial renders when the user is not currently creating a new marker.

function FormTutorial({}) {
  return (
    <>

      <div className="fixed w-72 bg-[#3A3431] flex flex-col rounded-lg p-8 right-16 top-64">
      
      <p className="text-gray-300"><span className="font-semibold">To report a new incident: </span>
            Click "Report New Incident" in the left sidebar, then click on a location on the map to add a new marker. Text boxes will appear 
            <span className="font-semibold"> here </span>so you can input details.</p>

      </div>
    </>
  )
}

export default FormTutorial;