# attendence-calculator-chrome-extension
# MITS Madanapalle Attendance Calculator
# Overview
This is a Chrome extension designed to calculate and display attendance percentages from the MITS attendance page (http://mitsims.in/studentIndex.html). It provides seamless, accurate, and time-saving attendance tracking with a one-click solution.
Features

Accurate Tracking: Achieves 99.99% precision in attendance calculation.
Instant Results: Displays results directly in the browser console and via alerts.
User-Friendly: Simple popup interface for easy access.


# Usage

Open the MITS attendance page (http://mitsims.in/studentIndex.html).
Click the extension icon to open the popup.
Refresh the page if needed; results will appear in the console and an alert will show your overall attendance percentage.

# Files

manifest.json: Defines the extension's metadata and permissions.
popup.html: Contains the popup UI with instructions and developer info.
content.js: JavaScript logic to analyze attendance data from the MITS page.

# Developer

Created by: 22691A05F7 III-CSE-C (2022-26)

# Notes

Ensure the extension has the necessary permissions (scripting, activeTab).
The script runs 3 seconds after page load to ensure all data is available.
