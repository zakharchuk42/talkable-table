import React from 'react'

type BoxDirection = ['row', 'column']
type BoxJustify = ['start', 'center', 'between', 'around', 'end']
type BoxAlign = ['start', 'end', 'stretch', 'center']
type BoxPadding = ['sm', 'md', 'lg', 'xl']

export interface UiBoxProps {
	children: React.ReactNode
	flex?: boolean
	direction?: BoxDirection[number]
	justify?: BoxJustify[number]
	align?: BoxAlign[number]
	width?: string
	height?: string
	gap?: string
	shadow?: boolean
	radius?: boolean
	p?: BoxPadding[number]
	pt?: BoxPadding[number]
	pr?: BoxPadding[number]
	pb?: BoxPadding[number]
	pl?: BoxPadding[number]
	className?: string
}
