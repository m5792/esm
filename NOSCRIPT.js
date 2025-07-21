const api123Key = "AIzaSyBe-AlG9lpyXyC7KV-AavR6tbqOc75iYdM";
const sheet123Id = "1cXqnV7kKebvzk6-BAuuBNSmDnpJOyCqh7LRVB6sHiL4";
const range123 = "POREFF!A:R";

const headerHTML = `
  <tr>
    <th>Progress %</th>
   <th>Status</th> <th>Ledger</th><th>PO/Reff No</th><th>PO Amount</th><th>Billing Amount</th><th>Balance</th>
    <th>PO Weight</th><th>Billing Weight</th><th>Balance</th><th>PO Pdf.</th><th>User</th><th>Order By</th>
  </tr>`;

const visibleIndexes = [7,16, 6, 8, 12, 14, 9, 13, 15, 11, 1, 2];
let fullTableData = [];

// Fetch and sort Google Sheet data
async function fetch123Data() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet123Id}/values/${range123}?key=${api123Key}`;
  const response = await fetch(url);
  const data = await response.json();
  const rows = data.values || [];

  const header = rows[0];
  const dataRows = rows.slice(1);

  // Sort by column 12 (Billing Amount) descending
  dataRows.sort((a, b) => (parseFloat(b[13]) || 0) - (parseFloat(a[13]) || 0));

  fullTableData = [header, ...dataRows];

  renderPOSUMMRYTable(fullTableData);
  setupSearch(fullTableData);
}
//****


  function renderPOSUMMRYTable(data) {
  const table = document.getElementById("dataTable");
  table.innerHTML = "";

  // Add static header
  const thead = document.createElement("thead");
  thead.innerHTML = headerHTML;
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  for (let i = 1; i < data.length; i++) {
    // ✅ Filter to show only rows where User column (index 1) === "LESHANT"
    if ((data[i][2] || "").toUpperCase() !== "LESHANT") continue;

    const row = document.createElement("tr");

    // Progress Calculation
    const poAmount = parseFloat(data[i][8]) || 0;
    const billingAmount = parseFloat(data[i][12]) || 0;
    let progress = 0;
    let label = "---";

    if (poAmount !== 0) {
      progress = (billingAmount / poAmount) * 100;
      label = progress <= 100
        ? `${progress.toFixed()}% work complete`
        : `${(progress - 100).toFixed()}% work extra`;
    }

    const progressCell = document.createElement("td");
    progressCell.textContent = label;

    // Progress color
    if (progress > 100) progressCell.classList.add("orange-bg");
    else if (progress >= 60) progressCell.classList.add("blue-bg");
    else if (progress >= 30) progressCell.classList.add("pink-bg");
    else progressCell.classList.add("green-bg");

    row.appendChild(progressCell);

    // Add other visible columns
    visibleIndexes.forEach(colIndex => {
      const td = document.createElement("td");
      const cellValue = data[i][colIndex] || "";

      if (colIndex === 16) {
        td.style.cursor = "pointer";
        td.style.color = "#2980b9";
        td.style.fontSize = "16px";
        td.style.textDecoration = "underline";
        td.addEventListener("click", () => {
          const jobNo = cellValue;
          const ledgerName = data[i][16] || "---";
          const ledgerAddress = data[i][17] || "---";
          fetchReffNo(jobNo, ledgerName, ledgerAddress);
        });
      }

//@@@@@@@
if (colIndex === 6) { // Ledger column
  td.style.cursor = "pointer";
  td.style.color = "#2980b9";
  td.style.fontSize = "16px";
  td.style.textDecoration = "underline";
  td.addEventListener("click", () => {
    const ledgerName = cellValue;
    const ledgerAddress = data[i][17] || "---"; // Assuming address is index 17
    fetchLedgerByLedgerName(ledgerName, ledgerAddress);
  });
}
//@@@@
      if (typeof cellValue === 'string' && (cellValue.startsWith("http") || cellValue.startsWith("www"))) {
        const a = document.createElement("a");
        a.href = cellValue.startsWith("http") ? cellValue : "https://" + cellValue;
        a.innerHTML = "&#128221;";
        a.target = "_blank";
        td.appendChild(a);
      } else {
        td.textContent = cellValue;

        // ✅ Status formatting
        if (colIndex === 7) {
          td.style.fontWeight = "bold";
          td.style.fontSize = "13px";

          if (cellValue === "CANCELED") td.style.color = "#dc7633";
          else if (cellValue === "COMPLETED") td.style.color = "#48c9b0";
          else if (cellValue === "RUNNING") td.style.color = "#808b96";
          else if (cellValue === "PENDING") td.style.color = "#5dade2";
        }
      }

      // Highlight red for negative balances
      const col5Val = parseFloat(data[i][14]) || 0;
      const col8Val = parseFloat(data[i][15]) || 0;
      if (col5Val < 0 && colIndex === 14) td.classList.add("red-bg");
      if (col8Val < 0 && colIndex === 15) td.classList.add("red-bg");

      row.appendChild(td);
    });

    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  // ✅ Filtered data passed to summary
  const filteredForSummary = data.filter((row, index) => index === 0 || (row[1] || "").toUpperCase() === "LESHANT");
  displayporeffResults(entries);
}






function displayporeffResults(entries) {
  const summaryDiv = document.getElementById("poSummaryBox");
  summaryDiv.innerHTML = "";

  if (!entries || entries.length <= 1) {
    summaryDiv.innerHTML = "<p>No matching records found.</p>";
    return;
  }

  // Count statuses in column index 14 (visible index 14 = actual index 9 or 13?)
  let completed = 0, pending = 0, canceled = 0, running = 0;

  entries.slice(1).forEach(row => {
    const status = (row[7] || "").toLowerCase();
    if (status === "completed") completed++;
    else if (status === "pending") pending++;
    else if (status === "canceled") canceled++;
    else if (status === "running") running++;
  });

  summaryDiv.innerHTML = `
    ✅ Completed: <span class="complete">${completed}</span> |
    ⏳ Pending: <span class="pending">${pending}</span> |
    ❌ Canceled: <span class="canceled">${canceled}</span> |
    🔄 Running: <span class="running">${running}</span>
  `;
}


// Search functionality
function setupSearch(data) {
  const searchInput = document.getElementById("search123Input");
  searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();
    const filtered = data.filter((row, i) => {
      if (i === 0) return true;
      return row.some(cell => (cell || "").toLowerCase().includes(text));
    });
    renderPOSUMMRYTable(filtered);
  });
}

// Modal handling
function openModal(htmlContent) {
  document.getElementById("modalContent").innerHTML = htmlContent;
  document.getElementById("dataModal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}

function closeModal() {
  document.getElementById("dataModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


function printModal() {
  const content = document.getElementById("modalContent").innerHTML;

  const printWindow = window.open('', '', 'height=800,width=1000');
  printWindow.document.write(`
    <html>
      <head>
        <title>Print</title>

        <body>

           <span style="color:rgb(246, 156, 156);font-size:130%;font-family:Magneto;">eS |</span> 
  <span style="color:#a0d0f0;font-size:130%;font-family:Magneto;">MTally</span>
            <h4>Multitech Infracon Pvt. Ltd.</h4>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }

          table {
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 14px;
}

