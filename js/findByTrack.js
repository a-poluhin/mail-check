const searchButton = document.querySelector('.search-button');
const searchInput = document.getElementById('search-input');
const searchResult = document.getElementById('serach-result');

const searchTracker = () => {
  const trackNumber = searchInput && searchInput.value
  if (trackNumber) {
    const url = `http://localhost:3000/get-carriers/${trackNumber}`;

    const child = searchResult.getElementsByTagName('table')[0];
    if (child) searchResult.removeChild(child);

    fetch(
      url,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
        }
      }
    ).then((response) => {
      return response.json();
    }).then((data) => {
      const resultData = JSON.parse(data);
      if (resultData && resultData.length > 0) {
        const url2 = `http://localhost:3000/find-by-track/${resultData[0].code}/${trackNumber}`;

        fetch(
          url2,
          {
            method: "GET",
            headers: {
              "Access-Control-Allow-Origin": "*",
              'Content-Type': 'application/json',
            }
          }
        ).then((response) => {
          return response.json();
        }).then((data) => {
          const resultData = JSON.parse(data);
          console.log('resultData: ', resultData);
          
          const date = new Date(resultData.createdAt).toLocaleString('ru-RU');
          searchResult.innerHTML = `
            <table cellpadding="10">
              <tr>
                <td>Вес, кг</td>
                <td>${resultData.weight}</td>
              </tr>
              <tr>
                <td>Получатель</td>
                <td>${resultData.attributes.recipient}</td>
              </tr>
              <tr>
                <td>Адресовано</td>
                <td>${resultData.attributes.destinationAddress}</td>
              </tr>
              <tr>
                <td>Добавлена на сайт</td>
                <td>${date}</td>
              </tr>
            </table>
          `;
        })
      }
    })
  }
}

searchButton.addEventListener("click", searchTracker, false);