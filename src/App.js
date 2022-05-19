import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Header from './component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import List from './component/List/List';
import Login from './component/Login/Login';
import RequireAuth from './component/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <Home></Home>
          </RequireAuth>
        }></Route>
        <Route path='/list' element={
          <RequireAuth>
            <List></List>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
