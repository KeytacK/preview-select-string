browser.runtime.onMessage.addListener( (message) => {
    var select = window.getSelection();

    var insElm = document.createElement('pre');
    insElm.innerHTML = '<code>' + select.toString() + '</code>';

    var range = select.getRangeAt(0);
    range.deleteContents();
    range.insertNode(insElm);
});
