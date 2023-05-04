import React from 'react';
import Wrapper from 'components/common/Wrapper';

import type {NextRouter} from 'next/router';
import type {ReactElement} from 'react';

function	Bar(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<div className={'mb-4'}>
				<div className={'space-y-4'}>
					<p className={'text-primary-500'}>{'Duis dignissim id nisi id consequat. Maecenas accumsan ac magna sit amet tincidunt. Aliquam lacinia dolor sit amet eros efficitur, at tincidunt neque pharetra. Maecenas aliquet gravida tellus vitae sollicitudin. Phasellus ac massa accumsan, dapibus tortor vitae, dignissim eros. Sed sit amet ex vel sem euismod ornare et sed libero. Vestibulum suscipit nisl ac convallis consectetur. Nulla sollicitudin felis orci, et tristique sapien maximus ut. Vivamus consectetur augue nisi, luctus vulputate sem sodales a. Donec quis blandit libero. Quisque dolor nisi, congue in consequat ut, euismod eu dolor.'}</p>
					<p className={'text-primary-500'}>{'Praesent facilisis lectus sit amet ante vulputate vulputate. Mauris pulvinar sollicitudin justo, sit amet semper lectus efficitur eu. Vestibulum congue, metus dapibus elementum ultrices, massa arcu interdum augue, nec ultrices augue nisl id mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed nec risus vitae nisi cursus euismod. Aenean et tristique turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet efficitur quam sed viverra. Aliquam cursus turpis sit amet est blandit, et rhoncus urna finibus.'}</p>
				</div>
			</div>
		</section>
	);
}

Bar.getLayout = function getLayout(page: ReactElement, router: NextRouter): ReactElement {
	console.log('###wrapper', page, router);
	return <Wrapper router={router}>{page}</Wrapper>;
};

export default Bar;
