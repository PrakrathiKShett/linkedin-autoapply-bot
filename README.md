# 💼 LinkedIn AutoApply Bot

**LinkedIn AutoApply Bot** is a smart automation tool built with **Node.js**, **Puppeteer**, and a **Chrome Extension interface** to help job seekers automatically search, filter, and track job applications on LinkedIn — all from one clean dashboard.

This project was designed as a unique automation + UI integration solution, developed in **VS Code**, and built to simplify the entire “Easy Apply” job search process.

---

## 🌟 Key Features

- 🔑 **Register / Login System**  
  Manage user sessions securely before using the bot.

- 🤖 **Automated Job Search (Puppeteer)**  
  Automatically opens LinkedIn, searches for jobs by keywords and location, and waits up to **2 hours** for user interaction (custom session duration).

- 🧭 **Smart Job Filtering**  
  Filter jobs by experience level, type, or keywords dynamically.

- 💼 **Chrome Extension Dashboard**  
  View, filter, and track all applied jobs in one place.

- 📄 **Job Data Storage**  
  Saves applied jobs in `appliedJobs.json` (company, title, location, and date).

- 🧠 **OCR Integration (Tesseract.js)**  
  Extracts job details or resume data from screenshots for smarter insights.

- 🕒 **Session Control**  
  Keeps Chrome open for long sessions (1–2 hours or until manually closed).

---

## 🧰 Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| **Frontend (Extension)** | HTML, CSS, JavaScript |
| **Backend Automation** | Node.js, Puppeteer |
| **AI/OCR** | Tesseract.js |
| **Database** | JSON Local Storage |
| **IDE Used** | Visual Studio Code |
| **Browser** | Google Chrome (Extension Mode) |

---

## ⚙️ Installation Guide

### Step 1: Clone Repository
```bash
git clone https://github.com/yourusername/linkedin-autoapply-bot.git
cd linkedin-autoapply-bot
tep 2: Install Dependencies
npm install

Step 3: Run Auto Apply Script
node autoapply.js


✅ Chrome will launch automatically.
Login to LinkedIn manually (once) — the bot will take over job search automation.

🧩 Chrome Extension Setup

Open Chrome and go to:

chrome://extensions/


Enable Developer Mode (top right corner).

Click Load Unpacked.

Select the folder that contains your manifest.json.

You’ll now see the extension icon appear in the toolbar.

🗂️ Folder Structure
linkedin-autoapply-bot/
│
├── background/          # Extension background scripts
├── content/             # Content scripts injected into LinkedIn pages
├── icons/               # Extension icons
├── lib/                 # OCR and helper libraries
├── popup/               # Popup HTML, CSS, JS for UI
│
├── autoapply.js         # Main Puppeteer automation script
├── manifest.json        # Chrome extension manifest file
├── options.html         # Settings dashboard
├── options.js           # Dashboard logic
├── package.json         # Node dependencies
└── appliedJobs.json     # Stored applied job data


🧾 Project Overview

This project automates LinkedIn job searches, collects job data, and provides an organized dashboard interface.
It’s designed to minimize repetitive job-hunting effort while giving a visual, easy-to-use experience for users.

Core Goals:

Simplify the LinkedIn “Easy Apply” workflow.

Reduce time spent manually applying.

Build a complete end-to-end system (automation + UI + data storage).

🧪 Validation & Testing
Test Type	Description	Result
Login Flow	Validates login persistence	✅ Passed
Search Automation	Checks for correct job keyword match	✅ Passed
Data Storage	Saves job info to JSON accurately	✅ Passed
Extension UI	Displays job cards correctly	✅ Passed
🚀 Future Enhancements

⚙️ Auto-upload resumes on LinkedIn “Easy Apply”

📧 Email alerts for matching job searches

☁️ Cloud sync for applied job history

💬 Chat-based job assistant interface

🕶️ Dark mode for dashboard

---

## 👨‍💻 Author

**Prakrathi K Shetty**  
📧 Email: [prakrathishetty7896@gmail.com](mailto:prakrathishetty7896@gmail.com)  
🌐 GitHub: [PrakrathiKShett](https://github.com/PrakrathiKShett)

---<img width="1920" height="1020" alt="Screenshot 2025-11-05 181748" src="https://github.com/user-attachments/assets/cac9c26f-4876-4e5c-bdf5-91083338c200" />


