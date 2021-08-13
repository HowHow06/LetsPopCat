const pointerDown = new PointerEvent("pointerdown");
const pop = () => {
  document.dispatchEvent(pointerDown);
  app.__vue__.sequential_max_pops = 0; //reset the sequential count every single time
};

const autoPop = setInterval(pop, 100);


//--Copy and paste the code above to console to use this code, but make sure you understand the code
//--把上面的代码复制贴上到Console里面就行了，当然请你先试着理解代码

clearInterval(autoPop); //only use this code when you wanna stop the popping
