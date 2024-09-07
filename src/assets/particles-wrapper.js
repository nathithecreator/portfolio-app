(function() {
  // Load particles.js without strict mode
  function loadScript(url, callback) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    if (script.readyState) {  // IE
      script.onreadystatechange = function() {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  // Others
      script.onload = function() {
        callback();
      };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  loadScript("https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js", function() {
    console.log("particles.js loaded");
  });
})();
