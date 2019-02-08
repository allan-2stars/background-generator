const css = document.querySelector('h3');
const colorLeft = document.querySelector('.colorLeft');
const colorRight = document.querySelector('.colorRight');
const body = document.getElementById('gradient');

const setGradient = () => {
  // change the left color for gackground css style
  body.style.background = `linear-gradient(to right, ${colorLeft.value}, ${
    colorRight.value
  })`;

  //('linear-gradient(to right, blue, orange)');
};

colorLeft.addEventListener('input', setGradient);

colorRight.addEventListener('input', setGradient);
