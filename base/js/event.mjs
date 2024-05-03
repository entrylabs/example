import { openSpriteManager, openPictureManager, openSoundManager } from './popup/index.mjs';

export function installEntryEvent() {
    Entry.addEventListener('dismissModal');
    Entry.addEventListener('openSpriteManager', openSpriteManager);
    Entry.addEventListener('openPictureManager', openPictureManager);
    Entry.addEventListener('openSoundManager', openSoundManager);
}
