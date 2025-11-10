

---

# 📘 MITS Attendance Calculator (Chrome Extension)

### 🚀 attendence-calculator-chrome-extension

---

## 🧩 Overview

**MITS Madanapalle Attendance Calculator** is a Chrome extension designed to make attendance tracking effortless for MITS students.
It extracts data directly from the official [MITS ERP attendance page](http://mitsims.in/studentIndex.html) and calculates your **overall attendance percentage** with just one click.

This latest version adds a **manual “Calculate Attendance”** button — ensuring accurate results even on slow or delayed page loads.

---

## ✨ Features

✅ **Manual Calculation:**
Click the **“Calculate Attendance”** button only after the page fully loads — no more 0% errors.

✅ **Accurate Results:**
Delivers precise overall attendance calculations (up to 99.99% accuracy).

✅ **Clean & Modern UI:**
Simple popup design with developer info and action button.

✅ **Lightweight:**
No extra dependencies — runs directly in your browser.

---

## ⚙️ Installation

1. **Download** the extension folder containing:

   ```
   manifest.json
   popup.html
   popup.js
   content.js
   icon.png
   ```

2. **Open Chrome** and go to:

   ```
   chrome://extensions/
   ```

3. Enable **Developer mode** (top right corner).

4. Click **“Load unpacked”** and select your extension folder.

5. The **MITS Attendance Analyzer icon** will now appear in your toolbar 🎓

---

## 🧠 Usage

1. Open your Chrome browser and make sure the extension is active.
2. Visit [http://mitsims.in/studentIndex.html](http://mitsims.in/studentIndex.html) and log in with your MITS credentials.
3. Once the page fully loads your attendance details, click the **extension icon** → then click **“Calculate Attendance”**.
4. Your **overall attendance percentage** will appear instantly in an alert box.

---

## 📁 File Structure

| File              | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| **manifest.json** | Configures extension permissions, icons, and popup behavior.                        |
| **popup.html**    | UI layout containing the header, “Calculate Attendance” button, and footer.         |
| **popup.js**      | Handles button click and injects attendance calculation script into the active tab. |
| **content.js**    | Contains attendance analysis logic and runs inside the MITS attendance page.        |
| **icon.png**      | Extension icon displayed in the Chrome toolbar.                                     |

---

## 👨‍💻 Developer

**Developed by:**

> 🧑‍💻 *22691A05F7 – III-CSE-C (2022–26)*
> Madanapalle Institute of Technology & Science

---

## 📝 Notes

* Ensure **“scripting”** and **“activeTab”** permissions are present in `manifest.json`.
* The calculation is now **manual** (via button click) to avoid 0% results on slow page loads.
* If no valid data is found, ensure the MITS attendance page is **fully loaded** before clicking “Calculate Attendance.”
* Works on both `http` and `https` versions of `mitsims.in`.

---


