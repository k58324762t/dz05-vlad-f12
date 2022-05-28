import React, { useState, useContext } from 'react'
import { MainPage } from './Page/main/MainPage'
import { News } from './News/News'
import './App.css'

const NewsContext = React.createContext

function App() {
	const [news, setNews] = useState(false)

	const newes = setNews(i => !i)

	return (
		<NewsContext.Provider value={news}>
			<>
				<MainPage news={newes} />
				<News />
			</>
		</NewsContext.Provider>
	)
}

export default App
