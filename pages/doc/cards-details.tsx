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
		<Card.Detail
			summary={(p: unknown): ReactElement => (
				<Card.Detail.Summary startChildren={<p>{'Hello'}</p>} {...p} />
			)}>
			<div className={'text-typo-primary'}>
				{'Dolore pariatur aut facilis. Molestiae quam voluptates tenetur quaerat aut rem maiores rem. Vero ducimus aut praesentium quaerat quia. Necessitatibus ea aut expedita reiciendis.'}
				{'Laboriosam et natus natus sed beatae. Quia in magni minus inventore ipsa repudiandae. Provident debitis impedit doloremque harum dolorum sit. Ut eaque recusandae ad cupiditate autem facilis. Molestiae possimus ea doloribus magnam asperiores aut sit. Iure sit et excepturi voluptas id.'}
			</div>
		</Card.Detail>
	);
}`.trim();

const codeAlt = `
import	React	from	'react';
import	{Card}	from	'@majorfi/web-lib/components';

export default function	App(): React.ReactElement {
	return (
		<Card.Detail.Summary
			startChildren={<p>{'Left (start) part'}</p>}
			endChildren={<p>{'Right (end) part'}</p>}
			{...p} />
	);
}`.trim();


function	DocumentationCard(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<Card>
				<h1 className={'mb-2 text-3xl text-typo-primary'}>{'Card.Detail'}</h1>
				<section aria-label={'code-part'}>
					<div className={'flex justify-center p-4 w-full min-h-[20rem] rounded-lg bg-gradient-default'}>
						<div className={'w-3/4'}>
							<Card.Detail
								variant={'surface'}
								summary={(p: unknown): ReactElement => (
									<Card.Detail.Summary startChildren={<p>{'Hello'}</p>} {...p} />
								)}>
								<div className={'text-typo-primary'}>
									{'Dolore pariatur aut facilis. Molestiae quam voluptates tenetur quaerat aut rem maiores rem. Vero ducimus aut praesentium quaerat quia. Necessitatibus ea aut expedita reiciendis.'}
									{'Laboriosam et natus natus sed beatae. Quia in magni minus inventore ipsa repudiandae. Provident debitis impedit doloremque harum dolorum sit. Ut eaque recusandae ad cupiditate autem facilis. Molestiae possimus ea doloribus magnam asperiores aut sit. Iure sit et excepturi voluptas id.'}
								</div>
							</Card.Detail>
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
				</section>

				<section aria-label={'description-part'} className={'mt-6'}>
					<h4 className={'mb-1'}>{'Description'}</h4>
					<p className={'mb-2'}>{'The Detail variant of the Card is an attempt to replicate how the <detail> and <summary> htmls tags are working, with some twists as they are not easy to customize and do not fill all our needs.'}</p>
					<p className={'mb-4'}>{'This component can be divided in two distincts parts: the Details and the Summary. The Summary represents the always-visible-part, kind of the header of the card. The Details is the Wrapper, and it\'s child will be the expandable part.'}</p>

					<div className={'mt-6'}>
						<h4>{'Component API'}</h4>
						<div className={'mt-4 space-y-4 w-full divide-y divide-surface'}>
							<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
								<div className={'col-span-2'}>
									<b className={'font-mono'}>{'summary'}</b>
								</div>
								<div className={'col-span-4'}>
									<p className={'font-mono whitespace-pre'}>{'TCardDetailSummary'}</p>
								</div>
								<div className={'col-span-6 pl-4'}>
									<p className={'font-mono'}>{'See below'}</p>
								</div>
							</div>

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
									<b className={'font-mono'}>{'isSticky?'}</b>
								</div>
								<div className={'col-span-4'}>
									<p className={'font-mono'}>{'boolean'}</p>
								</div>
								<div className={'col-span-6 pl-4'}>
									<p className={'font-mono'}>{'Indicate if the Summary should be sticky on scroll, aka if this should stay on top of the screen if you scroll and if you are still in the expanded details. Has no effect on mobile. Default set to true.'}</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section aria-label={'extra-code-part'} className={'mt-10'}>
					<h1 className={'mb-2 text-3xl text-typo-primary'}>{'Card.Detail.Summary'}</h1>
					<div>
						<Highlight {...defaultProps} theme={vsDark} code={codeAlt} language={'tsx'}>
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
					<section aria-label={'description-part'} className={'mt-6'}>
						<h4 className={'mb-1'}>{'Description'}</h4>
						<p className={'mb-2'}>{'Special subcomponent used to handle the Summary. The Summary is splitted in two parts, Start and End, which represent the left and the right part. Both are separated with a justify-between class.'}</p>
						<p className={'mb-4'}>{'The arrow on the end part with it\'s rotation is set in the lib.'}</p>

						<div className={'mt-6'}>
							<h4>{'Component API'}</h4>
							<div className={'mt-4 space-y-4 w-full divide-y divide-surface'}>
								<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
									<div className={'col-span-2'}>
										<b className={'font-mono'}>{'startChildren'}</b>
									</div>
									<div className={'col-span-4'}>
										<p className={'font-mono whitespace-pre'}>{'ReactNode'}</p>
									</div>
									<div className={'col-span-6 pl-4'}>
										<p className={'font-mono'}>{'Children displayed on the start part.'}</p>
									</div>
								</div>

								<div className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
									<div className={'col-span-2'}>
										<b className={'font-mono'}>{'endChildren'}</b>
									</div>
									<div className={'col-span-4'}>
										<p className={'font-mono'}>{'ReactNode'}</p>
									</div>
									<div className={'col-span-6 pl-4'}>
										<p className={'font-mono'}>{'Children displayed on the end part.'}</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>

			</Card>
		</section>
	);
}

export default DocumentationCard;
