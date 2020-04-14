function getDogPics(number) {
  if(number > 50 || number < 1) {
    alert('Please select a number between the range of 1 and 50');
  }
  else {
    fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
  }
}

function watchSubmit() {
  $('.generate_dog_form').submit(event => {
    event.preventDefault();
    let numOfImages = $('.num_images').val();

    getDogPics(numOfImages);
});
}

function startApp() {
  console.log("App loaded! Waiting for submit!");
  watchSubmit();
}
$(startApp);