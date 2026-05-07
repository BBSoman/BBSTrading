import { ViteSSG } from 'vite-ssg'
import { HelmetProvider } from 'react-helmet-async'
import App from './App'
import './index.css'

// ViteSSG replaces ReactDOM.createRoot.
// During `npm run build` it pre-renders every route to static HTML.
// In the browser it hydrates normally — zero change to your UI.
export const createApp = ViteSSG(
  () => (
    <HelmetProvider>
      <App />
    </HelmetProvider>
  )
)
