import React, { JSX } from 'react'
import { TableProps } from './types'
import UiTypography from '../../Ui/UiTypography'
import { Colgroup } from './components/Colgroup'
import s from './table.module.scss'

export const Table = <T,>({
	columns,
	data,
}: React.PropsWithChildren<TableProps<T>>): JSX.Element => {
	return (
		<div className={s.table}>
			<table>
				<Colgroup columns={columns} />
				<thead>
					<tr>
						{columns.map((column) => {
							return (
								<th key={column.name}>
									<UiTypography variant={'subtitle'}>
										{column.name}
									</UiTypography>
								</th>
							)
						})}
					</tr>
				</thead>
			</table>
			<table>
				<Colgroup columns={columns} />
				<tbody>
					{data.map((item, idx) => {
						return (
							<tr key={idx}>
								{columns.map((column) => {
									return (
										<td key={column.name}>{column.render(item)}</td>
									)
								})}
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
