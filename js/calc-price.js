const calcButton = document.getElementById('calc-button');
const calcResult = document.getElementById('calc-result');

function calcPrice() {
  const fromInput = document.getElementById("from");
  const toInput = document.getElementById("to");

  if (fromInput && toInput) {
    const fromCode = fromInput && fromInput.value;
    const toCode = toInput && toInput.value;
    const url = `http://localhost:3000/calc-price/${fromCode}/${toCode}`;

    const child = calcResult.getElementsByTagName('table')[0];
    if (child) calcResult.removeChild(child);

    fetch(
      url,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': 'application/json',
        }
      }
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const resultData = JSON.parse(data);

      calcResult.innerHTML = `
        <table cellpadding="5" style="margin-top: 20px;">
          <tr>
            <td>От</td>
            <td>${resultData.locality_from}</td>
          </tr>
          <tr>
            <td>До</td>
            <td>${resultData.locality_to}</td>
          </tr>
          <tr>
            <td>Из города</td>
            <td>${resultData.city_from}</td>
          </tr>
          <tr>
            <td>В город</td>
            <td>${resultData.city_to}</td>
          </tr>

          <tr>
            <td>Стоимость простого письма, в рублях</td>
            <td>${resultData.simple_letter}</td>
          </tr>
          <tr>
            <td>Стоимость простой бандероли, в рублях</td>
            <td>${resultData.simple_parcel}</td>
          </tr>
          <tr>
            <td>Стоимость заказного письма 1 класса, в рублях</td>
            <td>${resultData.letter_reg_1class}</td>
          </tr>
        </table>
      `;
    });
  } 
}

calcButton.addEventListener("click", calcPrice, false);