import React from 'react'

type TypographyAlign = ['center', 'right']
type TypographyWeight = ['semibold', 'bold']
type TypographyVariant = ['subtitle', 'body', 'small']
type TypographyColor = ['dark', 'gray', 'red']

export interface UiTypographyProps {
	children: React.ReactNode
	className?: string
	variant?: TypographyVariant[number]
	color?: TypographyColor[number]
	align?: TypographyAlign[number]
	weight?: TypographyWeight[number]
}
