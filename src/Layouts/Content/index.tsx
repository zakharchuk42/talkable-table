import React from 'react'
import { ContentPros } from './types'
import s from './content.module.scss'

export const ContentLayout: React.FC<ContentPros> = ({ children }) => {
	return <div className={s.content}>{children}</div>
}
