import	React					from	'react';

function	ColorPaletteDarkBlue() {
	return (
		<div className={'mr-10 mb-10'}>
			<div className={'mb-2'}>
				<p className={'text-base font-bold text-dark-blue-1'}>{'Dark Blue'}</p>
			</div>
			<div className={'grid grid-cols-3 gap-4'}>
				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-dark-blue-1 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Dark Blue 1'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#001746'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-dark-blue-2 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Dark Blue 2'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#183672'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-dark-blue-3 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Dark Blue 3'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#012A7C'}</p>
				</div>
			</div>
		</div>
	);
}

function	ColorPaletteGrayBlue() {
	return (
		<div className={'mr-10 mb-10'}>
			<div className={'mb-2'}>
				<p className={'text-base font-bold text-dark-blue-1'}>{'Gray Blue'}</p>
			</div>
			<div className={'grid grid-cols-3 gap-4'}>
				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-gray-blue-1 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Dark Gray 1'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#475570'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-gray-blue-2 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Dark Gray 1'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#7F8DA9'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-gray-blue-3 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Dark Gray 1'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#CED5E3'}</p>
				</div>
			</div>
		</div>
	);
}

function	ColorPaletteYearnBlue() {
	return (
		<div className={'mr-10 mb-10'}>
			<div className={'mb-2'}>
				<p className={'text-base font-bold text-dark-blue-1'}>{'Yearn Blue'}</p>
			</div>
			<div className={'grid grid-cols-4 gap-4'}>
				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-yearn-blue-dark rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Yearn Dark'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#004ADF'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-yearn-blue rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Yearn Primary'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#0657F9'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-yearn-blue-light-1 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Light Blue 1'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#C6D7F9'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-yearn-blue-light-2 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'Light Blue 2'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#E0EAFF'}</p>
				</div>
			</div>
		</div>
	);
}

function	ColorPaletteYearnWhite() {
	return (
		<div className={'mr-10 mb-10'}>
			<div className={'mb-2'}>
				<p className={'text-base font-bold text-dark-blue-1'}>{'White'}</p>
			</div>
			<div className={'grid grid-cols-3 gap-4'}>
				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-white rounded-sm border border-gray-blue-3'} />
					<p className={'text-sm text-dark-blue-1'}>{'Pure White'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#FFFFFF'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-white-blue-1 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'White Blue 1'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#F4F7FB'}</p>
				</div>

				<div className={'flex flex-col col-span-1'}>
					<div className={'mb-2 w-20 h-20 bg-white-blue-2 rounded-sm'} />
					<p className={'text-sm text-dark-blue-1'}>{'White Blue 2'}</p>
					<p className={'text-sm text-gray-blue-2'}>{'#F9FBFD'}</p>
				</div>
			</div>
		</div>
	);
}


function	Index() {
	return (
		<div className={'p-6 w-full bg-white'}>
			<h1 className={'mb-14 text-4xl font-bold text-dark-blue-1'}>{'Design System'}</h1>
			<div>
				<div className={'flex flex-row items-center mb-8'}>
					<div className={'mr-2 w-4 h-4 bg-yearn-blue rounded-sm'} />
					<p className={'text-xl font-bold text-dark-blue-1'}>{'White theme Colors'}</p>
				</div>
				<div className={'pl-6'}>
					<div className={'mb-4'}>
						<p className={'text-lg font-bold text-dark-blue-1'}>{'Blue Palette'}</p>
					</div>
					<div className={'flex flex-wrap'}>
						<ColorPaletteDarkBlue />
						<ColorPaletteGrayBlue />
						<ColorPaletteYearnBlue />
						<ColorPaletteYearnWhite />
					</div>
				</div>
			</div>

			<div>
				<div className={'flex flex-row items-center mb-8'}>
					<div className={'mr-2 w-4 h-4 bg-yearn-blue rounded-sm'} />
					<p className={'text-xl font-bold text-dark-blue-1'}>{'Fonts'}</p>
				</div>
				<div className={'pl-6'}>
					<div className={'grid grid-cols-5 gap-10 mb-10'}>
						<div className={'flex flex-col col-span-1'}>
							<h3 className={'flex items-center mb-2 h-8 text-xl font-bold text-dark-blue-1'}>{'H3 Bold'}</h3>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Bold'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 24px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 32px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<h2 className={'flex items-center mb-2 h-8 text-lg font-bold text-dark-blue-1'}>{'H2 Bold'}</h2>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Bold'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 20px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 32px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<h3 className={'flex items-center mb-2 h-8 text-base font-bold text-dark-blue-1'}>{'H3 Bold'}</h3>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Bold'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 16px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 24px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<p className={'flex items-center mb-2 h-8 text-base font-normal text-dark-blue-1'}>{'Body Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 16px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 24px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<p className={'flex items-center mb-2 h-8 text-sm font-bold text-dark-blue-1'}>{'Caption Bold'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Bold'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 12px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 16px'}</p>
						</div>
					</div>

					<div className={'grid grid-cols-5 gap-10'}>
						<div className={'flex flex-col col-span-1'}>
							<h3 className={'flex items-center mb-2 h-8 text-xl font-normal text-dark-blue-1'}>{'H3 Regular'}</h3>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 24px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 32px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<h2 className={'flex items-center mb-2 h-8 text-lg font-normal text-dark-blue-1'}>{'H2 Regular'}</h2>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 20px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 32px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<h3 className={'flex items-center mb-2 h-8 text-base font-normal text-dark-blue-1'}>{'H3 Regular'}</h3>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 16px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 24px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<p className={'flex items-center mb-2 h-8 text-base font-normal text-dark-blue-1'}>{'Body Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 16px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 24px'}</p>
						</div>
						<div className={'flex flex-col col-span-1'}>
							<p className={'flex items-center mb-2 h-8 text-sm font-normal text-dark-blue-1'}>{'Caption Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Roboto Regular'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Size: 12px'}</p>
							<p className={'text-sm text-gray-blue-2'}>{'Line Height: 16px'}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Index;
