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
		<Card.Tabs
			tabs={[
				{label: 'Details', children: <b className={'text-typo-primary'}>{'I am the first card.'}</b>},
				{label: 'Reports', children: <p className={'text-typo-primary'}>{'I am the second Tab'}</p>},
				{label: 'Health Check', children: <p className={'text-typo-primary'}>{'And a third one?'}</p>}
			]}
		/>
	);
}`.trim();


function	DocumentationCard(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<Card>
				<h1 className={'mb-2 text-3xl text-typo-primary'}>{'Card.Tabs'}</h1>
				<div className={'flex justify-center items-center p-4 w-full min-h-[20rem] rounded-lg bg-gradient-default'}>
					<div className={'w-3/4'}>
						<Card.Tabs
							tabs={[
								{label: 'Details', children: <b className={'text-typo-primary'}>{'I am the first card.'}</b>},
								{label: 'Reports', children: <p className={'text-typo-primary'}>{'I am the second Tab'}</p>},
								{label: 'Health Check', children: <p className={'text-typo-primary'}>{'And a third one?'}</p>}
							]}
						/>
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
				<p className={'mb-4'}>{'The Card.Tabs is a variant of Card that will display the Card with some available Tabs.'}</p>

				<div className={'mt-6'}>
					<h4>{'Component API'}</h4>
					<div className={'mt-4 space-y-4 w-full divide-y divide-surface'}>
						<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
							<div className={'col-span-2'}>
								<b className={'font-mono'}>{'tabs'}</b>
							</div>
							<div className={'col-span-4'}>
								<p className={'font-mono whitespace-pre'}>{'[{\n\tlabel: string,\n\tchildren: ReactElement\n}]'}</p>
							</div>
							<div className={'col-span-6 pl-4'}>
								<p className={'font-mono'}>{'Array of object containing a label, aka the title of the tab, and a children for each tab. You can have as many tab as you want, until the UI breaks (recommanded with 2/3 tabs max)'}</p>
							</div>
						</div>
					</div>
				</div>

			</Card>
		</section>
	);
}

export default DocumentationCard;
