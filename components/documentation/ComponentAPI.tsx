import	React, {ReactElement}		from	'react';

type 		TComponentAPI = {
	elements: {
		title: string,
		type: string,
		description: string
	}[]
}
function	ComponentAPI({elements}: TComponentAPI): ReactElement {
	return (
		<section aria-label={'component API'} className={'mt-6'}>
			<h4>{'Component API'}</h4>
			<dl className={'mt-4 space-y-4 w-full divide-y divide-surface'}>
				{elements.map((element, index): ReactElement => (
					<dd
						key={`${element.title}_${index}`}
						className={'grid grid-cols-12 p-4 rounded-lg bg-background'}>
						<div className={'col-span-2'}>
							<b className={'font-mono break-words'}>{element.title}</b>
						</div>
						<div className={'col-span-4 pl-2 whitespace-pre'}>
							<p className={'font-mono'}>{element.type}</p>
						</div>
						<div className={'col-span-6 pl-4'}>
							<p className={'font-mono'}>{element.description}</p>
						</div>
					</dd>
				))}
			</dl>
		</section>
	);
}
export default ComponentAPI;
