import "@radix-ui/themes/styles.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalProvider } from './context/GlobalContext.tsx'
import { PlasmicRootProvider } from '@plasmicapp/react-web'
import { Theme } from '@radix-ui/themes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <PlasmicRootProvider>
        <Theme>
          <App />
        </Theme>
      </PlasmicRootProvider>
    </GlobalProvider>
  </StrictMode>,
)
