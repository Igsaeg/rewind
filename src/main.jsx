import { createRoot } from 'react-dom/client';
import { useState } from 'react';

import "./global.css";
import Header from './header.jsx';
import SideBar from './sidebar.jsx';
import Content from './content.jsx';

export default function App() {
    const [selected, setSelected] = useState(7);

    return (
        <>
            <Header />
            <div className='main'>
                <SideBar selected={selected} setSelected={setSelected} />
                <Content  selected={selected}/>
            </div>
        </>
    );
};
createRoot(document.getElementById('root')).render(<App />);