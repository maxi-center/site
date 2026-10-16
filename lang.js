// Language switcher: uz / ru / en, remembered in localStorage
(function () {
  var supported = ["uz", "ru", "en"];

  function pick() {
    try {
      var saved = localStorage.getItem("lang");
      if (supported.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    var nav = (navigator.language || "uz").slice(0, 2).toLowerCase();
    return supported.indexOf(nav) !== -1 ? nav : "uz";
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    var buttons = document.querySelectorAll(".langs button");
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].setAttribute("aria-pressed", buttons[i].dataset.set === lang ? "true" : "false");
    }
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".langs button");
    if (b) apply(b.dataset.set);
  });

  apply(pick());
})();
