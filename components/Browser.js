import	React			from	'react';
import	Token			from	'@yearn/yearn-web-tokens';
import	ReactTooltip	from	'react-tooltip';
import	IconChevron		from	'components/icons/IconChevron';

function	MainFakeBrowser({theme = 'dark'}) {

	return (
		<div
			data-for={`${theme}-backgroundabs`} data-tip={'background: background'} data-class={'z-0'}
			className={`aspect-video overflow-hidden relative py-10 px-4 mx-auto w-full bg-${theme}-background rounded-md shadow-sm fake-browser-controls`}
			style={theme === 'blue' ? {backgroundImage: 'url(/bg-blue.png)', backgroundSize: 'cover', backgroundPositionY: '90%'} : {}}>
			<div className={'mx-auto w-10/12'}>
				<div
					data-for={`${theme}-surface`} data-tip={'background: surface'}
					className={`flex flex-row justify-between items-center p-4 mb-4 w-full bg-${theme}-surface rounded-md`}>
					<p
						data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
						data-iscapture={'true'} className={`text-lg font-bold text-${theme}-titles`}>
						{'Yearn'}
					</p>
					<div>
						<button
							data-for={'button'} data-tip={'color: titlesVariant<br />background: secondary'} data-class={'z-50'}
							className={`py-1 w-20 text-sm text-${theme}-titlesVariant bg-${theme}-secondary rounded-md`}>
							{'hentai.eth'}
						</button>
					</div>
				</div>

				<div
					data-for={'banner'} data-tip={'color: primary<br />background: backgroundVariant<br />border: primary'} data-class={'z-50'}
					className={`p-4 mb-4 w-full bg-${theme}-backgroundVariant rounded-md border border-${theme}-primary`}>
					<p className={`mb-4 text-base font-bold text-${theme}-primary`}>{'Welcome to your Portfolio screen'}</p>
					<p className={`mb-2 text-sm text-${theme}-primary`}>{'There are many like it, but this one is yours. You can always return here for a bird`s-eye view of your holdings. The cards below show the total balance and utilization of your wallet, and the holdings and performance for every Yearn product you use.'}</p>
					<p className={`text-sm text-${theme}-primary`}>{'Not sure where to start? Check out “Vaults” on the left side navigation.'}</p>
				</div>

				<div className={'flex flex-row pb-4 space-x-4'}>
					<div
						data-for={`${theme}-surface`} data-tip={'background: surface'}
						className={`p-4 w-full bg-${theme}-surface rounded-md`}>
						<div className={'w-fit'}>
							<p
								data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
								className={`pb-4 text-base text-${theme}-titles font-bold`}>{'Highest APY'}</p>
						</div>
						<div className={'grid grid-cols-3 gap-4'}>
							<div
								data-for={`${theme}-background`} data-tip={'background: background'} data-class={'z-20'}
								className={`p-4 bg-${theme}-background rounded flex flex-row items-center z-20 relative`}>
								<div className={'mr-4'}>
									<Token
										width={48}
										height={48}
										address={'0x6B175474E89094C44Da98b954EedeAC495271d0F'}
										chainID={'1'} />
								</div>
								<div>
									<p
										data-for={`${theme}-texts`} data-tip={'color: texts'}
										className={`mb-1 text-xs text-${theme}-texts`}>
										{'yvDAI'}
									</p>
									<p
										data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
										className={`font-bold text-${theme}-titles`}>
										{'46.37 %'}
									</p>	
								</div>
								<div className={'ml-auto'}>
									<IconChevron className={`w-4 h-4 text-${theme}-primary rotate-180`} />
								</div>
							</div>
							<div
								data-for={`${theme}-background`} data-tip={'background: background'} data-class={'z-20'}
								className={`p-4 bg-${theme}-background rounded flex flex-row items-center z-20`}>
								<div className={'mr-4'}>
									<Token
										width={48}
										height={48}
										address={'0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'}
										chainID={'1'} />
								</div>
								<div>
									<p
										data-for={`${theme}-texts`} data-tip={'color: texts'}
										className={`mb-1 text-xs text-${theme}-texts`}>
										{'yvETH'}
									</p>
									<p
										data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
										className={`font-bold text-${theme}-titles`}>
										{'44.08 %'}
									</p>	
								</div>
								<div className={'ml-auto'}>
									<IconChevron className={`w-4 h-4 text-${theme}-primary rotate-180`} />
								</div>
							</div>
							<div
								data-for={`${theme}-background`} data-tip={'background: background'} data-class={'z-20'}
								className={`p-4 bg-${theme}-background rounded flex flex-row items-center z-20`}>
								<div className={'mr-4'}>
									<Token
										width={48}
										height={48}
										address={'0xdAC17F958D2ee523a2206206994597C13D831ec7'}
										chainID={'1'} />
								</div>
								<div>
									<p
										data-for={`${theme}-texts`} data-tip={'color: texts'}
										className={`mb-1 text-xs text-${theme}-texts`}>
										{'yvUSDT'}
									</p>
									<p
										data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
										className={`font-bold text-${theme}-titles`}>
										{'40.09 %'}
									</p>	
								</div>
								<div className={'ml-auto'}>
									<IconChevron className={`w-4 h-4 text-${theme}-primary rotate-180`} />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={'flex flex-row pb-4 space-x-4'}>
					<div
						data-for={`${theme}-surface`} data-tip={'background: surface'}
						className={`p-4 w-full bg-${theme}-surface rounded-md`}>
						<p
							data-for={`${theme}-texts`} data-tip={'color: texts'} data-class={'z-50'}
							className={`pb-1 text-xs text-${theme}-texts`}>
							{'Total net worth'}
						</p>
						<p
							data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
							className={`text-sm font-bold text-${theme}-titles`}>
							{'$ 21,275.55'}
						</p>
					</div>
					<div
						data-for={`${theme}-surface`} data-tip={'background: surface'}
						className={`p-4 w-full bg-${theme}-surface rounded-md`}>
						<div className={'flex flex-row justify-between items-center mb-4'}>
							<p
								data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
								className={`text-base font-bold text-${theme}-titles`}>
								{'Vaults'}
							</p>
							<IconChevron className={`w-4 h-4 text-${theme}-primary rotate-180`} />
						</div>
						<div className={'grid grid-cols-2'}>
							<div>
								<p
									data-for={`${theme}-texts`} data-tip={'color: texts'} data-class={'z-50'}
									className={`mb-1 text-xs text-${theme}-texts`}>
									{'Holdings'}
								</p>
								<p
									data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
									className={`font-bold text-${theme}-titles`}>
									{'$ 12,803.19'}
								</p>
							</div>
							<div>
								<p className={`mb-1 text-xs text-${theme}-texts`}>{'APY'}</p>
								<p
									data-for={`${theme}-titles`} data-tip={'color: titles'} data-class={'z-50'}
									className={`font-bold text-${theme}-titles`}>
									{'0.35%'}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={'flex flex-row pb-4 space-x-4'}>
					<div
						data-for={`${theme}-surface`} data-tip={'background: surface'}
						className={`p-4 w-full bg-${theme}-surface rounded-md`}>
						<div className={'flex flex-row space-x-4'}>
							<button
								data-for={'button'} data-tip={'color: titlesVariant<br />background: secondary'} data-class={'z-50'}
								className={`p-2 text-sm text-${theme}-button-filled-text bg-${theme}-button-filled-primary hover:bg-${theme}-button-filled-variant rounded-md font-bold`}>
								{'This is my button'}
							</button>

							<button
								data-for={'button'} data-tip={'color: titlesVariant<br />background: secondary'} data-class={'z-50'}
								className={`p-2 text-sm text-${theme}-button-disabled-text bg-${theme}-button-disabled-primary cursor-not-allowed rounded-md font-bold`}>
								{'This is my disabled button'}
							</button>

							<button
								data-for={'button'} data-tip={'color: titlesVariant<br />background: secondary'} data-class={'z-50'}
								className={`p-2 text-sm text-${theme}-button-outlined-text border-${theme}-button-outlined-text hover:bg-${theme}-button-outlined-variant border rounded-md`}>
								{'This is my outlined button'}
							</button>

							<button
								data-for={'button'} data-tip={'color: titlesVariant<br />background: secondary'} data-class={'z-50'}
								className={`p-2 text-sm text-${theme}-button-disabled-text border-${theme}-button-disabled-text border cursor-not-allowed rounded-md`}>
								{'This is my outlined disabled button'}
							</button>
						</div>
					</div>
				</div>

			</div>
			<ReactTooltip className={'tooltip'} multiline={true} id={`${theme}-backgroundabs`} />
			<ReactTooltip className={'tooltip'} multiline={true} id={`${theme}-surface`} />
			<ReactTooltip className={'tooltip'} multiline={true} id={`${theme}-background`} />
			<ReactTooltip className={'tooltip'} multiline={true} id={`${theme}-titles`} />
			<ReactTooltip className={'tooltip'} multiline={true} id={`${theme}-texts`} />
			<ReactTooltip className={'tooltip'} multiline={true} id={'banner'} />
			<ReactTooltip className={'tooltip'} multiline={true} id={'button'} />
		</div>
	);
}

export default MainFakeBrowser;