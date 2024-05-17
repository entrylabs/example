import { sprites, uploadSample } from '../mock/sprites.js';

function getSprites({ main_category, sub_category }) {
    return sprites.filter(({ category }) => {
        const { main, sub } = category;
        return main_category === main && (sub_category === 'all' || sub_category === sub);
    });
}

function getSpritesBySearchTerm({ query }) {
    return sprites.filter(({ name }) => {
        return name.includes(query);
    });
}

function uploadSpriteAsset() {
    return uploadSample;
}

export { getSprites, getSpritesBySearchTerm, uploadSpriteAsset };
