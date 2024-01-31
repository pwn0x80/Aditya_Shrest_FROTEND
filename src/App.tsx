import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { SideNavbar } from './components/NavBar/SideNavbar';
import logo from './logo.svg';
import { AddTask } from './pages/AddTask/AddTask';
import { TaskDetails } from './pages/TaskDetails/TaskDetails';
import { TaskList } from './pages/TaskList/TaskList';
// import './App.css';

function App() {
  return (
  <BrowserRouter>
      <Routes>
        <Route element={<SideNavbar/>}>
          <Route path='/' element={<TaskList/> } />
          <Route path='/AddTask' element={<AddTask/> } />
          <Route path='/detail' element={<TaskDetails/> } />
        </Route>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
