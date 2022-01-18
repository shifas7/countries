function fetchData(){
    let countryname=cntry_name.value
    fetch(`https://restcountries.com/v2/name/${countryname}?fullText=true`).then(res=>res.json()).then(data=>populateValues(data))
    
}

function populateValues(country){
    // console.log(country[0].population);
    let countryName=country[0].name;
    let countryFlag=country[0].flag;
    let countryPopulation=country[0].population;
    let countryCurrencyName=country[0].currencies[0].name;
    let countryCurrencySymbol=country[0].currencies[0].symbol;
    let countryLanguage=country[0].languages[0].name;
    let countryCapital=country[0].capital
    html_data=` <div class="card" style="width: 18rem;">
    <img src="${countryFlag}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${countryName}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Capital:${countryCapital}</li>
      <li class="list-group-item">population:${countryPopulation}</li>
      <li class="list-group-item">Language:${countryLanguage}</li>
      <li class="list-group-item">currencyname:$${countryCurrencyName}</li>
      <li class="list-group-item">symbol:${countryCurrencySymbol}</li>


    </ul>
  </div>`
  document.querySelector("#result").innerHTML=html_data
    

}


var select=document.querySelector("#select")
fetch(`https://restcountries.com/v2/all`).then(res=>res.json()).then(data=>listCountries(data))

function listCountries(data){
  for(country of data){
    let option=document.createElement("option")
    option.text=country.name
    option.value=country.name
    select.append(option)
  }

}

function displayResult(){
  let cntryname=document.querySelector("#select").value
  fetch(`https://restcountries.com/v2/name/${cntryname}?fullText=true`).then(res=>res.json()).then(cntry=>populateValues(cntry))
}





