

const api123Key = "AIzaSyBe-AlG9lpyXyC7KV-AavR6tbqOc75iYdM";
const sheet123Id = "1cXqnV7kKebvzk6-BAuuBNSmDnpJOyCqh7LRVB6sHiL4";
const range123 = "POREFF!A:R";
const api103Url = "https://script.google.com/macros/s/AKfycbzBXPXYoX9xp2IqWYXvVYMPhgERM41XQ8CyhOBWtpnFQy2SZIkQqBPlHTfl9-Z3nn8rXg/exec"; 
const apiPOUrl = "https://script.google.com/macros/s/AKfycbxqXzSs-JOBPEUWqrI0-SUVmtGzRJKBoR3srraxO_peECS7ELm-xxZqOUQisJjCwrPW4A/exec";

const headerHTML = `
  <tr>
    <th>PO Link</th>
    <th>Progress %</th>
    <th>JOB NO.</th><th>Ledger</th><th>PO/Reff No</th><th>PO Amount</th>
    <th>Billing Amount</th><th>Balance</th><th>PO Weight</th><th>Billing Weight</th>
    <th>Balance</th><th>Status</th><th>User</th><th>Order By</th>
  </tr>`;

const visibleIndexes = [0,16, 6, 8, 12, 14, 9, 13, 15, 7, 1, 2];
let fullTableData = [];

