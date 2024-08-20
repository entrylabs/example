const modeMap = ['block', 'python'];

function setBlockMode() {
    if (!window?.Entry) {
        return;
    }
    const workspace = Entry.getMainWS();
    if (modeMap[workspace.getMode()] === 'block') {
        return;
    }

    workspace.setMode({
        boardType: Entry.Workspace.MODE_BOARD,
        textType: -1,
    });
}

function setPythonMode() {
    if (!window?.Entry) {
        return;
    }
    const workspace = Entry.getMainWS();
    if (modeMap[workspace.getMode()] === 'python') {
        return;
    }
    workspace.setMode({
        boardType: Entry.Workspace.MODE_VIMBOARD,
        textType: Entry.Vim.TEXT_TYPE_PY,
        runType: Entry.Vim.WORKSPACE_MODE,
    });
}
