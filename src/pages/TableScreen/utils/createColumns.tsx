import React from 'react'
import { PersonCell } from '../components/PersonCell'
import { StatusCell } from '../components/StatusCell'
import { ITableColumn } from '../../../Widgets/Table/types'
import { IDataTable } from './fakeData'
import { EventCell } from '../components/EventCell'

export const createColumns = (): ITableColumn<IDataTable>[] => [
	{
		key: 'event',
		name: 'Referral event',
		width: '25%',
		render: (value) => {
			return <EventCell title={value.title} date={value.date} price={value.price} />
		},
	},
	{
		key: 'advocate',
		name: 'Advocate',
		width: '30%',
		render: (value) => {
			return <PersonCell title={value.from.email} subtitle={value.from.sign} />
		},
	},
	{
		key: 'friend',
		name: 'Friend',
		width: '25%',
		render: (value) => {
			return <PersonCell title={value.to.email} subtitle={value.to.sign} />
		},
	},
	{
		key: 'referralStatus',
		name: 'Referral status',
		width: '20%',
		render: (value) => {
			return <StatusCell title={value.status.status} isFraud={value.status.fraud} />
		},
	},
]
