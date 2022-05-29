// toast
function openToast() {
	var toast = document.getElementById("toast-demo");
	toast.classList.add("open");
	setTimeout(function () {
		toast.classList.remove("open");
	}, 3000);
}

var search = document.getElementById("search-box");
function showSearch() {
	search.classList.add("-open");
}
function hideSearch(e) {
	search.classList.remove("-open");
}
document.addEventListener("keydown", function (e) {
	if (e.keyCode === 13 || e.keyCode === 27) {
		search.classList.remove("-open");
	}
});

// scroll to top
function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// hide button scroll to top
window.onscroll = function () {
	if (
		document.body.scrollTop > 100 ||
		document.documentElement.scrollTop > 100
	) {
		document.getElementById("to-top").style.display = "block";
	} else {
		document.getElementById("to-top").style.display = "none";
	}
};

// hide button scroll to top in small screen
window.addEventListener("resize", function () {
	if (window.innerWidth < 768) {
		document.getElementById("to-top").style.display = "none";
	}
});
