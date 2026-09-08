import {Routes, Route, Link} from 'react-router-dom';
import './index.css'
import Home from './pages/Home';
import Edit from './pages/Edit';
import Create from './pages/Create';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div> 
      <nav className="bg-gray-800">
        <div className="container mx-auto p-2 flex justify-between items-center">
          <Link to="/" className="text-white text-4xl font-bold">Pokédex</Link>
        </div>
      </nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/pokemon/edit/:id" element={<Edit />} />
        <Route path="/pokemon/create/new" element={<Create />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