async function fetch123Data() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet123Id}/values/${range123}?key=${api123Key}`;
  const response = await fetch(url);
  const data = await response.json();
  const rows = data.values || [];

  const header = rows[0];
  const dataRows = rows.slice(1);
  dataRows.sort((a, b) => (parseFloat(b[0]) || 0) - (parseFloat(a[0]) || 0));
  fullTableData = [header, ...dataRows];

  renderPOSUMMRYTable(fullTableData);
  setupSearch(fullTableData);
}

function renderPOSUMMRYTable(data) {
  const table = document.getElementById("dataTable");
  table.innerHTML = "";
  const thead = document.createElement("thead");
  thead.innerHTML = headerHTML;
  table.appendChild(thead);
  const tbody = document.createElement("tbody");

  // 🔴 Filter rows where column[2] === "LESHANT"
  const filteredData = [data[0], ...data.slice(1).filter(row => (row[2] || "").toUpperCase() === "LESHANT")];

  for (let i = 1; i < filteredData.length; i++) {
    const dataRow = filteredData[i];
    const row = document.createElement("tr");

    // --- PO Link ---
    const poNo = dataRow[6] || "";
    const poCell = document.createElement("td");

    if (poNo) {
      poCell.textContent = "---";
      fetch(apiPOUrl + "?invoice=" + encodeURIComponent(poNo))
        .then(res => res.text())
        .then(url => {
          if (url && url !== "NOT_FOUND") {
            poCell.textContent = "View PO";
            poCell.style.color = "red";
            poCell.style.textDecoration = "underline";
            poCell.style.cursor = "pointer";
            poCell.onclick = () => window.open(url, "_blank");
          } else {
            poCell.textContent = "---";
            poCell.removeAttribute("style");
            poCell.onclick = null;
          }
        })
        .catch(() => {
          poCell.textContent = "---";
          poCell.removeAttribute("style");
          poCell.onclick = null;
        });
    } else {
      poCell.textContent = "---";
    }
    row.appendChild(poCell);

    // --- Progress % ---
    const poAmount = parseFloat(dataRow[8]) || 0;
    const billingAmount = parseFloat(dataRow[12]) || 0;
    let progress = 0, label = "---";
    if (poAmount !== 0) {
      progress = (billingAmount / poAmount) * 100;
      label = progress <= 100
        ? `${progress.toFixed()}% work complete`
        : `${(progress - 100).toFixed()}% work extra`;
    }
    const progressCell = document.createElement("td");
    progressCell.textContent = label;
    if (progress > 100) progressCell.classList.add("orange-bg");
    else if (progress >= 60) progressCell.classList.add("blue-bg");
    else if (progress >= 30) progressCell.classList.add("pink-bg");
    else progressCell.classList.add("green-bg");
    row.appendChild(progressCell);

    // --- Visible Columns ---
    visibleIndexes.forEach(colIndex => {
      const td = document.createElement("td");
      const cellValue = dataRow[colIndex] || "";

      if (colIndex === 6) {
        td.style.cursor = "pointer";
        td.style.color = "#2980b9";
        td.style.fontSize = "16PX";
        td.style.textDecoration = "underline";
        td.addEventListener("click", () => {
          const jobNo = cellValue;
          const ledgerName = dataRow[16] || "---";
          const ledgerAddress = dataRow[17] || "---";
          fetchReffNo(jobNo, ledgerName, ledgerAddress);
        });
      }

      if (colIndex === 16) {
        td.style.cursor = "pointer";
        td.style.color = "#d35400";
        td.style.fontWeight = "bold";
        td.style.textDecoration = "underline";
        td.addEventListener("click", () => {
          const ledgerName = cellValue;
          const ledgerAddress = dataRow[17] || "---";
          fetchLedgerByLedgerName(ledgerName, ledgerAddress);
        });
      }

      if (typeof cellValue === 'string' && (cellValue.startsWith("http") || cellValue.startsWith("www"))) {
        const a = document.createElement("a");
        a.href = cellValue.startsWith("http") ? cellValue : "https://" + cellValue;
        a.innerHTML = "&#128221;";
        a.target = "_blank";
        td.appendChild(a);
      } else {
        td.textContent = cellValue;

        if (colIndex === 7) {
          td.style.fontWeight = "bold";
          td.style.fontSize = "13px";
          const colorMap = {
            "CANCELED": "#dc7633",
            "COMPLETED": "#48c9b0",
            "RUNNING": "#808b96",
            "PENDING": "#5dade2"
          };
          td.style.color = colorMap[cellValue] || "black";
        }
      }

      const col5Val = parseFloat(dataRow[14]) || 0;
      const col8Val = parseFloat(dataRow[15]) || 0;
      if (col5Val < 0 && colIndex === 14) td.classList.add("red-bg");
      if (col8Val < 0 && colIndex === 15) td.classList.add("red-bg");

      row.appendChild(td);
    });

    tbody.appendChild(row);
  }

  table.appendChild(tbody);

  // ✅ Call summary function ONLY for filtered LESHANT data
  displayporeffResults(filteredData);
}


function displayporeffResults(entries) {
  const summaryDiv = document.getElementById("poSummaryBox");
  summaryDiv.innerHTML = "";

  if (!entries || entries.length <= 1) {
    summaryDiv.innerHTML = "<p>No matching records found.</p>";
    return;
  }

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

function openModal(htmlContent) {
  document.getElementById("modalContent").innerHTML = htmlContent;
  document.getElementById("dataModal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
}
function closeModal() {
  document.getElementById("dataModal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}


// ***************  INVOICE PDF OPEN BY CLICK TO INVOICE NO ****************

function attachInvoiceClickREFF(tableId, invoiceColIndex = 3) {
  const table = document.getElementById(tableId);
  if (!table) return;

  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    const cell = row.cells[invoiceColIndex];
    if (!cell) continue;

    const invoiceNo = cell.textContent.trim();
    if (!invoiceNo) continue;

    const invoiceKey = invoiceNo.replace("/", "_");

    fetch(api103Url + "?invoice=" + encodeURIComponent(invoiceKey))
      .then(res => res.text())
      .then(url => {
        if (url && url !== "NOT_FOUND") {
          cell.style.color = "blue";
          cell.style.cursor = "pointer";
          cell.style.textDecoration = "underline";
          cell.onclick = () => window.open(url, "_blank");
        }
      });
  }
}


// ***************  TABLE PO NO BY INVOICE TABLE MODEL 1 ****************
async function fetchReffNo(jobNo, ledgerName = "---", ledgerAddress = "---") {
  const range124 = "FORM!B:K";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet123Id}/values/${range124}?key=${api123Key}`;
  const res = await fetch(url);
  const data = await res.json();
  const rows = data.values || [];
  const headers = rows[0];
  const matched = rows.slice(1).filter(r => r[4] === jobNo);

  if (matched.length === 0) {
    openModal("<p>No Match Found</p>");
    return;
  }

  let totalG = 0, totalH = 0;
  matched.forEach(row => {
    totalG += parseFloat(row[5]) || 0;
    totalH += parseFloat(row[6]) || 0;
  });

  let html = `
   <p><strong>Ledger Name:</strong> ${ledgerName}<br>
   <strong>Address:</strong> ${ledgerAddress}<br>
   <span style="color: green; font-weight: bold;">Total Billing:</span> Rs. ${totalG.toFixed()} /
   <span style="color: blue; font-weight: bold;">Total Weight:</span> ${totalH.toFixed()} Kg.</p>
   <table id="modalLedgerTable" border="1"><tr>`;
  headers.forEach(h => html += `<th>${h}</th>`);
  html += `</tr>`;

  matched.forEach(row => {
    const isCredit = (row[0] || "").toLowerCase().includes("credit note");
    const rowStyle = isCredit ? ` style="color: red;"` : "";
    html += `<tr${rowStyle}>`;
    headers.forEach((_, i) => {
      const cell = row[i] || "";
      if (typeof cell === "string" && (cell.startsWith("http") || cell.startsWith("www"))) {
        const href = cell.startsWith("http") ? cell : "https://" + cell;
        html += `<td><a href="${href}" target="_blank">&#128221;</a></td>`;
      } else {
        html += `<td>${cell}</td>`;
      }
    });
    html += `</tr>`;
  });

  html += `</table>`;
  openModal(html);
  attachInvoiceClickREFF("modalLedgerTable", 3);
}


