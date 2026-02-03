# Medical Form Template

A printable, editable medical form template for primary oncourology examinations. This client-side web app allows filling patient examination data, generating a DOCX report (primary exam, consilium, and epicrisis), and exporting it for record keeping.

## Features ✅
- Clean, printable A4 layout styled for medical documents
- Editable fields with `fill example data` (uses fictional placeholders by default for privacy)
- Export generated report to DOCX using `docx` and `FileSaver` (client-side)
- Reset form to non-personal default placeholders

## Usage 💡
1. Open `index.html` in a modern browser (Chrome, Edge, Firefox). No server required.
2. Fill the form manually, or click **"Namuna ma'lumotlar" / "Example data"** to populate fields with fictional values for testing.
3. Click **"Hujjatni saqlash (.docx)"** to generate and download a DOCX report.
4. Use **"Tozalash" / "Reset"** to clear inputs (resets to non-personal placeholders).

## Development / Contribution 🔧
- Main files:
  - `index.html` — HTML form and structure
  - `styles.css` — styling for screen and print
  - `script.js` — logic for autofill, reset, validation, and DOCX generation
- Dependencies (loaded from CDN):
  - `docx` for generating Word documents
  - `file-saver` for saving generated file in the browser

## Privacy & Example Data ⚠️
This project intentionally uses fictional example data by default to avoid embedding real personal data in the repository or demos. If you add real patient data, ensure proper privacy and legal compliance with data protection regulations.

## License 📄
This repository is licensed under the MIT License — see `LICENSE`.

---

If you need additional features (export to PDF, localization, field templates), open an issue or make a pull request.