import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyGoogleTranslateFix } from './applyGoogleTranslateFix'
import "intl-tel-input/build/css/intlTelInput.css";

// ✅ Apply fix BEFORE React renders
applyGoogleTranslateFix();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
    
)
