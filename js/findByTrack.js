const searchButton = document.querySelector('.search-button');
const searchInput = document.getElementById('search-input');

const searchTracker = () => {
  const trackNumber = searchInput && searchInput.value
  if (trackNumber) {
    const url = `https://gdeposylka.ru/api/v4/tracker/detect/${trackNumber}`;

    fetch(
      url,
      {
        method: "GET",
        // mode: 'no-cors',
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
          'X-Authorization-Token': '6908af4306ad207541a8b8f62818e8b1d0362cedcf4f49b221f1725d4ad62505b9be9948a6f75bff',
        }
      }
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const resultData = data;
      console.log('resultData: ', resultData)
    })
  }
}

searchButton.addEventListener("click", searchTracker, false);