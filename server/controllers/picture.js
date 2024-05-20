import { pictures, uploadSample } from '../mock/pictures.js';

function getPictures(req, res) {
    const { main_category, sub_category } = req.params;

    if (!main_category || !sub_category) {
        return res.status(400).json({ error: 'Missing required parameters' });
    }

    const filteredPictures = pictures.filter(({ category }) => {
        const { main, sub } = category;
        return main_category === main && (sub_category === 'all' || sub_category === sub);
    });

    res.send(filteredPictures);
}

function getPicturesBySearchTerm(req, res) {
    const query = req.query.query;

    if (!query) {
        return res.status(400).send('Query parameter is required');
    }

    const filteredPictures = pictures.filter(({ name }) => {
        return name.includes(query);
    });

    res.send(filteredPictures);
}

function uploadPictureAsset(_req, res) {
    res.send(uploadSample);
}

export { getPictures, getPicturesBySearchTerm, uploadPictureAsset };
