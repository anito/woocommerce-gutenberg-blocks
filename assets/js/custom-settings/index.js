/**
 * External dependencies
 */
import { getSetting, setSetting } from '@woocommerce/settings';

setSetting( 'min_height', 350 );
setSetting( 'default_height', 222 );

export const MIN_HEIGHT = getSetting( 'min_height', 100 );
export const MAX_HEIGHT = getSetting( 'max_height', 500 );
export const DEFAULT_HEIGHT = getSetting( 'default_height', 100 );
