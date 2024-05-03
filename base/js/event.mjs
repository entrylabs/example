import { openSpriteManager, openPictureManager } from './popup/index.mjs';

export function installEntryEvent() {
    Entry.addEventListener('dismissModal');
    Entry.addEventListener('openSpriteManager', openSpriteManager);
    Entry.addEventListener('openPictureManager', openPictureManager);
}
