const apiKey = '8db903d71d0241d688665045241704&q';

function SearchDate() {

  const startDate = new Date(document.getElementById('startDate').value);
  const endDate = new Date(document.getElementById('endDate').value);
  const timeDiff = endDate - startDate;

  const daysDiff = timeDiff / (1000 * 3600 * 24);
  
  getWeatherTimeLine(document.getElementById('startDate').value, document.getElementById('endDate').value);

}
getWeatherTimeLine("2023-10-01","2023-09-25");
// ------------------------------------getWeatherTimeLine---------------------------------

function getWeatherTimeLine(startDate, endDate) {
    let Location="kandy";
  console.log(startDate,endDate);

  const imgIds = ["img1", "img2", "img3", "img4", "img5", "img6", "img7"];
  const titleClasses = [".title1", ".title2", ".title3", ".title4", ".title5", ".title6", ".title7"];
  const dateIds = ["date1", "date2", "date3", "date4", "date5", "date6", "date7"];

  console.log(startDate,endDate);
    fetch(`https://api.weatherapi.com/v1/history.json?key=${apiKey}=${Location}&dt=${startDate}&end_dt=${endDate}`)
        .then(Response => Response.json())
        .then(data => {
           console.log(data);
      for (let i = 0; i < 7; i++) {
        const img = document.getElementById(imgIds[i]);
        const title = document.querySelector(titleClasses[i]);
        const date = document.getElementById(dateIds[i]);
        
        /*img.src = forecastDay['condition']['icon'];
        
        title.innerHTML = forecastDay['condition']['text'];*/
        date.innerHTML =startDate;
      }
    
  });
}

