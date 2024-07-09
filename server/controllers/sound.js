import { sounds, uploadSample } from '../mock/sounds.js';

function getSounds(req, res) {
    const { main_category, sub_category } = req.params;

    if (!main_category || !sub_category) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const filteredSounds = sounds.filter(({ category }) => {
        const { main, sub } = category;
        return main_category === main && (sub_category === 'all' || sub_category === sub);
    });

    res.send(filteredSounds);
}

function getSoundsBySearchTerm(req, res) {
    const query = req.query.query;

    if (!query) {
        return res.status(400).send('Query parameter is required');
    }

    const filteredSounds = sounds.filter(({ name }) => {
        return name.includes(query);
    });

    res.send(filteredSounds);
}

function uploadSoundAsset(_req, res) {
    // 실제 파일 업로드 및 데이터 생성은 직접 구현 필요.
    res.send(uploadSample);
}

export { getSounds, getSoundsBySearchTerm, uploadSoundAsset };
