import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { TableScreen } from './pages/TableScreen'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<TableScreen />
	</React.StrictMode>
)
