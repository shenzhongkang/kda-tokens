#!/usr/bin/env node

const fs = require('fs');
const tokens = require('../lib').default;

const camelStr2Dash = str => {
  return str.replace(/([a-zA-Z])(?=[0-9A-Z])/g, '$1-').toLowerCase();
};

const HEAD_COMMENT = `// Do not edit directly
// Generated on ${new Date().toISOString()}`;

const generateCssFile = () => {
  let VARS = `/**
 * Do not edit directly
 * Generated on ${new Date().toISOString()}
 */

:root {`;
  let END = `
}
  `;

  Object.keys(tokens).map(tk => {
    VARS += `
  --${camelStr2Dash(tk)}: ${tokens[tk]};`
  });
  
  fs.writeFileSync('./lib/tokens.css', VARS + END);  
};

const generateLessFile = () => {
  let VARS = `
  `;
  Object.keys(tokens).map(tk => {
    VARS += `
@${camelStr2Dash(tk)}: ${tokens[tk]};`
  });
  
  fs.writeFileSync('./lib/tokens.less', HEAD_COMMENT + VARS);  
};

const generateScssFile = () => {
  let VARS = `
  `;
  Object.keys(tokens).map(tk => {
    VARS += `
$${camelStr2Dash(tk)}: ${tokens[tk]};`
  });
  
  fs.writeFileSync('./lib/tokens.scss', HEAD_COMMENT + VARS);  
};

generateCssFile();
generateLessFile();
generateScssFile();
