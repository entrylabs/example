import { getAsset, uploadFail, failAlert } from './index.mjs';

function addSounds(data) {
    const sounds = data.selected;
    sounds.forEach((item) => {
        item.id = Entry.generateHash();
        Entry.playground.addSound(item, true);
    });
    Entry.Utils.forceStopSounds();
}

function loadSound(items) {
    items.forEach((item) => {
        if (!Entry.soundQueue.getItem(item.id) && item.path) {
            Entry.soundQueue.loadFile({
                id: item.id,
                src: item.path,
                type: createjs.LoadQueue.SOUND,
            });
        }
    });
}

function stopAllSound() {
    Entry.Utils.forceStopSounds();
}

function stopSound(sound) {
    const { instance, callback } = sound;
    instance && instance.stop();
    callback({
        status: false,
    });
}

function soundLoadAndPlay(item) {
    const { id, callback } = item;
    if (!Entry.soundQueue.getItem(item.id)) {
        let playFunc;
        const soundPlay = () => {
            if (Entry.soundQueue.getResult(id)) {
                const instance = Entry.Utils.playSound(id);
                Entry.Utils.addSoundInstances(instance);
                callback({ instance, status: true });
                instance.on('complete', () => callback({ status: false }));
            }
            Entry.soundQueue.off('fileload', playFunc);
        };
        playFunc = Entry.soundQueue.on('fileload', soundPlay);
        Entry.soundQueue.loadFile({
            id: item.id,
            src: item.path,
            type: createjs.LoadQueue.SOUND,
        });
    }
    return item;
}

function playSound(item) {
    const { id, callback } = item;
    if (id) {
        if (Entry.soundQueue.getResult(id)) {
            const instance = Entry.Utils.playSound(id);
            Entry.Utils.addSoundInstances(instance);
            callback({ instance, status: true });
            instance.on('complete', () => callback({ status: false }));
        } else {
            soundLoadAndPlay(item);
        }
    } else {
        console.log('no sound', id);
    }
}

export function setSoundPopupEvent(popup) {
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
    popup.on('submit', addSounds);
    popup.on('loaded', loadSound);
    popup.on('load', loadSound);
    popup.on('hide', stopAllSound);
    popup.on('play', playSound);
    popup.on('stop', stopSound);
    popup.on('uploads', (data) => {
        // data 파라미터를 기반으로 오브젝트 업로드를 구성한다.(API 서버 영역)
        console.log('uploads', data);
    });
    popup.on('uploadFail', uploadFail);
    popup.on('fail', failAlert);
    popup.on('error', failAlert);
}
