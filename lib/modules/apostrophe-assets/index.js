module.exports = {
  jQuery: 3,
  stylesheets: [
    { name: "admin" },
    { name: "fonts" },
    { name: "tailwind", import: { inline: true } },
    { name: "swiper-bundle", import: { inline: true } },
  ],
  scripts: [
    { name: "swiper-bundle", minify: false },
    { name: "smoothscroll-polyfill", minify: false },
    { name: "filters/utils" },
    { name: "filters/checkboxes" },
    { name: "smoothScroll" },
  ],
};
