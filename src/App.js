import React, { memo } from 'react';
import './App.scss';

import NavBar from "./components/NavBar";
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
    return (
        <div className='pageContainer'>
            <div className='content'>
                <NavBar />
            </div>
            <div class="scroll-container">
                <About />
                <Projects />
            </div>
            <footer>
                <p>&copy; 2023 Yangfei. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default memo(App);