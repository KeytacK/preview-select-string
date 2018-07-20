browser.menus.create({
	id: "preview",
	title: "preview select string",
	contexts: ["selection"]
});

browser.menus.onClicked.addListener((info, tab) => {
	switch (info.menuItemId) {
		case "preview":
			browser.tabs.sendMessage(tab.id, {"select": true});
			break;
	}
});
