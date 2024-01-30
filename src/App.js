import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [startDate, setStartDate] = useState('2022-01-01');
  const [endDate, setEndDate] = useState('2022-01-31');
  const [exchangeRates, setExchangeRates] = useState([]);
  const [multiSheet, setMultiSheet] = useState(false);

  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          `https://api.frankfurter.app/${startDate}..${endDate}?from=${baseCurrency}&to=${targetCurrency}`
        );
        const data = await response.json();

        // Extraer las tasas de cambio del objeto rates en la respuesta
        setExchangeRates(
          Object.entries(data.rates || {}).map(([date, rate]) => ({
            Date: date,
            Rate: rate[targetCurrency],
          }))
        );
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
      }
    };

    fetchExchangeRates();
  }, [baseCurrency, targetCurrency, startDate, endDate]);

  const generateReport = () => {
    const wb = XLSX.utils.book_new();

    if (multiSheet) {
      exchangeRates.forEach(({ Date, Rate }) => {
        const ws = XLSX.utils.aoa_to_sheet([['Date', 'Rate'], [Date, Rate]]);
        XLSX.utils.book_append_sheet(wb, ws, `${Date}_${targetCurrency}`);
      });
    } else {
      const ws = XLSX.utils.json_to_sheet(exchangeRates, { header: ['Date', 'Rate'] });
      XLSX.utils.book_append_sheet(wb, ws, `Exchange Rates_${targetCurrency}`);
    }

    const fileName = `Exchange_Rates_${targetCurrency}_${startDate}_${endDate}.xlsx`;
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Exchange Rate Generator</h1>
      <div className="mb-3">
        <label className="form-label">Base Currency:</label>
        <input
          type="text"
          className="form-control"
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value.toUpperCase())}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Target Currency:</label>
        <input
          type="text"
          className="form-control"
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value.toUpperCase())}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Start Date:</label>
        <input
          type="date"
          className="form-control"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">End Date:</label>
        <input
          type="date"
          className="form-control"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={multiSheet}
            onChange={() => setMultiSheet(!multiSheet)}
          />
          <label className="form-check-label">Generate Multiple Sheets</label>
        </div>
      </div>
      <button className="btn btn-primary" onClick={generateReport}>
        Generate Exchange Rates Report
      </button>
    </div>
  );
}

export default App;
