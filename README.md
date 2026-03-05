# Origin Sperm Bank — Website

A full-featured CMS website built with [Apostrophe CMS v2](https://apostrophecms.com/) (Node.js + MongoDB).

## Tech Stack

- **CMS:** Apostrophe CMS v2
- **Runtime:** Node.js (v16+ recommended)
- **Database:** MongoDB
- **CSS:** Tailwind CSS v3
- **Templating:** Nunjucks
- **File Storage:** AWS S3 (configurable)

---

## Prerequisites

- Node.js v16 or later
- MongoDB v5 or later (running locally or via Atlas)
- npm v8 or later

---

## Local Setup

### 1. Clone and install dependencies

```bash
git clone <this-repo>
cd <repo-folder>
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in:
- `APOS_MONGODB_URI` — your MongoDB connection string
- `APOS_S3_*` — AWS S3 credentials for file uploads (optional in dev)

### 3. Restore the database (optional)

If you have the database dump (`origin-database-dump/`), restore it:

```bash
mongorestore --db origin dump/originProd/
```

### 4. Build CSS and assets

```bash
npm run build
```

### 5. Start the development server

```bash
npm run dev
```

Visit `http://localhost:3000`

### 6. Create an admin user (first time only)

```bash
node app.js apostrophe-users:add admin admin
```

---

## Production Deployment

This app requires a server that supports Node.js (not shared hosting).

**Recommended options:**
- AWS Elastic Beanstalk (Node.js platform)
- DigitalOcean App Platform
- Railway
- Any VPS with Node.js + MongoDB

**Build for production:**

```bash
NODE_ENV=production npm run build
node app.js
```

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `APOS_MONGODB_URI` | Yes | MongoDB connection string |
| `APOS_S3_BUCKET` | For uploads | S3 bucket name |
| `APOS_S3_KEY` | For uploads | AWS access key ID |
| `APOS_S3_SECRET` | For uploads | AWS secret access key |
| `APOS_S3_ENDPOINT` | For uploads | S3 endpoint URL |
| `APOS_S3_REGION` | For uploads | AWS region (default: `auto`) |
| `APOS_CDN_URL` | Optional | CDN URL for serving assets |
| `FB_ACCESS_TOKEN` | Optional | Facebook Pixel access token |
| `FB_PIXEL_ID` | Optional | Facebook Pixel ID |
| `GF_FORM_ENDPOINT` | Optional | Contact form API endpoint |

---

## Project Structure

```
app.js                  # Main application entry point
lib/modules/            # CMS modules and custom widgets (80+)
views/                  # Nunjucks layout templates
public/                 # Static public files
tailwind.css            # Tailwind CSS entry point
tailwind.config.js      # Tailwind configuration
```
