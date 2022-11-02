import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Home } from './js/components/pages/Home';
import { ClassProvider } from './js/provider/ClassProvider';


export const Main =() =>{

    return (
        
        <ClassProvider>
        <BrowserRouter>
        <Routes>

            <Route path='/' element={<Home />} />;

        </Routes>
        </BrowserRouter>
        </ClassProvider>

    )
}