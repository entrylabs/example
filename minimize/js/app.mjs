document.addEventListener('DOMContentLoaded', function () {
    var initOption = {
        // 서비스하시는 상대/절대 경로로 지정해주세요.
        libDir: '/node_modules',
        type: 'minimize',
        textCodingEnable: true,
    };
    Entry.creationChangedEvent = new Entry.Event(window);
    Entry.init(document.getElementById('workspace'), initOption);

    // 추후 entryjs에 내장되는 기능입니다.
    Entry.addEventListener('dispatchEventDidTogglePause', () =>
        Entry.engine.view_.classList.toggle('paused')
    );

    Entry.loadProject();
});
