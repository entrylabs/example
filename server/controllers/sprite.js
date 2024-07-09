import { sprites, uploadSample } from '../mock/sprites.js';

function getSprites(req, res) {
    const { main_category, sub_category } = req.params;

    if (!main_category || !sub_category) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const filteredSprites = sprites.filter(({ category }) => {
        const { main, sub } = category;
        return main_category === main && (sub_category === 'all' || sub_category === sub);
    });

    res.send(filteredSprites);
}

function getSpritesBySearchTerm(req, res) {
    const query = req.query.query;

    if (!query) {
        return res.status(400).send('Query parameter is required');
    }

    const filteredSprites = sprites.filter(({ name }) => {
        return name.includes(query);
    });

    res.send(filteredSprites);
}

function uploadSpriteAsset(_req, res) {
    // 실제 파일 업로드 및 데이터 생성은 직접 구현 필요.
    res.send(uploadSample);
}

export { getSprites, getSpritesBySearchTerm, uploadSpriteAsset };
