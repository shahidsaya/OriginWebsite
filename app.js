require("dotenv").config();

const path = require("path");

//Unique event id
const randNum = String.fromCharCode(65 + Math.floor(Math.random() * 26));
const pageview_event_id = randNum + Date.now();

// pm2-runtime is great at running node apps inside containers properly,
// but its arguments can be mistaken for a command line Apostrophe task
if (process.argv.find((arg) => arg.match(/ProcessContainer/))) {
  process.argv = [process.argv[0], "app.js"];
}

module.exports = require("apostrophe")({
  root: module,
  shortName: "origin",

  // See lib/modules for basic project-level configuration of our modules
  // responsible for serving static assets, managing page templates and
  // configuring user accounts.

  modules: {
    // Apostrophe module configuration

    // Note: most configuration occurs in the respective
    // modules' directories. See lib/apostrophe-assets/index.js for an example.
    // However any modules that are not present by default in Apostrophe must at
    // least have a minimal configuration here: `moduleName: {}`
    settings: {
      alias: "settings",
      pageViewId: pageview_event_id,
    },

    "apostrophe-db": {
      uri: process.env.APOS_MONGODB_URI,
    },

    "apostrophe-express": {
      port: 3000,
    },

    "apostrophe-assets": {},

    "apostrophe-admin-bar": {
      openOnLoad: false,
      openOnHomepageLoad: false,
      // closeDelay: 5000
    },

    "apostrophe-search": {},
    "apostrophe-attachments": {
      uploadfs: {
        backend: "s3",
        secret: process.env.APOS_S3_SECRET,
        key: process.env.APOS_S3_KEY,
        bucket: process.env.APOS_S3_BUCKET,
        endpoint: process.env.APOS_S3_ENDPOINT,
        region: process.env.APOS_S3_REGION || "auto",
        cdn: {
          enabled: !!process.env.APOS_CDN_URL,
          url: process.env.APOS_CDN_URL || "",
        },
      },
      svgImages: true,
      imageSizes: [
        {
          name: "max",
          width: 1600,
          height: 1600,
        },
        {
          name: "full",
          width: 1140,
          height: 1140,
        },
        {
          name: "two-thirds",
          width: 760,
          height: 760,
        },
        {
          name: "one-half",
          width: 570,
          height: 700,
        },
        {
          name: "one-third",
          width: 380,
          height: 700,
        },
        {
          name: "one-sixth",
          width: 190,
          height: 350,
        },
      ],
      fileGroups: [
        {
          name: "documents",
          label: "Documents",
          extensions: ["pdf", "doc"],
          extensionMaps: {
            docx: "doc",
          },
          image: false,
        },
        {
          name: "images",
          label: "Images",
          extensions: ["png", "gif", "jpg", "svg"],
          extensionMaps: {
            jpeg: "jpg",
          },
          image: false,
        },
        {
          name: "videos",
          label: "Videos",
          extensions: ["mp4"],
          extensionMaps: {},
          image: false,
        },
      ],
    },

    "apostrophe-site-map": {
      excludeTypes: [],
    },

    "apostrophe-seo": {},
    "apostrophe-html-widgets": {},
    "apostrophe-open-graph": {},

    "apostrophe-workflow": {
      alias: "workflow",
      replicateAcrossLocales: false,
      autoCommitPageMoves: true,
      disableExportAfterCommit: true,
    },
    "apostrophe-workflow-modified-documents": {},

    "apostrophe-permissions": {
      construct: function (self, options) {
        // Required if you want file fields to work on public pages.
        self.addPublic(["edit-attachment"]);
      },
    },

    // This module adds Nunjucks "helper functions" and helper data useful in all templates.
    //
    // Some uses include special template functions that go outside the depth of nunjucks,
    // often by exporting lodash functions, and reusable, centralized apos.area configurations.
    //
    // The module also contains useful library .js files containing ready-made options
    // for areas and the like, which other modules `require` to avoid redundancy.
    helpers: {},

    // If a template is not found somewhere else, serve it from the top-level
    // `views/` folder of the project
    "apostrophe-templates": {
      viewsFolderFallback: path.join(__dirname, "views"),
    },

    // Add an alt field to images schema, by default the title is used but
    // we recommend enabling the alt field for clarity.
    "apostrophe-images": {
      enableAltField: true,
    },

    "apostrophe-redirects": {},
    "template-redirect-pages": {},

    "apostrophe-rich-text-permalinks": {},

    // Custom pieces
    news: {},

    // Custom pages
    "news-pages": {},

    // Custom widgets
    "rich-text-widgets": {},
    "styled-paragraph-widgets": {},
    "container-widgets": {},
    "page-header-widgets": {},
    "title-widgets": {},
    "horizontal-gap-widgets": {},
    "link-widgets": {},
    "link-anchor-widgets": {},
    "button-widgets": {},
    "icon-widgets": {},
    "divider-widgets": {},
    "columns-widgets": {},
    "grid-widgets": {},
    "template-grid-widgets": {},
    "slider-widgets": {},
    "slider-inner-promo-widgets": {},
    "slider-inner-testimonial-widgets": {},
    "list-widgets": {},
    "card-widgets": {},
    "cta-box-widgets": {},
    "button-list-widgets": {},
    "footer-link-list-widgets": {},
    "news-widgets": {},
    "embed-widgets": {},
    "video-audio-widgets": {},
    "resource-card-widgets": {},
    "testimonial-widgets": {},
    "journey-widgets": {},
    "accordion-widgets": {},
    "rows-widgets": {},
    "small-cta-widgets": {},
    "badge-widgets": {},
    "banner-link-list-widgets": {},
    "cr-basic-auth": {},
  },
});
