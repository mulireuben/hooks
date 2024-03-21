import './App.css';
// import Item from './components/Item';
// import Alpha from './components/Alpha';
import { Router, Routes, Route, useLocation } from 'react-router-dom';
import Propdrilling from './pages/Propdrilling';
import Usestate from './pages/Usestate';
import Useeffect from './pages/Useeffect';
// import Usecontext from './pages/Usecontext';
import Useref from './pages/Useref';
import Usereducer from './pages/Usereducer';
import Uselayout from './pages/Uselayout';
import Usememo from './pages/Usememo';
import Alpha from './components/Alpha';
import Usecallback from './pages/Usecallback';

function App() {
  const location = useLocation();
  return (
    <>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Propdrilling />}></Route>
        <Route path='/Usestate' element={<Usestate />}></Route>
        <Route path='/Useeffect' element={<Useeffect />}></Route>
        <Route path='/Usememo' element={<Usememo />}></Route>
        <Route path='/Usereducer' element={<Usereducer />}></Route>
        <Route path='/Useref' element={<Useref />}></Route>
        <Route path='/Uselayout' element={<Uselayout />}></Route>
        <Route path='/Usecallback' element={<Usecallback />}></Route>
        {/* <Route path='/Usecontext ' element={<Usecontext />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
