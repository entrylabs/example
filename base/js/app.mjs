import { installPopup } from './popup/index.mjs';
import { installListTool } from './listTool/index.mjs';
import { installEntryEvent } from './event.mjs';
import { installModalProgress } from './modalProgress/index.mjs';

document.addEventListener('DOMContentLoaded', function () {
    var initOption = {
        // 서비스하시는 상대/절대 경로로 지정해주세요.
        libDir: '/node_modules',
        type: 'workspace',
        textCodingEnable: true,
        backpackDisable: true,
        exportObjectEnable: false,
        blockSaveImageEnable: false,
        iframeDomAccess: 'none', //direct, message, none
    };
    Entry.creationChangedEvent = new Entry.Event(window);
    Entry.init(document.getElementById('workspace'), initOption);
    installPopup();
    installModalProgress();
    installListTool();
    installEntryEvent();
    Entry.loadProject();
    //     Entry.loadProject({
    //         objects: [
    //             {
    //                 id: '7y0y',
    //                 name: '엔트리봇',
    //                 script: '[[{"id":"izxl","x":50,"y":30,"type":"when_run_button_click","params":[null],"statements":[],"movable":null,"deletable":1,"emphasized":false,"readOnly":null,"copyable":true,"assemble":true,"extensions":[]},{"id":"myqo","x":0,"y":0,"type":"repeat_basic","params":[{"id":"6f7q","x":0,"y":0,"type":"number","params":[10],"statements":[],"movable":null,"deletable":1,"emphasized":false,"readOnly":null,"copyable":true,"assemble":true,"extensions":[]},null],"statements":[[{"id":"ohi4","x":0,"y":0,"type":"move_direction","params":[{"id":"c9lw","x":0,"y":0,"type":"number","params":[10],"statements":[],"movable":null,"deletable":1,"emphasized":false,"readOnly":null,"copyable":true,"assemble":true,"extensions":[]},null],"statements":[],"movable":null,"deletable":1,"emphasized":false,"readOnly":null,"copyable":true,"assemble":true,"extensions":[]}]],"movable":null,"deletable":1,"emphasized":false,"readOnly":null,"copyable":true,"assemble":true,"extensions":[]}]]',
    //                 objectType: 'sprite',
    //                 rotateMethod: 'free',
    //                 scene: '7dwq',
    //                 sprite: {
    //                     pictures: [
    //                         {
    //                             id: 'vx80',
    //                             dimension: {
    //                                 width: 144,
    //                                 height: 246,
    //                                 scaleX: 0.5128205128205128,
    //                                 scaleY: 0.5128205128205128,
    //                             },
    //                             fileurl: '/node_modules/@entrylabs/entry/images/media/entrybot1.svg',
    //                             name: '엔트리봇_걷기1',
    //                             imageType: 'svg',
    //                         },
    //                         {
    //                             id: '4t48',
    //                             dimension: {
    //                                 width: 144,
    //                                 height: 246,
    //                             },
    //                             fileurl: '/node_modules/@entrylabs/entry/images/media/entrybot2.svg',
    //                             name: '엔트리봇_걷기2',
    //                             imageType: 'svg',
    //                         },
    //                         {
    //                             id: '3us5',
    //                             dimension: {
    //                                 width: 284,
    //                                 height: 350,
    //                                 scaleX: 0.5128205128205128,
    //                                 scaleY: 0.5128205128205128,
    //                             },
    //                             fileurl:
    //                                 'http://localhost:3000/assets/image/a8268fd79a48fd9b92c7b47406b95393.png',
    //                             name: '(1)엔트리봇_걷기1',
    //                             imageType: 'png',
    //                         },
    //                     ],
    //                     sounds: [
    //                         {
    //                             duration: 1.3,
    //                             ext: '.mp3',
    //                             id: '8el5',
    //                             fileurl: '/node_modules/@entrylabs/entry/images/media/bark.mp3',
    //                             name: '강아지 짖는 소리',
    //                         },
    //                     ],
    //                 },
    //                 selectedPictureId: '4t48',
    //                 lock: false,
    //                 entity: {
    //                     x: 0,
    //                     y: 0,
    //                     regX: 142,
    //                     regY: 175,
    //                     scaleX: 0.5128205128205128,
    //                     scaleY: 0.5128205128205128,
    //                     rotation: 0,
    //                     direction: 90,
    //                     width: 284,
    //                     height: 350,
    //                     font: 'undefinedpx ',
    //                     visible: true,
    //                 },
    //             },
    //         ],
    //         scenes: [
    //             {
    //                 id: '7dwq',
    //                 name: '장면 1',
    //             },
    //         ],
    //         variables: [
    //             {
    //                 name: '초시계',
    //                 id: 'brih',
    //                 visible: false,
    //                 value: '0',
    //                 variableType: 'timer',
    //                 isCloud: false,
    //                 isRealTime: false,
    //                 cloudDate: false,
    //                 object: null,
    //                 x: 134,
    //                 y: -70,
    //             },
    //             {
    //                 name: ' 대답 ',
    //                 id: '1vu8',
    //                 visible: false,
    //                 value: '0',
    //                 variableType: 'answer',
    //                 isCloud: false,
    //                 isRealTime: false,
    //                 cloudDate: false,
    //                 object: null,
    //                 x: 150,
    //                 y: -100,
    //             },
    //         ],
    //         messages: [],
    //         functions: [],
    //         tables: [],
    //         speed: 60,
    //         interface: {
    //             menuWidth: 280,
    //             canvasWidth: 480,
    //             object: '7y0y',
    //         },
    //         expansionBlocks: [],
    //         aiUtilizeBlocks: [],
    //         hardwareLiteBlocks: [],
    //         externalModules: [],
    //         externalModulesLite: [],
    //     });
});
