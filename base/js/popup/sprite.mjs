import { getAsset, uploadFail, failAlert } from './index.mjs';

function addObjects(data) {
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

function addEmptyObject() {
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

function addTextObject(data) {
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

export function setSpritePopupEvent(popup) {
    popup.on('fetch', (category) => {
        popup.setData({ data: { data: getAsset(category) } });
    });
    popup.on('search', (data) => {
        // data 파라미터를 기반으로 list를 구성한다.(API 서버 영역)
        console.log('search', data);
    });
    popup.on('dummyUploads', (data) => {
        // data 파라미터를 기반으로 업로드를 구성한다.(API 서버 영역)
        console.log('dummyUploads', data);
    });
    popup.on('submit', addObjects);
    popup.on('draw', addEmptyObject);
    popup.on('write', addTextObject);
    popup.on('uploads', (data) => {
        // data 파라미터를 기반으로 오브젝트 업로드를 구성한다.(API 서버 영역)
        console.log('uploads', data);
    });
    popup.on('uploadFail', uploadFail);
    popup.on('fail', failAlert);
    popup.on('error', failAlert);
}
