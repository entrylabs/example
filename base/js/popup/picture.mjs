import { getAsset, uploadFail, failAlert } from './index.mjs';

function addPictures(data) {
    const pictures = data.selected;
    pictures.forEach((picture) => {
        Entry.playground.addPicture(picture, true);
    });
}

function addEmptyPicture() {
    const item = {
        id: Entry.generateHash(),
        dimension: {
            height: 1,
            width: 1,
        },
        fileurl: `${Entry.mediaFilePath}_1x1.png`,
        name: Lang.Workspace.new_picture,
    };
    Entry.playground.addPicture(item, true);
}

export function setPicturePopupEvent(popup) {
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
    popup.on('submit', addPictures);
    popup.on('draw', addEmptyPicture);
    popup.on('uploads', (data) => {
        // data 파라미터를 기반으로 오브젝트 업로드를 구성한다.(API 서버 영역)
        console.log('uploads', data);
    });
    popup.on('uploadFail', uploadFail);
    popup.on('fail', failAlert);
    popup.on('error', failAlert);
}
