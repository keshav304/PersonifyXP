import { canUseDOM } from 'vtex.render-runtime'

import type { PixelMessage } from './typings/events'
declare global {
  interface Window {
    personifyTracking:any;
  }
}
export function handleEvents(e: PixelMessage) {
  
  switch (e.data.eventName) {
    case 'vtex:pageView': {
      console.log("page view")
      window.personifyTracking();
      break
    }

    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
