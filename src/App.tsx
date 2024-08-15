import HappyIncreamentor from "./Components/HappyIncreamentor"
import HappyTracker from "./Components/HappyTracker"
import SadIncreamentor from "./Components/SadIncrementor"
import SadTracker from "./Components/SadTracker"

function App() {


  return (
    <div className="p-1 flex flex-col gap-2">
      <HappyTracker/>
      <SadTracker/>
      <HappyIncreamentor/>
      <SadIncreamentor/>
    </div>
  )
}

export default App
