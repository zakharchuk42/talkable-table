import React from 'react'
import { ReferralStatusProps } from './types'
import UiTypography from '../../../../Ui/UiTypography'
import UiBox from '../../../../Ui/UiBox'

export const ReferralStatus: React.FC<ReferralStatusProps> = ({ title, isFraud }) => {
	const fraudStatus = isFraud ? 'Marked as fraud' : 'Passed fraud checks'
	const fraudColor = isFraud ? 'red' : 'gray'

	return (
		<UiBox flex direction={'column'} gap={'10px'}>
			<UiTypography weight={'semibold'}>{title}</UiTypography>
			<UiTypography color={fraudColor} variant={'small'}>
				{fraudStatus}
			</UiTypography>
		</UiBox>
	)
}
