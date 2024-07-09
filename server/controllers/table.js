import { tables } from '../mock/tables.js';

function getTable(req, res) {
    res.send(tables);
}

function getTableBySearchTerm(req, res) {
    const query = req.query.query;

    if (!query) {
        return res.status(400).send('Query parameter is required');
    }

    const filteredTables = tables.filter(({ name }) => {
        return name.includes(query);
    });

    res.send(filteredTables);
}

function uploadTable(req, res) {
    // 실제 파일 업로드 및 데이터 생성은 직접 구현 필요.
    res.send(tables);
}

export { getTable, getTableBySearchTerm, uploadTable };
