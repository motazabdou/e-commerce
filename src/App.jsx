import Home from './routes/home/home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './routes/navbar/Navbar'


const Shop = () => {
  return (<h1>This is the Shop page</h1>);
};

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  )
}

export default App
