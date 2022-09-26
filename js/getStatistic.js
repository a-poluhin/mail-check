const ctx = document.getElementById('myChart');

function getCountry () {
  fetch(
    'https://moyaposylka.ru/api/v1/countries?api_key=[2e1e2dddae2c6506c06e1094ae3e6de0]',
    {
      method: "GET",
      // mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  )
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      const countries = data ? JSON.parse(data) : [];

      if (countries) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
              labels: countries.map((item) => item.name).slice(0, 6),
              datasets: [{
                  label: 'Данные за 2021 год',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.2)',
                      'rgba(54, 162, 235, 0.2)',
                      'rgba(255, 206, 86, 0.2)',
                      'rgba(75, 192, 192, 0.2)',
                      'rgba(153, 102, 255, 0.2)',
                      'rgba(255, 159, 64, 0.2)'
                  ],
                  borderColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(54, 162, 235, 1)',
                      'rgba(255, 206, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(153, 102, 255, 1)',
                      'rgba(255, 159, 64, 1)'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
              scales: {
                  y: {
                      beginAtZero: true
                  }
              }
          }
        });
      }
    })
}
getCountry();