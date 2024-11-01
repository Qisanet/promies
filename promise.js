
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


function fetchData() {
  return delay(2000).then(() => {
    const data = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
    return data;
  });
}


function processData(data) {
  return delay(1000).then(() => {
    const processedData = data * 2;
    console.log("Processed Data:", processedData);
    return processedData;
  });
}


fetchData()
  .then((data) => {
    console.log("Fetched Data:", data);
    return processData(data);
  })
  .then((result) => {
    console.log("Final Result:", result);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
