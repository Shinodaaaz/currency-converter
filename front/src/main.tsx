import React from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import App from './app/App'
import 'normalize.css'
import '@/shared/theme/fonts/fonts.css'
import {GlobalStyle} from "@/app/GlobalStyle.ts";
import {store} from "@/store/store.ts";
import {BrowserRouter} from "react-router-dom";

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle/>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
