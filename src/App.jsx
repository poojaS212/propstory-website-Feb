
import { RouterProvider } from 'react-router-dom';
import {router} from './router/router'



function App() {
  
  return (
    <>
    {/* <Router>
      <Navbar />
       <Routes>

        <Route path="/" element={<Home />}/>
   
        <Route path="/services/digital-strategy-analytics" element={<StrategyAnalyticsHeader />}/>
       </Routes>
    </Router> */}
    
    <RouterProvider router={router}/>

    </>
  )
}

export default App
