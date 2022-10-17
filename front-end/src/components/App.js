import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Students from './Students';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/students' element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