th, td {
  border: 1px solid #e0e0e0;
  padding: 10px 14px;
  text-align: left;
}

th {
  background-color: #004d80;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}


        </style>
      </head>
      <body>
        ${content}
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}


// Show Ledger Modal
// Show Ledger Modal
async function fetchReffNo(jobNo, ledgerName = "---", ledgerAddress = "---") {
  const range124 = "LEDGER!B:L";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet123Id}/values/${range124}?key=${api123Key}`;
  const res = await fetch(url);
  const data = await res.json();
  const rows = data.values || [];

  const headers = rows[0];
  const matched = rows.slice(1).filter(r => r[2] === jobNo); // Column D = Job No

  if (matched.length === 0) {
    openModal("<p>No Match Found</p>");
    return;
  }

  // total coloums
 let totalG = 0;
let totalH = 0;
let totalD = 0;

matched.forEach(row => {
  totalG += parseFloat(row[5]) || 0; // Billing Amount
  totalH += parseFloat(row[6]) || 0; // Billing Weight

  const type = (row[0] || "").toUpperCase();
  if (type.includes("BANK") || type.includes("TDS")) {
    totalD += parseFloat(row[3]) || 0; // Column D = index 2 (A=0, B=1, C=2, D=3)
  }
});


  let html = `
    <p>
      <strong>Ledger Name:</strong> ${ledgerName}<br>
      <strong>Address:</strong> ${ledgerAddress}<br><br>

      <span style="color: rgb(1, 107, 37); font-weight: bold; font-size: 18px;">Total Billing:</span> Rs. ${totalG.toFixed()} /
      <span style="color: blue; font-weight: bold; font-size: 18px;">Total Weight:</span> ${totalH.toFixed()} Kg. /
    
