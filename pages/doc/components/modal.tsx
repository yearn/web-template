import	React, {ReactElement}		from	'react';
import	{Card, Button, Modal}		from	'@majorfi/web-lib/components';
import	ComponentAPI				from	'components/documentation/ComponentAPI';
import	Highlight					from	'components/documentation/Highlight';

const code = `
import	React					from	'react';
import	{Button, Modal, Card}	from	'@majorfi/web-lib/components';

export default function	App(): React.ReactElement {
	return (
		<>
			<Button
				onClick={(): void => set_isOpen(true)}
				className={'min-w-[132px]'}>
				{'Open Modal'}
			</Button>
			<Modal isOpen={isOpen} onClose={(): void => set_isOpen(false)}>
				<Card className={'flex-center'}>
					<Button
						onClick={(): void => set_isOpen(false)}
						className={'min-w-[132px]'}>
						{'Close Modal'}
					</Button>
				</Card>
			</Modal>
		</>
	);
}`.trim();

function	DocumentationModal(): ReactElement {
	const	[isOpen, set_isOpen] = React.useState(false);

	return (
		<section aria-label={'some default section'}>
			<Card>
				<h1 className={'mb-2 text-3xl text-typo-primary'}>{'Modal'}</h1>
				<div className={'box-gradient-alt'}>
					<Button
						onClick={(): void => set_isOpen(true)}
						className={'min-w-[132px]'}>
						{'Open Modal'}
					</Button>
					<Modal isOpen={isOpen} onClose={(): void => set_isOpen(false)}>
						<Card className={'flex-center'}>
							<Button
								onClick={(): void => set_isOpen(false)}
								className={'min-w-[132px]'}>
								{'Close Modal'}
							</Button>
						</Card>
					</Modal>
				</div>
				<Highlight code={code} />

				<h4 className={'mt-6 mb-1'}>{'Description'}</h4>
				<p className={'mb-2'}>{'The Modal component will open a portal displayed on top of the UI. The content will be centered and a light background will be put over the app. The scroll will be disable and any click outside of that modal will close it.'}</p>
				<p className={'mb-4'}>{'You can put anything inside this modal, but keep in mind the fact that it comes unstyled.'}</p>
				<ComponentAPI
					elements={[{
						title: 'isOpen',
						type: 'boolean',
						description: 'Should the modal be displayed or not. The modal is displayed and rendered on true, and removed from the DOM on false.'
					},
					{
						title: 'onClose',
						type: 'function',
						description: 'Action to perform in order to close the modal. Will be triggered by any action supposed to close that modal (escape, background click, etc.)'
					}]} />
			</Card>
		</section>
	);
}

export default DocumentationModal;
