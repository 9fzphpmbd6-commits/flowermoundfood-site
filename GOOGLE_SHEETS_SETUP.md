# Email Capture → Google Sheets Setup

## Step 1: Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name it something like "FM Food Email List"
3. In Row 1, add these headers:
   - A1: `Email`
   - B1: `Source`
   - C1: `Timestamp`

## Step 2: Add the Apps Script

1. In your Google Sheet, go to **Extensions → Apps Script**
2. Delete any existing code in the editor
3. Paste this entire script:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    // Check for duplicate emails
    var emails = sheet.getRange("A:A").getValues().flat();
    if (emails.includes(data.email)) {
      return ContentService
        .createTextOutput(JSON.stringify({ result: "duplicate", message: "Already subscribed" }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append new row
    sheet.appendRow([
      data.email,
      data.source || "unknown",
      new Date().toLocaleString("en-US", { timeZone: "America/Chicago" })
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ result: "success", message: "Subscribed" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok", message: "Email capture endpoint is live" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Click **Save** (Ctrl+S)
5. Click **Deploy → New deployment**
6. Click the gear icon next to "Select type" and choose **Web app**
7. Set:
   - Description: "FM Food Email Capture"
   - Execute as: **Me**
   - Who has access: **Anyone**
8. Click **Deploy**
9. Click **Authorize access** → choose your Google account → Allow
10. Copy the **Web app URL** — it looks like: `https://script.google.com/macros/s/XXXXX/exec`

## Step 3: Add the URL to Your Site

1. Open `/home/user/workspace/fmfood/email-capture.js`
2. Replace `YOUR_GOOGLE_SCRIPT_URL_HERE` with your actual Web app URL
3. Push to GitHub

## How It Works

- Popup appears after 8 seconds on the homepage (once per session)
- Email field also shows in the spin wheel winner modal
- Both feed into the same Google Sheet
- The "Source" column tracks where signups came from: "popup", "spin-wheel", or "footer"
- Duplicate emails are automatically rejected
- No third-party service needed — just your Google account

## Notes

- Google Apps Script has a daily limit of ~20,000 requests (more than enough)
- If you ever want to export to Mailchimp/MailerLite later, just download the sheet as CSV
- The script runs under your Google account but no personal info is exposed to users
