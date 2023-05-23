document.querySelectorAll(".dv-container").forEach((c) => {
  var v = c.querySelector("video"),
    playing = false,
    noControls = c.classList.contains("no-controls");
  v.controls = false;
  v.addEventListener("click", (e) => {
    if (playing) {
      playing = false;
      if (noControls) v.pause();
    } else {
      playing = true;
      if (v.controls == false) v.play();
      if (!noControls) v.controls = true;
    }
  });
  v.addEventListener("keydown", (e) => {
    if (e.code === "Space") e.preventDefault(), v.click();
  });
  v.addEventListener("playing", () => {
    c.classList.add("v--playing"), c.classList.remove("v--pause", "v--ended");
  });
  v.addEventListener("pause", () => {
    c.classList.add("v--pause"), c.classList.remove("v--playing", "v--ended");
  });
  v.addEventListener("ended", () => {
    c.classList.add("v--ended"), c.classList.remove("v--pause", "v--playing");
    playing = false;
    v.controls = false;
    // v.load(); //?fix - show poster after ended
  });
});
