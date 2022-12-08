const findBranchButton = document.getElementById('find-branch-button');
const findBranchResult = document.getElementById('find-branch-result');

function findBranch() {
  const findBranchInput = document.getElementById('find-branch-input');

  if (findBranchInput) {
    const findBranch = findBranchInput && findBranchInput.value;

    const child = findBranchResult.getElementsByTagName('table')[0];
    if (child) findBranchResult.removeChild(child);

    const options = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token c96dc9bec0307872f1f8df4e35fc7339ef7fbfba"
        },
        body: JSON.stringify({query: findBranch})
    }


    fetch(
      `https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/postal_unit`,
      options
    )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      const maped = data.suggestions.map((item) => {
        return `<tr>
            <td>Адрес</td>
            <td>${item.unrestricted_value}</td>
            <td>Почтовый код</td>
            <td>${item.value}</td>
          </tr>`
      }).join('');

      findBranchResult.innerHTML = `
        <table cellpadding="5" style="margin-top: 20px;">
          ${maped}
        </table>
      `;
    });
  } 
}

findBranchButton.addEventListener("click", findBranch, false);