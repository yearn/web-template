import React from 'react';
import {AnimatePresence, motion} from 'framer-motion';

import type {NextRouter} from 'next/router';
import type {ReactElement} from 'react';

const transition = {duration: 0.3, ease: 'easeInOut'};

const variants = {
	initial: {y: -80, opacity: 0, transition},
	enter: {y: 0, opacity: 1, transition},
	exit: {y: -80, opacity: 0, transition}
};

export default function Wrapper({children, router}: {children: ReactElement, router: NextRouter}): ReactElement {
	return (
		<AnimatePresence mode={'wait'}>
			<motion.div
				key={router.asPath}
				initial={'initial'}
				animate={'enter'}
				exit={'exit'}
				className={'my-0 h-full md:mb-0 md:mt-16'}
				variants={variants}>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}
