const defaultLocation = '#/weather?lat=37.5553193&lon=126.9199181'; //어메이징 농카이 위치

window.navigator.geolocation.getCurrentPosition((position) => {
  const {latitude, longitude} = position.coords;

  console.log(latitude, longitude);
});