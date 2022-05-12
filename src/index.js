import 'bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './main.scss';
var reqScripts = require.context("./scripts", true, /^(.*\.(js$))[^.]*$/i);;
reqScripts.keys().forEach(reqScripts);

// src's imgs
import user from './icons/user.png';
//  project's imgs
const userImg = document.getElementById('user-box');
userImg.src = user;