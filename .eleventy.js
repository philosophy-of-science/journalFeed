module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("formatDate", function (value) {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const d = new Date(value);
    const m = month[d.getMonth()];
    const y = d.getFullYear();
    console.log(m + " " + y);
    return `(${m} ${y})`;
  });
};
