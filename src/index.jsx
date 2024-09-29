import React from 'react';
import { createRoot } from 'react-dom/client';

// import style
import './index.css'
import CatatanApp from './components/CatatanApp';

const root = createRoot(document.getElementById('root'));
root.render(<CatatanApp/>);