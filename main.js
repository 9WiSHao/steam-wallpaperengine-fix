// ==UserScript==
// @name         steam-wallpaperEngine-fix
// @namespace    http://tampermonkey.net/
// @version      0.1.2
// @description  经历事件后小红车创意工坊展示异常，但是发现web端只是隐藏了按钮并没有删除接口，所以写此脚本修复
// @author       9WiSHao
// @match        https://store.steampowered.com/account/preferences
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @run-at       document-body
// @license      ISC
// @grant        none
// ==/UserScript==

(function () {
	'use strict';
	window.onload = () => {
		const fix1 = document.querySelector('#main_content > div.two_column.right > div:nth-child(2) > div:nth-child(7)');
		const fix2 = document.querySelector('#main_content > div.two_column.right > div:nth-child(2) > div:nth-child(8)');
		if (!fix1 || !fix2) {
			alert('未正确打开设置页面');
			return;
		}
		fix1.classList.remove('account_setting_not_customer_facing');
		fix1.querySelector('label.account_manage_checkbox').innerHTML = '频繁的裸露画面或色情内容';
		fix1.querySelector('span.account_setting_parenthetical').innerHTML = `
            主要展示裸露画面或色情主题的游戏或内容。勾选此复选框即表示您确认自己已至少年满 18 周岁。
            <br>
            <a href="javascript:ViewTitlesWithDescriptors( 4 );">查看示例产品\t</a>
        `;

		fix2.classList.remove('account_setting_not_customer_facing');
		fix2.querySelector('label.account_manage_checkbox').innerHTML = '仅限成人的色情内容';
		fix2.querySelector('span.account_setting_parenthetical').innerHTML = `
            包含仅针对成人受众的性意味明显或露骨的游戏或内容。勾选此复选框即表示您确认自己已至少年满 18 周岁。
            <br>
            <a href="javascript:ViewTitlesWithDescriptors( 3 );">查看示例产品\t</a>
        `;
	};
})();
