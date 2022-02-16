async function getCovidStats() {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await response.json();
      console.table(data);
    } catch (err) {
      console.error(err);
    }
  }
   
  getCovidStats();