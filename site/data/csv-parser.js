/* ============================================================
   CSV PARSER for Roblox Analytics exports
   ------------------------------------------------------------
   Roblox exports one metric per file, format:
     Breakdown,Date,<Metric Name>
     Total,2026-04-27T00:00:00.000Z,0.1242...
   This parser is generic: it reads the 3rd column as the value,
   the 2nd as the date, and uses the 3rd header as the label.
   Ratio metrics (retention) come as 0..1 and are shown as %.
   ============================================================ */
const CsvParser = (function () {

  function parse(text) {
    const lines = text.trim().split(/\r?\n/);
    if (lines.length < 2) return null;

    const header = splitRow(lines[0]);
    // value column = last column; date column = the one that looks like a date
    const metricName = header[header.length - 1] || "Value";

    const points = [];
    for (let i = 1; i < lines.length; i++) {
      const cols = splitRow(lines[i]);
      if (cols.length < 2) continue;
      // find date + value
      let date = null, value = null;
      for (const c of cols) {
        if (date === null && /\d{4}-\d{2}-\d{2}/.test(c)) date = c.slice(0, 10);
      }
      value = parseFloat(cols[cols.length - 1]);
      if (date && !isNaN(value)) points.push({ date, value });
    }
    if (!points.length) return null;

    const max = Math.max(...points.map(p => p.value));
    const isRatio = max <= 1.0;   // retention etc. come as fractions

    return {
      metric: metricName,
      isRatio,
      labels: points.map(p => shortDate(p.date)),
      rawLabels: points.map(p => p.date),
      values: points.map(p => isRatio ? +(p.value * 100).toFixed(2) : Math.round(p.value)),
      unit: isRatio ? "%" : ""
    };
  }

  // handles simple CSV (no quoted commas in these exports, but be safe)
  function splitRow(line) {
    const out = []; let cur = ""; let q = false;
    for (const ch of line) {
      if (ch === '"') q = !q;
      else if (ch === ',' && !q) { out.push(cur); cur = ""; }
      else cur += ch;
    }
    out.push(cur);
    return out.map(s => s.trim());
  }

  function shortDate(d) {
    const [y, m, day] = d.split("-");
    const mon = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][parseInt(m,10)-1];
    return mon + " " + parseInt(day, 10);
  }

  return { parse };
})();
