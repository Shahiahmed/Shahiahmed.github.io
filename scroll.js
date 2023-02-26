const text = document.querySelector(".sec-text");

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Front-end developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "UI/UX Designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Web developer";
  }, 8000); //1s = 1000 milliseconds
};

textLoad();
setInterval(textLoad, 12000);
