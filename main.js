function resizeArticle(size) {
	const allArticles = document.getElementsByTagName('article');
    for (let i = 0; i < allArticles.length; i++) {
        allArticles[i].style.fontSize = `${size}px`;
    }
}
