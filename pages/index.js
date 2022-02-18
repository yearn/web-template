import	React		from	'react';
import	Browser		from	'components/Browser';


function	ColorBox({color, hex, name}) {
	return (
		<div className={'flex flex-col col-span-1'}>
			<div className={`overflow-hidden relative my-1 w-30 h-24 border border-gray-blue-3 ${color}`} />
			<p className={'mt-1 text-sm text-gray-blue-2'}>{hex}</p>
			{name ? <p className={'text-sm font-bold text-dark-blue-1'}>{name}</p> : <p className={'text-sm font-bold text-dark-blue-1'}>&nbsp;</p>}
		</div>
	);
}

function	ColorPaletteLight() {
	return (
		<div className={'mb-10 w-full'}>
			<div className={'grid grid-cols-8 gap-4 gap-y-6 w-full'}>
				<ColorBox color={'bg-light-background'} hex={'#F4F7FB'} name={'Background'} />
				<ColorBox color={'bg-light-background-variant'} hex={'#E0EAFF'} name={'Background Variant'} />
				<ColorBox color={'bg-light-surface'} hex={'#FFFFFF'} name={'Surface'} />
				<ColorBox color={'bg-light-surface-variant'} hex={'#F9FBFD'} name={'Surface Variant'} />
				<ColorBox color={'bg-light-primary'} hex={'#0657F9'} name={'Primary'} />
				<ColorBox color={'bg-light-primary-variant'} hex={'#004ADF'} name={'Primary Variant'} />
				<ColorBox color={'bg-light-secondary'} hex={'#E0EAFF'} name={'Secondary'} />
				<div />
				<ColorBox color={'bg-light-titles'} hex={'#001746'} name={'Titles'} />
				<ColorBox color={'bg-light-titles-variant'} hex={'#0657F9'} name={'Titles Variant'} />
				<ColorBox color={'bg-light-texts'} hex={'#7F8DA9'} name={'Texts'} />
				<ColorBox color={'bg-light-icons'} hex={'#CED5E3'} name={'Icons'} />
				<ColorBox color={'bg-light-icons-variant'} hex={'#475570'} name={'Icons-Variant'} />
			</div>
		</div>
	);
}

function	ColorPaletteDark() {
	return (
		<div className={'mb-10 w-full'}>
			<div className={'grid grid-cols-8 gap-4 gap-y-6 w-full'}>
				<ColorBox color={'bg-dark-background'} hex={'#141414'} name={'Background'} />
				<ColorBox color={'bg-dark-background-variant'} hex={'#272727'} name={'Background Variant'} />
				<ColorBox color={'bg-dark-surface'} hex={'#000000'} name={'Surface'} />
				<ColorBox color={'bg-dark-surface-variant'} hex={'#191919'} name={'Surface Variant'} />
				<ColorBox color={'bg-dark-primary'} hex={'#FFFFFF'} name={'Primary'} />
				<ColorBox color={'bg-dark-primary-variant'} hex={'#FFFFFF'} name={'Primary Variant'} />
				<ColorBox color={'bg-dark-secondary'} hex={'#272727'} name={'Secondary'} />
				<div />
				<ColorBox color={'bg-dark-titles'} hex={'#FFFFFF'} name={'Titles'} />
				<ColorBox color={'bg-dark-titles-variant'} hex={'#FFFFFF'} name={'Titles Variant'} />
				<ColorBox color={'bg-dark-texts'} hex={'#A8A8A8'} name={'Texts'} />
				<ColorBox color={'bg-dark-icons'} hex={'#A8A8A8'} name={'Icons'} />
				<ColorBox color={'bg-dark-icons-variant'} hex={'#FFFFFF'} name={'Icons-Variant'} />
			</div>
		</div>
	);
}


function	ColorPaletteBlue() {
	return (
		<div className={'mb-10 w-full'}>
			<div className={'grid grid-cols-8 gap-4 gap-y-6 w-full'}>
				<ColorBox color={'bg-blue-background'} hex={'#012A7C'} name={'Background'} />
				<ColorBox color={'bg-blue-background-variant'} hex={'#001E59'} name={'Background Variant'} />
				<ColorBox color={'bg-blue-surface'} hex={'#001746'} name={'Surface'} />
				<ColorBox color={'bg-blue-surface-variant'} hex={'#012A7C'} name={'Surface Variant'} />
				<ColorBox color={'bg-blue-primary'} hex={'#0657F9'} name={'Primary'} />
				<ColorBox color={'bg-blue-primary-variant'} hex={'#004ADF'} name={'Primary Variant'} />
				<ColorBox color={'bg-blue-secondary'} hex={'#0657F9'} name={'Secondary'} />
				<div />
				<ColorBox color={'bg-blue-titles'} hex={'#FFFFFF'} name={'Titles'} />
				<ColorBox color={'bg-blue-titles-variant'} hex={'#FFFFFF'} name={'Titles Variant'} />
				<ColorBox color={'bg-blue-texts'} hex={'#7F8DA9'} name={'Texts'} />
				<ColorBox color={'bg-blue-icons'} hex={'#7F8DA9'} name={'Icons'} />
				<ColorBox color={'bg-blue-icons-variant'} hex={'#FFFFFF'} name={'Icons-Variant'} />
			</div>
		</div>
	);
}

function	ThemeSection({theme}) {
	if (theme === 'light') {
		return (
			<div className={''}>
				<div className={'flex flex-wrap'}>
					<ColorPaletteLight />
				</div>
				<Browser theme={theme} /> 
			</div>
		);
	}

	if (theme === 'dark') {
		return (
			<div className={''}>
				<div className={'flex flex-wrap'}>
					<ColorPaletteDark />
				</div>
				<Browser theme={theme} /> 
			</div>
		);
	}
		
	if (theme === 'blue') {
		return (
			<div className={''}>
				<div className={'flex flex-wrap'}>
					<ColorPaletteBlue />
				</div>
				<Browser theme={theme} /> 
			</div>
		);
	}


}

function	Index() {
	const	[theme, set_theme] = React.useState('light');

	return (
		<div className={'p-6 w-full bg-white'}>
			<div className={'flex flex-row justify-between mb-8'}>
				<div className={'flex flex-row items-center'}>
					<div className={'mr-4 w-4 h-4 bg-yearn-blue rounded-sm'} />
					<h1 className={'text-4xl font-bold text-dark-blue-1'}>{'Yearn Theme System'}</h1>
				</div>
				<div>
					<select
						onChange={e => set_theme(e.target.value)}
						className={'relative py-1 w-33 text-light-primary-variant bg-light-secondary rounded-md border-none focus:border-none outline-none focus:outline-none ring-0 focus:ring-0 cursor-pointer'}>
						<option value={'light'}>{'Light'}</option>
						<option value={'dark'}>{'Dark'}</option>
						<option value={'blue'}>{'Blue'}</option>
					</select>
				</div>
			</div>
			<ThemeSection theme={theme} />
		</div>
	);
}
// className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"


export default Index;