<span style="color: red; font-weight: bold; font-size: 18px;">Receipt (BANK/TDS):</span> Rs. ${totalD.toFixed()}

    </p>

    <table border='1'><tr>`;

  // Table Headers
  headers.forEach(h => {
    html += `<th>${h}</th>`;
  });
  html += `</tr>`;

  // Table Rows
  matched.forEach(row => {
    const isCredit = (row[0] || "").toLowerCase().includes("credit note");
    const isBank = (row[0] || "").toLowerCase().includes("bank");

    // Apply row color: red (bank) overrides blue (credit)
    let rowColor = "";
    if (isBank) rowColor = "red";
    else if (isCredit) rowColor = "blue";

    let rowStyle = rowColor ? ` style="color: ${rowColor};"` : "";
    html += `<tr${rowStyle}>`;

    headers.forEach((_, i) => {
      const cell = row[i] || "";

      // Detect links
      if (typeof cell === "string" && (cell.startsWith("http") || cell.startsWith("www"))) {
        const href = cell.startsWith("http") ? cell : "https://" + cell;
        html += `<td><a href="${href}" target="_blank">&#128221;</a></td>`;
      } else {
        // Override first column in credit notes to ensure visibility
        const overrideStyle = isCredit && i === 0 ? ` style="color: black;"` : "";
        html += `<td${overrideStyle}>${cell}</td>`;
      }
    });

    html += `</tr>`;
  });

  html += `</table>`;

  // Show in modal
  openModal(html);
}

//@@@@@@

async function fetchLedgerByLedgerName(ledgerName = "---", ledgerAddress = "---") {
  const range124 = "LEDGER!B:L";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet123Id}/values/${range124}?key=${api123Key}`;
  const res = await fetch(url);
  const data = await res.json();
  const rows = data.values || [];

  const headers = rows[0];
  const matched = rows.slice(1).filter(r => (r[4] || "").toUpperCase() === ledgerName.toUpperCase()); // Column F = Ledger

  if (matched.length === 0) {
    openModal("<p>No Match Found</p>");
    return;
  }

  let totalG = 0;
  let totalH = 0;
  matched.forEach(row => {
    totalG += parseFloat(row[5]) || 0; // Billing Amount
    totalH += parseFloat(row[6]) || 0; // Billing Weight
  });

  let html = `
    <p>
      <strong>Ledger Name:</strong> ${ledgerName}<br>
      <strong>Address:</strong> ${ledgerAddress}<br><br>

      <span style="color: rgb(1, 107, 37); font-weight: bold; font-size: 18px;">Total Billing:</span> Rs. ${totalG.toFixed()} /
      <span style="color: blue; font-weight: bold; font-size: 18px;">Total Weight:</span> ${totalH.toFixed()} Kg.
    </p>

    <table border='1'><tr>`;

  headers.forEach(h => {
    html += `<th>${h}</th>`;
  });
  html += `</tr>`;

  matched.forEach(row => {
    const isCredit = (row[0] || "").toLowerCase().includes("credit note");
    const isBank = (row[0] || "").toLowerCase().includes("bank");

    let rowColor = "";
    if (isBank) rowColor = "red";
    else if (isCredit) rowColor = "blue";

    let rowStyle = rowColor ? ` style="color: ${rowColor};"` : "";
    html += `<tr${rowStyle}>`;

    headers.forEach((_, i) => {
      const cell = row[i] || "";
      if (typeof cell === "string" && (cell.startsWith("http") || cell.startsWith("www"))) {
        const href = cell.startsWith("http") ? cell : "https://" + cell;
        html += `<td><a href="${href}" target="_blank">&#128221;</a></td>`;
      } else {
        const overrideStyle = isCredit && i === 0 ? ` style="color: black;"` : "";
        html += `<td${overrideStyle}>${cell}</td>`;
      }
    });

    html += `</tr>`;
  });

  html += `</table>`;

  openModal(html);
}
//@@@@@


// Init load
fetch123Data();