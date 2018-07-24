browser.runtime.onMessage.addListener( (message) => {
	var select = window.getSelection();

	var code = document.createElement('code');
	code.textContent = indent(select.toString());

	var insElm = document.createElement('pre');
	insElm.appendChild(code);

	var range = select.getRangeAt(0);
	range.deleteContents();
	range.insertNode(insElm);
});

var indent = str => {
	var depth = 0;
	var rows = str.split(/\r\n/);

	var ret = "";
	for (const row of rows) {

		if (row.match(/\{$/)) {
			ret += getIndent(depth) + row + "\r\n";
			depth++;
		} else if (row.match(/^\}/)) {
			depth--;
			ret += getIndent(depth) + row + "\r\n";
		} else {
			ret += getIndent(depth) + row + "\r\n";
		}

	}

	return ret;
};

const INDENT_UNIT = "  ";
var getIndent = depth => {
	var indent = "";
	for (let i = 0; i <= depth; ++i) {
		indent += INDENT_UNIT;
	}

	return indent;
};
