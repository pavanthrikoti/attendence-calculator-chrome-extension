// content.js
// This file no longer auto-runs anything.
// The popup will trigger the calculation manually when you click "Calculate Attendance".

console.log("📘 MITS Attendance Analyzer content script loaded.");

// Optional helper (if you ever want to access page data in popup directly)
function analyzeAttendanceExtJS() {
  const clean = str => (str ? str.replace(/[^\d.]/g, '').trim() : '');

  let totalAttended = 0;
  let totalConducted = 0;
  let validRows = 0;

  document.querySelectorAll('.x-fieldset-body').forEach(section => {
    const spans = section.querySelectorAll('span');
    const values = Array.from(spans).map(span => span.innerText.trim());

    if (values.length < 4) return;

    const subjectCode = values[1];
    const attendedRaw = clean(values[2]);
    const conductedRaw = clean(values[3]);

    const lower = subjectCode.toLowerCase();
    if (
      lower.includes("green") || lower.includes("blue") ||
      lower.includes("orange") || lower.includes("red") ||
      lower.includes("am") || lower.includes("pm") ||
      !attendedRaw || !conductedRaw
    ) return;

    const attended = parseFloat(attendedRaw);
    const conducted = parseFloat(conductedRaw);

    if (!isNaN(attended) && !isNaN(conducted) && conducted > 0) {
      totalAttended += attended;
      totalConducted += conducted;
      validRows++;
      const percentage = (attended / conducted) * 100;
      console.log(`✅ Subject ${subjectCode}: ${attended}/${conducted} (${percentage.toFixed(2)}%)`);
    }
  });

  if (validRows === 0 || totalConducted === 0) {
    alert("⚠️ No valid attendance records found or page not fully loaded.");
  } else {
    const overall = ((totalAttended / totalConducted) * 100).toFixed(2);
    alert(`✅ Your overall attendance is ${overall}%`);
  }
}
