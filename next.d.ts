/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/naming-convention */

import type {NextComponentType,
	NextLayoutComponentType,
	NextPageContext} from 'next';
import type {AppProps} from 'next/app';

declare module 'next' {
    type NextLayoutComponentType<P = { [key: string]: never }> = NextComponentType<
        NextPageContext,
        unknown,
        P
    > & { getLayout?: (page: ReactNode) => ReactNode };
}

declare module 'next/app' {
    type AppLayoutProps<P = { [key: string]: never }> = AppProps & {
        Component: NextLayoutComponentType;
    };
}
