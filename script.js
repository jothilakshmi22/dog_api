async function api() {
  setInterval(async () => {
    try {
      const api1 = await fetch("https://dog.ceo/api/breeds/image/random");
      const apidata = await api1.json();
      console.log(apidata.message);

      imgtagg = document.getElementById("imgtag").src = apidata.message;
    } catch (err) {
      console.log(err);
    }
  }, 2000);
}
api();
