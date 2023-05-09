import React from 'react';
import Wrapper from 'components/common/Wrapper';

import type {NextRouter} from 'next/router';
import type {ReactElement} from 'react';

function	Foo(): ReactElement {
	return (
		<section aria-label={'some default section'}>
			<div className={'mb-4'}>
				<div className={'space-y-4'}>
					<p className={'text-primary-500'}>{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et fringilla turpis. Aliquam tortor lectus, facilisis in vehicula vel, tempus at massa. Mauris finibus tristique augue, ut mattis neque lobortis bibendum. Sed at lacinia nulla. Aliquam aliquet purus sed leo venenatis, at tincidunt erat viverra. Suspendisse posuere, augue nec aliquam pharetra, augue lectus iaculis augue, at fringilla lectus lectus ut augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean accumsan magna vitae metus consectetur commodo. Sed commodo viverra efficitur. Maecenas non hendrerit magna. Ut porta sollicitudin dignissim. Morbi aliquam blandit nisi. Aliquam erat volutpat.'}</p>
					<p className={'text-primary-500'}>{'Maecenas tristique libero eu volutpat vulputate. Integer id varius lorem, vel facilisis ex. Etiam aliquet, justo vel iaculis ullamcorper, quam libero interdum elit, ac scelerisque velit turpis vel enim. Nam id sapien malesuada, vulputate mi eu, condimentum turpis. Donec tempus erat erat, in cursus ex ultricies luctus. Integer urna nisl, semper rutrum erat eleifend, consectetur dignissim augue. Etiam ornare non nibh in elementum. Curabitur venenatis dui eleifend auctor ultrices.'}</p>
				</div>
			</div>
		</section>
	);
}

Foo.getLayout = function getLayout(page: ReactElement, router: NextRouter): ReactElement {
	console.log('###wrapper', page, router);
	return <Wrapper router={router}>{page}</Wrapper>;
};

export default Foo;
