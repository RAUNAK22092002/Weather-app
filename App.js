// import React from 'react'

// import Boxes from './boxes.js';
// import About from './About.js';
// import data from './data.js'

// import content from './content'
// import Product from './product'
// import Contact from './contact'
// import Navbar from './Navbar.js';
// import Footer from './Footer.js';
// import './boxes.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// const cards = data.map(item => {
//     return (
//         <About
//             key={item.id}
//     item = { item }
//         />
//     )
// })
// const box = content.map(item => {
//     return (
//         <Product
//              key={item.id}
//     item = { item }
           
//         />
//     )
// })
// const App = () => {
   
   
//     return (
//         <>
//        <Router>
//         <Navbar/>
//         <Switch>
//        <Route exact path="/">
//             <Boxes />
//           </Route>
//                     <Route exact path="/about">
//                         <h1 className="h">
//                          SKILLS
//                         </h1>
//                         <div className="ca">
//                             {cards}
//            </div>
//           </Route>
//                     <Route exact path="/contact">
//                         <h1 className="h">
//                             CONTACT
//                         </h1>
//             <Contact />
//           </Route>
            
//                     <Route exact path="/projects">
//                         <h1 className="h">
//                             PROJECTS
//                         </h1>
//                         <div className="product">

//                             {box}
//             </div>
//           </Route>
   
    
//                 </Switch>
//                 <Footer/>
//     </Router>
       
//         </>
//     )
// }


// export default App


import React from 'react'
import Weather from './Weather';
import "./styles.css";
 
const App = () => {
  return (
    <div>
        {/* const App
         */}
          <Weather />
    </div>
  )
}

export default App;
