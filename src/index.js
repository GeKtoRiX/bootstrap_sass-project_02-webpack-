import 'bootstrap';
import './main.scss';
// var reqStyles = require.context("./styles", true, /^(.*\.(sa|sc|c)ss$)[^.]*$/i);
// reqStyles.keys().forEach(reqStyles);
var reqScripts = require.context("./scripts", true, /^(.*\.(js$))[^.]*$/i);;
reqScripts.keys().forEach(reqScripts);

