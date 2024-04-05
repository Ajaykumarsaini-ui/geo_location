const geo_btn = document.querySelector(".geo-btn");
const showDetails = document.querySelector(".showDetails");

geo_btn.addEventListener("click",  async () => {
  // console.log(navigator.geolocation.getCurrentPosition)

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // const longitude = console.log(position.coords.longitude);

        // const latitude = console.log(position.coords.latitude);

         showDetails.textContent = `User's latitude = ${position.coords.longitude} & the longitude = ${position.coords.latitude}`;
      },
      (error) => {
        console.log(error.message);
        showDetails.textContent = `${error.message}`
      }
    );
  }
});
