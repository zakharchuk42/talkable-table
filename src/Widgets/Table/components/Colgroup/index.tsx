import React from 'react'
import { ColgroupProps } from './types'

export const Colgroup: React.FC<ColgroupProps> = ({ columns }) => {
	return (
		<colgroup>
			{columns.map((column: any) => {
				return <col key={column.name} style={{ width: column.width }} />
			})}
		</colgroup>
	)
}
