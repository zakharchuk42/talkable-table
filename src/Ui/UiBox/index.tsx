import {
	alignMapper,
	directionMapper,
	justifyMapper,
	paddingBottomMapper,
	paddingLeftMapper,
	paddingMapper,
	paddingRightMapper,
	paddingTopMapper,
} from './class-names'
import { UiBoxProps } from './types'
import clsx from 'clsx'
import s from './box.module.scss'
import React from 'react'

const UiBox: React.FC<UiBoxProps> = ({
	children,
	flex,
	direction,
	justify,
	align,
	width,
	height,
	gap,
	shadow,
	radius,
	p,
	pt,
	pr,
	pb,
	pl,
	className,
}) => {
	const classNames = clsx(
		s.box,
		className,
		shadow && s.box_shadow,
		radius && s.box_radius,
		flex && s.box__flex,
		direction && directionMapper[direction],
		justify && justifyMapper[justify],
		align && alignMapper[align],
		p && paddingMapper[p],
		pt && paddingTopMapper[pt],
		pr && paddingRightMapper[pr],
		pb && paddingBottomMapper[pb],
		pl && paddingLeftMapper[pl]
	)
	return (
		<div
			className={classNames}
			style={{
				width,
				height,
				gap,
			}}
		>
			{children}
		</div>
	)
}

export default UiBox
