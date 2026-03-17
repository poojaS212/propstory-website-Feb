import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyGoogleTranslateFix } from './applyGoogleTranslateFix'

// ✅ Apply fix BEFORE React renders
applyGoogleTranslateFix();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
    
)
