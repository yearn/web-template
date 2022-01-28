import	React, {Fragment, useRef}		from	'react';
import	{Dialog, Transition}			from	'@headlessui/react';
import	IconOfficialMetamask			from	'components/icons/IconOfficialMetamask';
import	IconOfficialWalletConnect		from	'components/icons/IconOfficialWalletConnect';

function	Login({connect, walletType, set_open}) {
	return (
		<div className={'p-6 space-y-4'}>
			<div
				onClick={() => {
					connect(walletType.METAMASK);
					set_open(false);
				}}
				className={'flex flex-col justify-center items-center p-6 text-center bg-white-blue-2 hover:bg-white-blue-1 rounded-sm transition-colors cursor-pointer'}>
				<div>
					<IconOfficialMetamask className={'w-12 h-12'} />
				</div>
				<h3 className={'mt-2 text-lg font-bold text-dark-blue-1'}>{'Metamask'}</h3>
				<p className={'text-gray-blue-1'}>{'Connect with Metamask'}</p>
			</div>
			<div
				onClick={() => {
					connect(walletType.WALLET_CONNECT);
					set_open(false);
				}}
				className={'flex flex-col justify-center items-center p-6 text-center bg-white-blue-2 hover:bg-white-blue-1 rounded-sm transition-colors cursor-pointer'}>
				<div>
					<IconOfficialWalletConnect className={'w-12 h-12'} />
				</div>
				<h3 className={'text-2xl font-bold text-dark-blue-1'}>{'WalletConnect'}</h3>
				<p className={'text-gray-blue-1'}>{'Scan with WalletConnect to connect'}</p>
			</div>
		</div>
	);
}

function	ModalLogin({open, set_open, connect, walletType}) {
	const	walletConnectRef = useRef();

	return (
		<Transition.Root show={open} as={Fragment}>
			<Dialog
				as={'div'}
				static
				className={'overflow-y-auto fixed inset-0'}
				style={{zIndex: 9999999}}
				initialFocus={walletConnectRef}
				open={open}
				onClose={set_open}>
				<div className={'flex justify-center items-end px-4 pt-4 pb-20 min-h-screen text-center sm:block sm:p-0'}>
					<Transition.Child
						as={Fragment}
						enter={'ease-out duration-300'} enterFrom={'opacity-0'} enterTo={'opacity-100'}
						leave={'ease-in duration-200'} leaveFrom={'opacity-100'} leaveTo={'opacity-0'}>
						<Dialog.Overlay className={'fixed inset-0 z-10 bg-dark-blue-1 opacity-50 transition-opacity'} />
					</Transition.Child>

					<span className={'hidden sm:inline-block sm:h-screen sm:align-middle'} aria-hidden={'true'}>
						&#8203;
					</span>
					<Transition.Child
						as={Fragment}
						enter={'ease-out duration-300'}
						enterFrom={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}
						enterTo={'opacity-100 translate-y-0 sm:scale-100'}
						leave={'ease-in duration-200'}
						leaveFrom={'opacity-100 translate-y-0 sm:scale-100'}
						leaveTo={'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'}>
						<div ref={walletConnectRef} className={'inline-block overflow-hidden relative z-50 text-left align-bottom bg-white rounded-sm shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle md:mb-96'}>
							<Login connect={connect} walletType={walletType} set_open={set_open} />
						</div>
					</Transition.Child>
				</div>
			</Dialog>
		</Transition.Root>
	);
}


export default ModalLogin;