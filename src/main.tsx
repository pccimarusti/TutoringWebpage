import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css'
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './queryClient'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

  function scrollToHashWhenReady() {
    const hash = window.location.hash
    if (!hash) return
  
    const attemptScroll = () => {
      const target = document.querySelector(hash)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      } else {
        // Keep trying every 100ms until it exists, up to 2 seconds
        setTimeout(attemptScroll, 100)
      }
    }
  
    setTimeout(attemptScroll, 100) // Initial short delay
  }
  
  window.addEventListener("load", scrollToHashWhenReady)

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ParallaxProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ParallaxProvider>
    </Provider>
  </React.StrictMode>
)