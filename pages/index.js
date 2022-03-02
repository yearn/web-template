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
				<ColorBox color={'bg-light-backgroundVariant'} hex={'#E0EAFF'} name={'Background Variant'} />
				<ColorBox color={'bg-light-surface'} hex={'#FFFFFF'} name={'Surface'} />
				<ColorBox color={'bg-light-surfaceVariant'} hex={'#F9FBFD'} name={'Surface Variant'} />
				<ColorBox color={'bg-light-primary'} hex={'#0657F9'} name={'Primary'} />
				<ColorBox color={'bg-light-primaryVariant'} hex={'#004ADF'} name={'Primary Variant'} />
				<ColorBox color={'bg-light-secondary'} hex={'#E0EAFF'} name={'Secondary'} />
				<div />
				<ColorBox color={'bg-light-titles'} hex={'#001746'} name={'Titles'} />
				<ColorBox color={'bg-light-titlesVariant'} hex={'#0657F9'} name={'Titles Variant'} />
				<ColorBox color={'bg-light-texts'} hex={'#7F8DA9'} name={'Texts'} />
				<ColorBox color={'bg-light-icons-primary'} hex={'#CED5E3'} name={'Icons Primary'} />
				<ColorBox color={'bg-light-icons-variant'} hex={'#475570'} name={'icons-variant'} />
			</div>
		</div>
	);
}

function	ColorPaletteDark() {
	return (
		<div className={'mb-10 w-full'}>
			<div className={'grid grid-cols-8 gap-4 gap-y-6 w-full'}>
				<ColorBox color={'bg-dark-background'} hex={'#141414'} name={'Background'} />
				<ColorBox color={'bg-dark-backgroundVariant'} hex={'#272727'} name={'Background Variant'} />
				<ColorBox color={'bg-dark-surface'} hex={'#000000'} name={'Surface'} />
				<ColorBox color={'bg-dark-surfaceVariant'} hex={'#191919'} name={'Surface Variant'} />
				<ColorBox color={'bg-dark-primary'} hex={'#FFFFFF'} name={'Primary'} />
				<ColorBox color={'bg-dark-primaryVariant'} hex={'#FFFFFF'} name={'Primary Variant'} />
				<ColorBox color={'bg-dark-secondary'} hex={'#272727'} name={'Secondary'} />
				<div />
				<ColorBox color={'bg-dark-titles'} hex={'#FFFFFF'} name={'Titles'} />
				<ColorBox color={'bg-dark-titlesVariant'} hex={'#FFFFFF'} name={'Titles Variant'} />
				<ColorBox color={'bg-dark-texts'} hex={'#A8A8A8'} name={'Texts'} />
				<ColorBox color={'bg-dark-icons-primary'} hex={'#A8A8A8'} name={'Icons Primary'} />
				<ColorBox color={'bg-dark-icons-variant'} hex={'#FFFFFF'} name={'icons-variant'} />
			</div>
		</div>
	);
}


function	ColorPaletteBlue() {
	return (
		<div className={'mb-10 w-full'}>
			<div className={'grid grid-cols-8 gap-4 gap-y-6 w-full'}>
				<ColorBox color={'bg-blue-background'} hex={'#012A7C'} name={'Background'} />
				<ColorBox color={'bg-blue-backgroundVariant'} hex={'#001E59'} name={'Background Variant'} />
				<ColorBox color={'bg-blue-surface'} hex={'#001746'} name={'Surface'} />
				<ColorBox color={'bg-blue-surfaceVariant'} hex={'#012A7C'} name={'Surface Variant'} />
				<ColorBox color={'bg-blue-primary'} hex={'#0657F9'} name={'Primary'} />
				<ColorBox color={'bg-blue-primaryVariant'} hex={'#004ADF'} name={'Primary Variant'} />
				<ColorBox color={'bg-blue-secondary'} hex={'#0657F9'} name={'Secondary'} />
				<div />
				<ColorBox color={'bg-blue-titles'} hex={'#FFFFFF'} name={'Titles'} />
				<ColorBox color={'bg-blue-titlesVariant'} hex={'#FFFFFF'} name={'Titles Variant'} />
				<ColorBox color={'bg-blue-texts'} hex={'#7F8DA9'} name={'Texts'} />
				<ColorBox color={'bg-blue-icons-primary'} hex={'#7F8DA9'} name={'Icons Primary'} />
				<ColorBox color={'bg-blue-icons-variant'} hex={'#FFFFFF'} name={'icons-variant'} />
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
						className={'relative py-1 w-33 text-light-primaryVariant bg-light-secondary rounded-md border-none focus:border-none outline-none focus:outline-none ring-0 focus:ring-0 cursor-pointer'}>
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

export default Index;
