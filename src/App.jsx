
import { useState } from "react";
import { RouterProvider } from 'react-router-dom';
import {router} from './router/router'
import PSLoader from "./Components/PSLoader";



function App() {

    const [loading, setLoading] = useState(true);

  
  return (
    <>
    {/* <Router>
      <Navbar />
       <Routes>

        <Route path="/" element={<Home />}/>
   
        <Route path="/services/digital-strategy-analytics" element={<StrategyAnalyticsHeader />}/>
       </Routes>
    </Router> */}
    
    {/* <RouterProvider router={router}/> */}

     
      {loading && (
        <PSLoader onComplete={() => setLoading(false)} />
      )}

      {!loading && <RouterProvider router={router} />}
    </>

  )
}

export default App
