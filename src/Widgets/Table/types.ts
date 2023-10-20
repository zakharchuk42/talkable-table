import { ReactNode } from 'react'

export interface ITableColumn<T> {
	key: string
	name: string
	render: (value: T) => ReactNode
	width?: string
}

export interface TableProps<T> {
	data: T[]
	columns: ITableColumn<T>[]
}
