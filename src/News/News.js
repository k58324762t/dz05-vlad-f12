import React, { useContext } from 'react'
import { NewsContext } from '../App'
export function News() {
	const news = useContext(NewsContext)

	if (!news) return null

	return <>this is News</>
}
