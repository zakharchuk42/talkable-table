import React from 'react'
import { TableCellProps } from './types'
import UiTypography from '../../../../Ui/UiTypography'
import UiBox from '../../../../Ui/UiBox'

export const PersonCell: React.FC<TableCellProps> = ({ title, subtitle }) => {
	return (
		<UiBox flex direction={'column'} gap={'10px'}>
			<UiTypography weight={'semibold'}>{title}</UiTypography>
			<UiTypography>{subtitle}</UiTypography>
		</UiBox>
	)
}
