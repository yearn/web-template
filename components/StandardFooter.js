import	React						from	'react';
import	Link						from	'next/link';
import	IconTwitter					from	'components/icons/IconTwitter';
import	IconGithub					from	'components/icons/IconGithub';
import	IconDiscord					from	'components/icons/IconDiscord';
import	IconMedium					from	'components/icons/IconMedium';

function	Footer() {
	return (
		<footer className={'hidden flex-row items-center py-8 px-6 mx-auto w-full max-w-6xl bg-white-blue-1 md:flex'}>
			<Link href={'/disclaimer'}>
				<p className={'pr-6 text-gray-blue-1 link'}>{'Disclaimer'}</p>
			</Link>
			<a href={'https://docs.yearn.finance'} target={'_blank'} className={'pr-6 text-gray-blue-1 link'} rel={'noreferrer'}>
				{'Documentation'}
			</a>
			<a href={'https://gov.yearn.finance/'} target={'_blank'} className={'pr-6 text-gray-blue-1 link'} rel={'noreferrer'}>
				{'Governance forum'}
			</a>
			<a href={'https://github.com/yearn/yearn-security/blob/master/SECURITY.md'} target={'_blank'} className={'pr-6 text-gray-blue-1 link'} rel={'noreferrer'}>
				{'Report a vulnerability'}
			</a>

			<div className={'px-3 ml-auto text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={'https://twitter.com/iearnfinance'} target={'_blank'} rel={'noreferrer'}><IconTwitter /></a>
			</div>
			<div className={'px-3 text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={process.env.PROJECT_GITHUB_URL} target={'_blank'} rel={'noreferrer'}><IconGithub /></a>
			</div>
			<div className={'px-3 text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={'https://discord.yearn.finance/'} target={'_blank'} rel={'noreferrer'}><IconDiscord /></a>
			</div>
			<div className={'pl-3 text-gray-blue-1 hover:text-gray-blue-2 transition-colors cursor-pointer'}>
				<a href={'https://medium.com/iearn'} target={'_blank'} rel={'noreferrer'}><IconMedium /></a>
			</div>
		</footer>
	);
}

export default Footer;
