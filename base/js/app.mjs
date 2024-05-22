import { installPopup } from './popup/index.mjs';
import { installListTool } from './listTool/index.mjs';
import { installEntryEvent } from './event.mjs';

document.addEventListener('DOMContentLoaded', function () {
    var initOption = {
        // 서비스하시는 상대/절대 경로로 지정해주세요.
        libDir: '/node_modules',
        type: 'workspace',
        textCodingEnable: true,
        backpackDisable: true,
        exportObjectEnable: false,
        iframeDomAccess: 'none', //direct, message, none
    };
    Entry.creationChangedEvent = new Entry.Event(window);
    Entry.init(document.getElementById('workspace'), initOption);
    installPopup();
    installListTool();
    installEntryEvent();
    Entry.loadProject();
});
