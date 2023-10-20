import React from 'react'
import { Table } from '../../Widgets/Table'
import { ContentLayout } from '../../Layouts/Content'
import { createColumns } from './utils/createColumns'
import { fakeData, IDataTable } from './utils/fakeData'

export const TableScreen: React.FC = () => {
	const columns = createColumns()
	const data = fakeData()

	return (
		<ContentLayout>
			<Table<IDataTable> columns={columns} data={data} />
		</ContentLayout>
	)
}
