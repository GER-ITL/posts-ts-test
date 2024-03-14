import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('failed')

const root = ReactDOM.createRoot(rootElement)
root.render(
	<BrowserRouter>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>
)
