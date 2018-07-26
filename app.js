browser.runtime.onMessage.addListener( (message) => {
	var select = window.getSelection();

	var code = document.createElement('code');
	code.textContent = addIndent(select.toString());

	var insElm = document.createElement('pre');
	insElm.appendChild(code);

	var range = select.getRangeAt(0);
	range.deleteContents();
	range.insertNode(insElm);
});

function addIndent(str) {
	var depth = 0;
	var rows = str.split(/\r\n/);

	var indent = (sentence) => getIndent(depth) + sentence + "\r\n";

	var ret = "";
	for (const row of rows) {

		if (row.match(/\{$/)) {
			ret += indent(row);
			depth++;
		} else if (row.match(/^\}/)) {
			depth--;
			ret += indent(row);
		} else {
			ret += indent(row);
		}

	}

	return ret;
}

function getIndent (depth) {
	const INDENT_UNIT = "  ";

	var indent = "";
	for (let i = 0; i <= depth; ++i) {
		indent += INDENT_UNIT;
	}

	return indent;
}
