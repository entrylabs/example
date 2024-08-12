import { setSpritePopupEvent } from './sprite.mjs';
import { setPicturePopupEvent } from './picture.mjs';
import { setSoundPopupEvent } from './sound.mjs';
import { setTablePopupEvent } from './table.mjs';
import { getExpansionBlocks, setExpansionPopupEvent } from './expansion.mjs';
import { getAiUtilizeBlocks, setAIUtilizePopupEvent } from './aIUtilize.mjs';
import { getSidebarTemplate } from '../util.mjs';
import { spriteCategory, soundCategory, assets } from '../mock.mjs';

var popup;

export function getAsset(category) {
    const { type, subMenu, sidebar } = category;
    return assets[type];
}

export function uploadFail(data) {
    EntryModal.alert(Lang[data.messageParent][data.message]);
}
export function failAlert() {
    window.EntryModal.alert(Lang.Msgs.error_occured);
}

export function installPopup() {
    const container = document.getElementById('EntryPopupContainer');
    popup = new EntryTool.Popup({
        container,
        isShow: false,
        theme: 'entry',
        data: { data: { data: [] } },
    });
    popup.setData({
        projectNavOptions: {
            categoryOptions: ['all', 'game', 'living', 'storytelling', 'arts', 'knowledge', 'etc'],
            sortOptions: ['updated', 'visit', 'likeCnt', 'comment'],
            periodOptions: ['all', 'today', 'week', 'month', 'quarter'],
        },
    });
}

export function openSpriteManager() {
    popup.removeAllListeners();
    setSpritePopupEvent(popup);
    const sidebar = getSidebarTemplate({ category: spriteCategory });
    popup.setData({ sidebar });
    popup.show({ type: 'sprite' }, {});
}

export function openPictureManager() {
    popup.removeAllListeners();
    setPicturePopupEvent(popup);
    const sidebar = getSidebarTemplate({ category: spriteCategory });
    popup.setData({ sidebar });
    popup.show({ type: 'picture' }, {});
}

export function openSoundManager() {
    popup.removeAllListeners();
    setSoundPopupEvent(popup);
    const sidebar = getSidebarTemplate({ category: soundCategory });
    popup.setData({ sidebar });
    popup.show({ type: 'sound' }, {});
}

export function openTableManager(data) {
    popup.removeAllListeners();
    setTablePopupEvent(popup);
    popup.setData({ sidebar: {} });
    popup.show({ type: 'table' }, { data: { data: [] } });
}

export function openExpansionBlockManager() {
    popup.removeAllListeners();
    setExpansionPopupEvent(popup);
    popup.setData({ sidebar: {} });
    popup.show(
        { type: 'expansion', imageBaseUrl: '/node_modules/@entrylabs/entry/images/hardware/' },
        { data: { data: getExpansionBlocks() } }
    );
}

export function openAIUtilizeBlockManager() {
    popup.removeAllListeners();
    setAIUtilizePopupEvent(popup);
    popup.setData({ sidebar: {} });
    popup.show(
        { type: 'aiUtilize', imageBaseUrl: '/node_modules/@entrylabs/entry/images/aiUtilize/' },
        { data: { data: getAiUtilizeBlocks() } }
    );
}
