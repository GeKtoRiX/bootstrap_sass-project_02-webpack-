import 'bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './main.scss';
var reqScripts = require.context("./scripts", true, /^(.*\.(js$))[^.]*$/i);;
reqScripts.keys().forEach(reqScripts);

// projects icons
import user from './icons/user.png';
// projects imgs
import companyImgSrc1 from './img/companies/campany-1.png';
import companyImgSrc2 from './img/companies/campany-2.png';
import companyImgSrc3 from './img/companies/campany-3.png';
import companyImgSrc4 from './img/companies/campany-4.png';
import companyImgSrc5 from './img/companies/campany-5.png';
import companyImgSrc6 from './img/companies/campany-6.png';
import servicesImgSrc1 from './img/services/Marketing _Monochromatic.png';
import servicesImgSrc2 from './img/services/Web development _Monochromatic.png';
import servicesImgSrc3 from './img/services/Data storage_Monochromatic.png';
//  #home icons
const userImg = document.getElementById('user-box');
userImg.src = user;
// #companies imgs
const companyImg1 = document.getElementById('company-img-1');
companyImg1.src = companyImgSrc1;
const companyImg2 = document.getElementById('company-img-2');
companyImg2.src = companyImgSrc2;
const companyImg3 = document.getElementById('company-img-3');
companyImg3.src = companyImgSrc3;
const companyImg4 = document.getElementById('company-img-4');
companyImg4.src = companyImgSrc4;
const companyImg5 = document.getElementById('company-img-5');
companyImg5.src = companyImgSrc5;
const companyImg6 = document.getElementById('company-img-6');
companyImg6.src = companyImgSrc6;
// #services imgs
const servicesImg1 = document.getElementById('services-img-1');
servicesImg1.src = servicesImgSrc1;
const servicesImg2 = document.getElementById('services-img-2');
servicesImg2.src = servicesImgSrc2;
const servicesImg3 = document.getElementById('services-img-3');
servicesImg3.src = servicesImgSrc3;
