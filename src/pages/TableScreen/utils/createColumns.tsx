import UiBox from '../../../Ui/UiBox'
import UiTypography from '../../../Ui/UiTypography'
import React from 'react'
import { TableCell } from '../components/TableCell'
import { ReferralStatus } from '../components/ReferralStatus'
import { ITableColumn } from '../../../Widgets/Table/types'
import { IDataTable } from './fakeData'

export const createColumns = (): ITableColumn<IDataTable>[] => [
	{
		key: 'event',
		name: 'Referral event',
		width: '25%',
		render: (value) => {
			return (
				<UiBox flex direction={'column'} gap={'10px'}>
					<UiTypography weight={'semibold'}>{value.title}</UiTypography>
					<UiTypography color={'gray'} variant={'small'} weight={'semibold'}>
						{value.date}
					</UiTypography>
					<UiTypography weight={'bold'}>{value.price}</UiTypography>
				</UiBox>
			)
		},
	},
	{
		key: 'advocate',
		name: 'Advocate',
		width: '30%',
		render: (value) => {
			return (
				<UiBox flex direction={'column'} gap={'10px'}>
					<UiTypography weight={'semibold'}>{value.from.email}</UiTypography>
					<UiTypography>{value.from.sign}</UiTypography>
				</UiBox>
			)
		},
	},
	{
		key: 'friend',
		name: 'Friend',
		width: '25%',
		render: (value) => {
			return <TableCell title={value.to.email} subtitle={value.to.sign} />
		},
	},
	{
		key: 'referralStatus',
		name: 'Referral status',
		width: '20%',
		render: (value) => {
			return (
				<ReferralStatus
					title={value.status.status}
					isFraud={value.status.fraud}
				/>
			)
		},
	},
]
