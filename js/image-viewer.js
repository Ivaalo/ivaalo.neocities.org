allClickableImages = document.querySelectorAll("img.clickable");
viewerContainer = document.querySelector("#image-viewer");

if (isset(viewerContainer)) {
	fullImage = viewerContainer.querySelector("img");
	openNewTab = viewerContainer.querySelector("a");
	for (let i = 0; i < allClickableImages.length; i++) {
		allClickableImages[i].addEventListener("click", function() {
			viewerContainer.style.display = "block";
			fullImage.src = this.getAttribute("data-src");
			fullImage.alt = this.getAttribute("alt");
			openNewTab.href = this.getAttribute("data-src");
		});
	}

	viewerContainer.addEventListener("click", function() {
		viewerContainer.style.display = "none";
	});
}

