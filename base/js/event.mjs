import { openSpriteManager } from './popup/index.mjs';

export function installEntryEvent() {
    Entry.addEventListener('dismissModal');
    Entry.addEventListener('openSpriteManager', openSpriteManager);
}
