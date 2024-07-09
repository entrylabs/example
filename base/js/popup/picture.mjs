import { uploadFail, failAlert } from './index.mjs';
import { fetchUploadWithBaseUrl, fetchWithBaseUrl } from '../util/index.mjs';

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
        thumbUrl: `${Entry.mediaFilePath}_1x1.png`,
        name: Lang.Workspace.new_picture,
    };
    Entry.playground.addPicture(item, true);
}

function uploadPictures(data) {
    const pictures = data.uploads;
    pictures.forEach((picture) => {
        picture.id = Entry.generateHash();
        Entry.playground.addPicture(picture, true);
    });
}

export function setPicturePopupEvent(popup) {
    popup.on('fetch', async (category) => {
        const { sidebar, subMenu } = category;
        const data = await fetchWithBaseUrl(`/api/picture/categories/${sidebar}/${subMenu}`);
        popup.setData({ data: { data } });
    });
    popup.on('search', async ({ searchQuery }) => {
        const data = await fetchWithBaseUrl(`/api/picture/search?query=${searchQuery}`);
        popup.setData({ data: { data } });
    });
    popup.on('dummyUploads', async ({ formData }) => {
        const data = await fetchUploadWithBaseUrl(`/api/picture`, {
            method: 'post',
            body: formData,
        });
        popup.setData({
            data: { uploads: data, data: [] },
        });
    });
    popup.on('submit', addPictures);
    popup.on('draw', addEmptyPicture);
    popup.on('uploads', uploadPictures);
    popup.on('uploadFail', uploadFail);
    popup.on('fail', failAlert);
    popup.on('error', failAlert);
}