// ***************  LEDGER SERCH BY LEDGER MODAL 2 ****************
async function fetchLedgerByLedgerName(ledgerName = "---", ledgerAddress = "---") {
  const range124 = "FORM!B:K"; // Expanded to column L for full data
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet123Id}/values/${range124}?key=${api123Key}`;
  const res = await fetch(url);
  const data = await res.json();
  const rows = data.values || [];
  const headers = rows[0];
  const matched = rows.slice(1).filter(r => r[2] === ledgerName);

  if (matched.length === 0) {
    openModal("<p>No Match Found</p>");
    return;
  }

  let totalG = 0, totalH = 0, totalD = 0;
  matched.forEach(row => {
    totalG += parseFloat(row[5]) || 0;
    totalH += parseFloat(row[6]) || 0;
    const type = (row[0] || "").toUpperCase();
    if (type.includes("BANK") || type.includes("TDS")) {
      totalD += parseFloat(row[3]) || 0;
    }
  });

  let html = `
   <p>
    <strong>Ledger Name:</strong> ${ledgerName}<br>
    <strong>Address:</strong> ${ledgerAddress}<br>
    <span style="color: green; font-weight: bold;">Total Billing:</span> Rs. ${totalG.toFixed()} /
    <span style="color: blue; font-weight: bold;">Total Weight:</span> ${totalH.toFixed()} Kg. /
    <span style="color: red; font-weight: bold;">Receipt (BANK/TDS):</span> Rs. ${totalD.toFixed()}
   </p>
   <table id="modalLedgerTable" border="1"><tr>`;  // Added ID to table
  headers.forEach(h => html += `<th>${h}</th>`);
  html += `</tr>`;

  matched.forEach(row => {
    const type = (row[0] || "").toLowerCase();
    const color = type.includes("bank") ? "red" : type.includes("credit") ? "blue" : "";
    html += `<tr style="color: ${color};">`;
    headers.forEach((_, i) => {
      const cell = row[i] || "";
      if (typeof cell === "string" && (cell.startsWith("http") || cell.startsWith("www"))) {
        const href = cell.startsWith("http") ? cell : "https://" + cell;
        html += `<td><a href="${href}" target="_blank">&#128221;</a></td>`;
      } else {
        html += `<td>${cell}</td>`;
      }
    });
    html += `</tr>`;
  });

  html += `</table>`;
  openModal(html);

  // ✅ Attach click listener to invoice column (index 3) after rendering modal table
  attachInvoiceClickREFF("modalLedgerTable", 3);
}


// ****************PRINT FUNCTION BOTH TABLE ************


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


fetch123Data();



















