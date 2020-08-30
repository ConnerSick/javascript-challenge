let tableData = data;

const tbody = d3.select("tbody");

function buildTable(data) {

  tbody.html("");

  data.forEach((dataRow) => {

    const appendRow = tbody.append("tr");

    Object.values(dataRow).forEach((val) => {
      let tableCell = appendRow.append("td");
        tableCell.text(val);
      }
    );
  });
}

buildTable(tableData);

function updateTable() {

  const date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  if (date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  buildTable(filteredData);
}


d3.selectAll("#filter-btn").on("click", updateTable);

