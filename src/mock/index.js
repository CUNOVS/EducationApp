const express = require('express');
const superagent = require('superagent');
const cheerio = require('cheerio');
const app = express();

app.get('/', function (req, res) {
  superagent.get('https://www.imooc.com/course/list?c=fe')
    .end(function (err, sres) {

      if (err) {
        return next(err);
      }

      const $ = cheerio.load(sres.text);
      const items = [];
      $('.course-card-container')
        .each(function (idx, element) {
          items.push({
            image: $(this)
              .find('.course-card-top')
              .children('img')
              .attr('src'),
            title: $(this)
              .find('.course-card-content')
              .children('h3')
              .text(),
            people: $(this)
              .find('.course-card-info')
              .find('span:last-child')
              .text(),

          });
        });

      res.json(items);
    });
});

