delete Hammer.defaults.cssProps.userSelect;
const APP = document.querySelector("#app");
const hammerjs = new Hammer(APP);

hammerjs.on("panleft panright", (event) => {
  console.log(event.type)
  if (event.pointerType === "touch") {
    const windowWidth = window.screen.width;
    const distance = Math.floor(event.distance) >= 50;
    if (
      event.type === "panleft" &&
      event.center.x > windowWidth - 100 &&
      distance
    ) {
      modalNewTask.classList.add("active");
    }
    if (event.type === "panright" && distance) {
      modalNewTask.classList.remove("active");
    }
  }
});
