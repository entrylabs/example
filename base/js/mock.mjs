export const spriteCategory = [
    {
        id: '5e1d9b5dac9e9644cc0ab58f',
        name: '엔트리봇',
        value: 'entrybot_friends',
        label: {
            ko: '엔트리봇',
            en: 'Entry friends',
            ja: 'Entry friends',
            vn: null,
        },
        categoryType: 'sprite',
        depth: 1,
        categoryOrder: 0,
        children: [
            {
                id: '62cfc0dadb5c900030f9623b',
                name: '소분류1',
                value: 'sub_RwDYBuplLP',
                label: {
                    ko: '소분류1',
                    en: 'nonamed',
                    ja: '名前のない',
                    vn: null,
                },
                categoryType: 'sprite',
                depth: 2,
                categoryOrder: 0,
            },
        ],
    },
    {
        id: '5e1d9b5dac9e9644cc0ab590',
        name: '사람',
        value: 'people',
        label: {
            ko: '사람',
            en: 'people',
            ja: '人物',
            vn: 'peoples',
        },
        categoryType: 'sprite',
        depth: 1,
        categoryOrder: 1,
        children: [],
    },
];

export const objectAssets = {
    sprite: [
        {
            id: '557fe88b77e7209c34993968',
            name: '(1)엔트리봇',
            label: {
                ko: '(1)엔트리봇',
                en: '(1)Entrybot',
                ja: null,
                vn: '(1)Entrybot',
            },
            category: {
                main: 'entrybot_friends',
                sub: null,
            },
            pictures: [
                {
                    id: null,
                    name: '(1)엔트리봇_걷기1',
                    label: {
                        ko: '(1)엔트리봇_걷기1',
                        en: '(1)Entrybot_walk1',
                        ja: null,
                        vn: '(1)Entrybot_walk1',
                    },
                    fileurl: '/assets/image/a8268fd79a48fd9b92c7b47406b95393.png',
                    imageType: null,
                    dimension: {
                        width: 284,
                        height: 350,
                    },
                    trimmed: null,
                },
            ],
            sounds: [
                {
                    id: null,
                    name: '강아지 짖는소리',
                    label: {
                        ko: '강아지 짖는소리',
                        en: 'Bark of a Dog',
                        ja: null,
                        vn: 'Bark of a Dog',
                    },
                    fileurl: '/assets/sound/30a5116094820dedc36a4a761b9d1816.mp3',
                    duration: 1.3,
                },
            ],
        },
        {
            id: '63d20df17181a000306509b4',
            name: '궁수 엔트리봇',
            label: {
                ko: '궁수 엔트리봇',
                en: 'Archer entrybot',
                ja: null,
                vn: null,
            },
            category: {
                main: 'entrybot_friends',
                sub: 'sub_RwDYBuplLP',
            },
            pictures: [
                {
                    id: null,
                    name: '궁수 엔트리봇',
                    label: {
                        ko: '궁수 엔트리봇',
                        en: 'Archer entrybot',
                        ja: null,
                        vn: '궁수 엔트리봇.svg',
                    },
                    fileurl: '/assets/image/k4dcspn4ldcncd1l000q7ad3223e07m3.svg',
                    imageType: 'svg',
                    dimension: {
                        width: 390,
                        height: 390,
                    },
                    trimmed: null,
                },
            ],
            sounds: [],
        },
        {
            id: '55e87de2e443a90e6afe5e2a',
            name: '개구쟁이',
            label: {
                ko: '개구쟁이',
                en: 'Playful child',
                ja: null,
                vn: 'Playful child',
            },
            category: {
                main: 'people',
                sub: null,
            },
            pictures: [
                {
                    id: null,
                    name: '개구쟁이_1',
                    label: {
                        ko: '개구쟁이_1',
                        en: 'Playful child_1',
                        ja: null,
                        vn: 'Playful child_1',
                    },
                    fileurl: '/assets/image/ba7d688dfacfcb77d61b952669372d9d.png',
                    imageType: null,
                    dimension: {
                        width: 215,
                        height: 355,
                    },
                    trimmed: null,
                },
            ],
            sounds: [],
        },
    ],
};