'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BILLING_CYCLE_API_URI: '"http://localhost:3003"',
  BACK_END_API_URI: '"http://localhost:8000"'
})
