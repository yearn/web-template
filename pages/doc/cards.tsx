import	React, {ReactElement}		from	'react';
import	{Card}						from	'@majorfi/web-lib/components';
import	Highlight, {defaultProps}	from	'prism-react-renderer';
import	vsDark						from	'prism-react-renderer/themes/vsDark';


// The code snippet you want to highlight, as a string
const code = `
import	React	from	'react';
import	{Card}	from	'@majorfi/web-lib/components';

export default function	App(): React.ReactElement {
	return (
		<Card>
			<p className={'text-typo-primary'}>{'I am a basic card.'}</p>
		</Card>
	);
}`.trim();


function	DocumentationCard(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<Card>
				<h1 className={'mb-2 text-3xl text-typo-primary'}>{'Card'}</h1>				
				<div className={'flex justify-center items-center p-4 w-full min-h-[20rem] rounded-lg bg-gradient-default'}>
					<div className={'w-3/4'}>
						<Card>
							<p className={'text-typo-primary'}>{'I am a basic card.'}</p>
						</Card>
					</div>
				</div>
				<div>
					<Highlight {...defaultProps} theme={vsDark} code={code} language={'tsx'}>
						{({className, style, tokens, getLineProps, getTokenProps}): ReactElement => (
							<pre className={className} style={style}>
								{tokens.map((line, i): ReactElement => (
									<div key={i} {...getLineProps({line, key: i})}>
										{line.map((token, key): ReactElement => (
											<span key={key} {...getTokenProps({token, key})} />
										))}
									</div>
								))}
							</pre>
						)}
					</Highlight>
				</div>

				<h4 className={'mt-6 mb-1'}>{'Description'}</h4>
				<p className={'mb-2'}>{'The Card is one of the main wrapper for the UI components, displayed on a surface. It is used to represent a section or a group of related items over the background.'}</p>
				<p className={'mb-4'}>{'The Card is a default component, and a few subcomponents are available, using the base logic, in order to build more complexe stuffs.'}</p>

				<div className={'mt-6'}>
					<h4>{'Component API'}</h4>
					<div className={'mt-4 space-y-4 w-full divide-y divide-surface'}>
						<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
							<div className={'col-span-2'}>
								<b className={'font-mono'}>{'variant?'}</b>
							</div>
							<div className={'col-span-4'}>
								<p className={'font-mono'}>{'\'surface\' | \'background\''}</p>
							</div>
							<div className={'col-span-6 pl-4'}>
								<p className={'font-mono'}>{'Used to indicate if the Card is displayed on the Background (use surface) or on a Surface (use background). Default set to surface.'}</p>
							</div>
						</div>

						<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
							<div className={'col-span-2'}>
								<b className={'font-mono'}>{'padding?'}</b>
							</div>
							<div className={'col-span-4'}>
								<p className={'font-mono'}>{'\'none\' | \'narrow\' | \'regular\''}</p>
							</div>
							<div className={'col-span-6 pl-4'}>
								<p className={'font-mono'}>{'Indicate is the card should use no padding (0px), narrow padding (8px) or regular (16px). Default set to regular.'}</p>
							</div>
						</div>

						<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
							<div className={'col-span-2'}>
								<b className={'font-mono'}>{'onClick?'}</b>
							</div>
							<div className={'col-span-4'}>
								<p className={'font-mono'}>{'React.MouseEventHandler'}</p>
							</div>
							<div className={'col-span-6 pl-4'}>
								<p className={'font-mono'}>{'If onClick is set, this will enable the hover variant for the card. This does not overwrite the onClick function. Default to undefined.'}</p>
							</div>
						</div>

						<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
							<div className={'col-span-2'}>
								<b className={'font-mono'}>{'className?'}</b>
							</div>
							<div className={'col-span-4'}>
								<p className={'font-mono'}>{'string'}</p>
							</div>
							<div className={'col-span-6 pl-4'}>
								<p className={'font-mono'}>{'Custom className to provide to alter the style of the Card.'}</p>
							</div>
						</div>

					</div>
				</div>

			</Card>
		</section>
	);
}

export default DocumentationCard;
