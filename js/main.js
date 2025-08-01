window.addEventListener('DOMContentLoaded', async function () {
	// コンポーネントの読み込み
	const headerResponse = await fetch("/components/header.html");
    const headerHTML = await headerResponse.text();
	document.querySelector("#header").innerHTML = headerHTML;
	const footerResponse = await fetch("/components/footer.html");
    const footerHTML = await footerResponse.text();
	document.querySelector("#footer").innerHTML = footerHTML;

	// ヘッダーアニメーション
	// ハンバーガーメニュー
	const hamburger = document.getElementById('js-hamburger');
	const navMenu = document.getElementById('js-nav-menu');
	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('is-active');
		navMenu.classList.toggle('is-active');
	});

	// ヘッダーの表示・非表示 (スクロール)
	const header = document.getElementById('header'); 
	const headerHeight = header.offsetHeight;
	let lastScrollY = window.scrollY;
	window.addEventListener('scroll', () => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > lastScrollY && currentScrollY > headerHeight) {
			header.classList.add('is-hidden');
		} 
		else {
			header.classList.remove('is-hidden');
		}
		lastScrollY = currentScrollY;
	});
});