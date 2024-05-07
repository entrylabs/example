import { openImportListModal, openExportListModal } from './listTool/index.mjs';
import {
    openSpriteManager,
    openPictureManager,
    openSoundManager,
    openTableManager,
    openAIUtilizeBlockManager,
} from './popup/index.mjs';

export function installEntryEvent() {
    Entry.addEventListener('dismissModal');
    Entry.addEventListener('openSpriteManager', openSpriteManager);
    Entry.addEventListener('openPictureManager', openPictureManager);
    Entry.addEventListener('openSoundManager', openSoundManager);
    Entry.addEventListener('openImportListModal', openImportListModal);
    Entry.addEventListener('openExportListModal', openExportListModal);
    Entry.addEventListener('openTableManager', openTableManager);
    Entry.addEventListener('openAIUtilizeBlockManager', openAIUtilizeBlockManager);
}
