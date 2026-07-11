// import {  } from '@interfaces';

export function vmodel() {
	return {};
}
export function vmDrawer(active: string, availableComponents: string[], bookmarks: string[]) {
	return {
        active,
        isAvailable: availableComponents.includes(active),
        isBookmarked: bookmarks.includes(active),
    };
}
