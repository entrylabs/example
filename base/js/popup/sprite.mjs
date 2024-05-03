import {
    getAsset,
    addObjects,
    addEmptyObject,
    addTextObject,
    uploadFail,
    failAlert,
} from './index.mjs';

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
