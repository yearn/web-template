import	React						from	'react';
import	IconTwitter					from	'components/icons/IconTwitter';
import	IconGithub					from	'components/icons/IconGithub';
import	IconDiscord					from	'components/icons/IconDiscord';
import	IconMedium					from	'components/icons/IconMedium';

function	Footer({children}) {
	return (
		<footer className={'flex flex-row items-center py-8 px-6 mx-auto w-full max-w-6xl bg-white-blue-1'}>
			<p className={'pr-6 text-gray-blue-1'}>{'Disclaimer'}</p>
			<a href={'http://docs.yearn.finance'} target={'_blank'} className={'pr-6 text-gray-blue-1 link'} rel={'noreferrer'}>
				{'Documentation'}
			</a>
			<a href={'https://gov.yearn.finance/'} target={'_blank'} className={'pr-6 text-gray-blue-1 link'} rel={'noreferrer'}>
				{'Governance forum'}
			</a>
			<a href={'https://github.com/yearn/yearn-security/blob/master/SECURITY.md'} target={'_blank'} className={'pr-6 text-gray-blue-1 link'} rel={'noreferrer'}>
				{'Report a vulnerability'}
			</a>
			{children}

			<div className={'px-3 text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={'https://twitter.com/iearnfinance'} target={'_blank'} rel={'noreferrer'}><IconTwitter /></a>
			</div>
			<div className={'px-3 text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={process.env.PROJECT_GITHUB_URL} target={'_blank'} rel={'noreferrer'}><IconGithub /></a>
			</div>
			<div className={'px-3 text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={'https://discord.com/invite/6PNv2nF'} target={'_blank'} rel={'noreferrer'}><IconDiscord /></a>
			</div>
			<div className={'pl-3 text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={'https://medium.com/iearn'} target={'_blank'} rel={'noreferrer'}><IconMedium /></a>
			</div>
		</footer>
	);
}

export default Footer;
