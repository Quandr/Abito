jQuery.ajax({
  url: "navbar.html",
  dataType: "html",
  success: function (response) {
    console.log(response);
    document.getElementById("container-navbar").innerHTML = response;
    initNavbar();
  },
});
jQuery.ajax({
  url: "search-panel.html",
  dataType: "html",
  success: function (response) {
    console.log(response);
    document.getElementById("container-search-panel").innerHTML = response;
  },
});
