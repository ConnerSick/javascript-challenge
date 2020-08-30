let tableData = data;

let tableBody = d3.select('tbody');


function buildTable(data) {
    
    data.forEach((dataRow) => {

      let row = tableBody.append("tr");
  
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
          cell.text(val);
        }
      );
    });
}
    
let filteredData = tableData;

function updateTable() {

  let date = d3.select("#datetime").property("value");
  
  let filteredData = d3.select("ufo-table");
  // var filteredTableBody = d3.select('tbody');
  // var Table = document.getElementById("ufo-table");
  // Table.innerHTML = "";


    for (let i = 0, row; row = filteredData.tr[i]; i++) {
      if (filteredData.Date === date) {
        filteredData[i].style.display = "initial";
      } else {
        filteredData[i].style.display = "none";
      }
    }

  buildTable(filteredData);
  console.log(filteredData[1].datetime)
}


d3.selectAll("#filter-btn").on("click", updateTable);


buildTable(tableData);

// console.log(tableData[1].datetime)
