const ctx = document.getElementById('myChart');

const mockData = [
  {"code":"BG","name":"Болгария"},
  {"code":"BO","name":"Боливия"},
  {"code":"BA","name":"Босния и Герцеговина"},
  {"code":"BW","name":"Ботсвана"},
  {"code":"BR","name":"Бразилия"},
  {"code":"BN","name":"Бруней"},
  {"code":"BF","name":"Буркина-Фасо"},
  {"code":"BI","name":"Бурунди"},
  {"code":"BT","name":"Бутан"},
  {"code":"RU","name":"Россия"},
  {"code":"BY","name":"Республика Беларусь"},
  {"code":"UA","name":"Украина"},
  {"code":"KZ","name":"Казахстан"},
  {"code":"US","name":"США"},
  {"code":"GB","name":"Великобритания"},
  {"code":"DE","name":"Германия"},
  {"code":"CN","name":"Китай"},
  {"code":"HK","name":"Гонконг"},
  {"code":"MY","name":"Малайзия"},
  {"code":"TH","name":"Таиланд"},
  {"code":"AU","name":"Австралия"},
  {"code":"AT","name":"Австрия"},
  {"code":"AZ","name":"Азербайджан"},
  {"code":"AL","name":"Албания"},
  {"code":"DZ","name":"Алжир"},
  {"code":"AI","name":"Ангилья"},
  {"code":"AO","name":"Ангола"},
  {"code":"AD","name":"Андорра"},
  {"code":"AG","name":"Антигуа и Барбуда"},
  {"code":"AR","name":"Аргентина"},
  {"code":"AM","name":"Армения"},
  {"code":"AW","name":"Аруба"},
  {"code":"AF","name":"Афганистан"},
  {"code":"BS","name":"Багамы"},
  {"code":"BD","name":"Бангладеш"},
  {"code":"BB","name":"Барбадос"},
  {"code":"BH","name":"Бахрейн"},
  {"code":"BZ","name":"Белиз"},
  {"code":"BE","name":"Бельгия"},
  {"code":"BJ","name":"Бенин"}
];

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

function getCountry () {
  // get('https://moyaposylka.ru/api/v1/countries', (response) => {
  //   debugger
  //   const countries = response ? JSON.parse(response) : mockData;
  //   const slicedCountries = countries.slice(0, 10);
  //   if (slicedCountries) {
  //     const myChart = new Chart(ctx, {
  //       type: 'bar',
  //       data: {
  //           labels: slicedCountries.map((item) => item.name),
  //           datasets: [{
  //               label: 'Данные за 2021 год',
  //               data: slicedCountries.map(item => item.name.length),
  //               backgroundColor: slicedCountries.map(item => random_rgba()),
  //           }]
  //       },
  //       options: {
  //           scales: {
  //               y: {
  //                   beginAtZero: true
  //               }
  //           }
  //       }
  //     });
  //   }
  // })

  // fetch(
  //   'https://moyaposylka.ru/api/v1/countries',
  //   {
  //     method: "GET",
  //     // mode: 'no-cors',
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'X-Api-Key': '2e1e2dddae2c6506c06e1094ae3e6de0',
  //     }
  //   }
  // )
  //   .then((response) => {
  //     return response.text();
  //   })
  //   .then((data) => {
  //     const countries = data ? JSON.parse(data) : mockData;
  //     const slicedCountries = countries.slice(0, 10);
  //     if (slicedCountries) {
  //       const myChart = new Chart(ctx, {
  //         type: 'bar',
  //         data: {
  //             labels: slicedCountries.map((item) => item.name),
  //             datasets: [{
  //                 label: 'Данные за 2021 год',
  //                 data: slicedCountries.map(item => item.name.length),
  //                 backgroundColor: slicedCountries.map(item => random_rgba()),
  //             }]
  //         },
  //         options: {
  //             scales: {
  //                 y: {
  //                     beginAtZero: true
  //                 }
  //             }
  //         }
  //       });
  //     }
  //   })
}

getCountry();