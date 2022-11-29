const searchButton = document.querySelector('.search-button');
const searchInput = document.getElementById('search-input');

const searchTracker = () => {
  const trackNumber = searchInput && searchInput.value
  if (trackNumber) {
    // const url = `https://gdeposylka.ru/api/v4/tracker/detect/${trackNumber}`;
    const url2 = `http://localhost:3000/find-track/${trackNumber}`;

    fetch(
      url2,
      {
        method: "GET",
        // mode: 'no-cors',
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
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