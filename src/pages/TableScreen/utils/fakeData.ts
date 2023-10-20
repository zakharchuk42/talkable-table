export interface IDataTable {
	title: string
	date: string
	price: string
	from: {
		email: string
		sign: string
	}
	to: {
		email: string
		sign: string
	}
	status: {
		status: string
		fraud: boolean
	}
}

export const fakeData = (): IDataTable[] => {
	return [
		{
			title: 'Purchase',
			date: '06/17/2020 at 7:13 PM PDT',
			price: '$120.00',
			from: {
				email: 'autouser23926@gmail.com',
				sign: 'Advocate',
			},
			to: {
				email: 'autouser23926@gmail.com',
				sign: 'Friend',
			},
			status: {
				status: 'Pending',
				fraud: false,
			},
		},
		{
			title: 'Purchase',
			date: '07/10/2020 at 4:05 AM PDT',
			price: '$100.00',
			from: {
				email: 'ad0379118142@gmail.com',
				sign: 'Advocate',
			},
			to: {
				email: 'fr0379118142@gmail.com',
				sign: 'Friend',
			},
			status: {
				status: 'Flagged',
				fraud: true,
			},
		},
		{
			title: 'Purchase',
			date: '06/09/2020 at 12:042 PM PDT',
			price: '$28.00',
			from: {
				email: 'ad56991@gmail.com',
				sign: 'Advocate',
			},
			to: {
				email: 'fr94250@gmail.com',
				sign: 'Friend',
			},
			status: {
				status: 'Approved',
				fraud: false,
			},
		},
		{
			title: 'Purchase',
			date: '08/07/2020 at 4:20 AM PDT',
			price: '$100.00',
			from: {
				email: 'user.to.be.blocked92187@gmail.com',
				sign: 'Advocate',
			},
			to: {
				email: 'user.to.be.blocked23926@gmail.com',
				sign: 'Friend',
			},
			status: {
				status: 'Blocked',
				fraud: true,
			},
		},
		{
			title: 'Purchase',
			date: '06/09/2020 at 2:08 AM PDT',
			price: '$100.00',
			from: {
				email: 'ad0693677382@gmail.com',
				sign: 'Advocate',
			},
			to: {
				email: 'fr0693677382@gmail.com',
				sign: 'Friend',
			},
			status: {
				status: 'Voided',
				fraud: true,
			},
		},
	]
}
