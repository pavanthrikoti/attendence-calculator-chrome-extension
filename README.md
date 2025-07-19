# attendence-calculator-chrome-extension
MITS Madanapalle Attendance Calculator
# Overview
This Chrome extension simplifies attendance tracking for MITS students by automatically calculating and displaying attendance percentages from the MITS attendance page (http://mitsims.in/studentIndex.html).
Features

Automatic Calculation: Instantly computes attendance percentages.
High Precision: Offers 99.99% accuracy.
User-Friendly: No manual input required; results pop up automatically.

# Installation

Download the extension folder containing manifest.json, popup.html, and content.js.
Open Chrome and navigate to chrome://extensions/.
Enable "Developer mode" in the top right corner.
Click "Load unpacked" and select the downloaded folder.
The extension icon will appear in your toolbar.

# Usage

Open your Chrome browser and ensure the extension is active.
Visit http://mitsims.in/studentIndex.html and log in with your MITS credentials.
The extension will automatically analyze your attendance data and display the overall percentage in an alert (after a 3-second delay).

# Files

manifest.json: Configures the extension's permissions and settings.
popup.html: Provides a simple popup with usage instructions and developer details.
content.js: Contains the JavaScript logic to extract and calculate attendance from the MITS page.

# Developer

Created by: 22691A05F7 III-CSE-C (2022-26)

# Notes

Ensure the extension has scripting and activeTab permissions.
The automatic calculation triggers 3 seconds after the page loads to ensure all data is available.
For best results, refresh the page after logging in if the attendance data doesn’t appear immediately.
