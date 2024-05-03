import { setSpritePopupEvent } from './sprite.mjs';
import { getSidebarTemplate } from '../util.mjs';
import { spriteCategory, objectAssets } from '../mock.mjs';

var popup;

export function getAsset(category) {
    const { type, subMenu, sidebar } = category;
    return objectAssets[type].filter((asset) => {
        let checkSub;
        if (subMenu === 'all') {
            checkSub = true;
        } else {
            checkSub = asset.category.sub === subMenu;
        }
        return asset.category.main === sidebar && checkSub;
    });
}

export function addObjects(data) {
    const objects = data.selected;
    objects.forEach((sprite) => {
        const object = {
            id: Entry.generateHash(),
            objectType: 'sprite',
            sprite,
        };
        Entry.container.addObject(object, 0);
    });
}

export function addEmptyObject() {
    const object = {
        id: Entry.generateHash(),
        objectType: 'sprite',
        sprite: {
            name: Lang.Workspace.new_object + (Entry.container.getAllObjects().length + 1),
            pictures: [
                {
                    dimension: {
                        width: 960,
                        height: 540,
                    },
                    fileurl: `${Entry.mediaFilePath}_1x1.png`,
                    name: Lang.Workspace.new_picture,
                    type: '_system_',
                },
            ],
            sounds: [],
            category: {
                main: 'new',
            },
        },
    };
    Entry.container.addObject(object, 0);
    Entry.playground.changeViewMode('picture');
}

export function addTextObject(data) {
    let lineBreak = true;
    if (data.writeType === 'one') {
        lineBreak = false;
    }
    const text = data.text || Lang.Blocks.TEXT;
    const object = {
        id: Entry.generateHash(),
        name: text,
        text,
        options: {
            font: data.font,
            bold: false,
            underLine: false,
            italic: false,
            strike: data.effects.through || false,
            colour: data.effects.color || '#000000',
            background: data.effects.backgroundColor || '#ffffff',
            lineBreak,
            ...data.effects,
        },
        objectType: 'textBox',
        sprite: { sounds: [], pictures: [] },
    };
    Entry.container.addObject(object, 0);
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

    setSpritePopupEvent(popup);
}

export function openSpriteManager() {
    const sidebar = getSidebarTemplate({ category: spriteCategory });
    popup.setData({ sidebar });
    popup.show({ type: 'sprite' }, {});
}
