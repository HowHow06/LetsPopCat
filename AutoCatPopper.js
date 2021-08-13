const pointerDown = new PointerEvent("pointerdown");
const pop = () => {
  document.dispatchEvent(pointerDown);
  app.__vue__.sequential_max_pops = 0; //reset the sequential count every single time
};

const autoPop = setInterval(pop, 100);

clearInterval(autoPop); //only use this code when you wanna stop the popping
