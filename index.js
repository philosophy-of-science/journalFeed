const XML =
  "https://www.journals.uchicago.edu/action/showFeed?type=etoc&feed=rss&jc=phos";

const parser = require("fast-xml-parser");
const axios = require("axios");
const fs = require("fs");

axios.get(XML).then(res => {
  const { data } = res;
  const json = parser.parse(data);
  const img = json["rdf:RDF"].image.url;
  const articles = json["rdf:RDF"].item.map(article => {
    const articleObj = article;

    articleObj.img = img;

    return articleObj;
  });
  articles.shift();
  console.log(articles);

  fs.writeFile("_data/articles.json", JSON.stringify(articles), err => {
    if (err) console.log(err);
    console.log("completed");
  });
});
