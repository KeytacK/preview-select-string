browser.menus.create({
	id: "log-selection",
	title: "menu item selection logger",
	contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case "log-selection":
			console.log(info.selectionText);
			break;
	}
});
