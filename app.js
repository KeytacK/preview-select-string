browser.runtime.onMessage.addListener( (message) => {
	var select = window.getSelection();

	var code = document.createElement('code');
	code.textContent = select.toString();

	var insElm = document.createElement('pre');
	insElm.innerHTML = code.outerHTML;

	var range = select.getRangeAt(0);
	range.deleteContents();
	range.insertNode(insElm);
});
