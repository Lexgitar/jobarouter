        import { createBrowserRouter,
            Route, 
            createRoutesFromElements, 
            RouterProvider } 
    from "react-router-dom";
    import { careersLoader } from "./pages/careers/Careers";
    import { careerDetailsLoader } from "./pages/careers/CareerDetails";
    import { contactAction } from "./pages/help/Contact";
    //pages
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Careers from "./pages/careers/Careers";
import CareerDetails from "./pages/careers/CareerDetails";
import CareersError from "./pages/careers/CareersError";
//layouts
import RootLayout from "./layouts/RootLayout";
import HelpLayout from "./layouts/HelpLayout";
import CareersLayout from "./layouts/CareersLayout";




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>} >
      <Route index  element={<Home/>} />
      <Route path="about"  element={<About/>} />
      <Route path="help" element={<HelpLayout/>}> 
        <Route path='faq' element={<Faq/>} />
        <Route path='contact' element={<Contact/>} action={contactAction} />
      </Route>

      <Route path="careers" element={<CareersLayout/>}  errorElement={<CareersError/>} >
        <Route 
          
          loader={careersLoader}
          index 
          element={<Careers/>} />
          <Route
             loader={careerDetailsLoader} 
             path=":id"
              element={<CareerDetails/>}
               />
      </Route>

      <Route path='*' element={<NotFound/>} />
    </Route>
  )
)

function App(){

  return (

//old:
    // <BrowserRouter>
    //   <header>
    //     <nav>
    //       <h1>Jobarouter</h1>
    //       <NavLink to='/' >Home</NavLink>
    //       <NavLink to='about' >About</NavLink>
    //     </nav>
    //   </header>
    //   <main>
    //     <Routes>
    //       <Route index  element={<Home/>} />
    //       <Route path="/about"  element={<About/>} />
    //     </Routes>
    //   </main>
    // </BrowserRouter>
//new:
   
      
     <RouterProvider router={router} />

     

  );
}

export default App;
