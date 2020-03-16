/* eslint-disable no-unused-vars */
const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.status(200).json({
    slideSets: [
      {
        page: '02',
        pageTwo: '03',
        title: 'Doğa',
        titleTwo: 'Dostu Üretim',
        content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
      },
      {
        page: '02',
        pageTwo: '03',
        title: 'Doğa',
        titleTwo: 'Dostu Üretim',
        content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
      },
      {
        page: '02',
        pageTwo: '03',
        title: 'Doğa',
        titleTwo: 'Dostu Üretim',
        content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
      },
      {
        page: '02',
        pageTwo: '03',
        title: 'Doğa',
        titleTwo: 'Dostu Üretim',
        content: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris... Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore magnam quas maxime. Optio, expedita quidem. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, neque corrupti ut atque pariatur odit? Minus exercitationem adipisci nobis quam.'
      }
    ]
  })
})

module.exports = {
  path: '/api',
  handler: app
}
