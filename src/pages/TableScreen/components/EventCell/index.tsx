import React from 'react'
import { EventCellProps } from './types'
import UiTypography from '../../../../Ui/UiTypography'
import UiBox from '../../../../Ui/UiBox'

export const EventCell: React.FC<EventCellProps> = ({ date, title, price }) => {
	return (
		<UiBox flex direction={'column'} gap={'10px'}>
			<UiTypography weight={'semibold'}>{title}</UiTypography>
			<UiTypography color={'gray'} variant={'small'} weight={'semibold'}>
				{date}
			</UiTypography>
			<UiTypography weight={'bold'}>{price}</UiTypography>
		</UiBox>
	)
}
