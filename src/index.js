import 'bootstrap';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import './main.scss';
var reqScripts = require.context("./scripts", true, /^(.*\.(js$))[^.]*$/i);
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
// ========$$$=======
import servicesImgSrc1 from './img/services/Marketing _Monochromatic.png';
import servicesImgSrc2 from './img/services/Web development _Monochromatic.png';
import servicesImgSrc3 from './img/services/Data storage_Monochromatic.png';
// ========$$$=======
import testimonialsImgSrc1 from './img/testimonials/client-1.jpg';
import testimonialsImgSrc2 from './img/testimonials/client-2.jpg';
import testimonialsImgSrc3 from './img/testimonials/client-3.jpg';
import testimonialsImgSrc4 from './img/testimonials/client-4.jpg';
import testimonialsImgSrc5 from './img/testimonials/client-5.jpg';
// ========$$$=======
import portfolioImgSrc1 from './img/portfolio/portfolio-1.jpg';
import portfolioImgSrc2 from './img/portfolio/portfolio-2.jpg';
import portfolioImgSrc3 from './img/portfolio/portfolio-3.jpg';
import portfolioImgSrc4 from './img/portfolio/portfolio-4.jpg';
import portfolioImgSrc5 from './img/portfolio/portfolio-5.jpg';
import portfolioImgSrc6 from './img/portfolio/portfolio-6.jpg';
import portfolioImgSrc7 from './img/portfolio/portfolio-7.jpg';
import portfolioImgSrc8 from './img/portfolio/portfolio-8.jpg';
import portfolioImgSrc9 from './img/portfolio/portfolio-9.jpg';
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
// #testimonials imgs
const testimonialsImg1 = document.getElementById('testimonials-img-1');
testimonialsImg1.src = testimonialsImgSrc1;
const testimonialsImg2 = document.getElementById('testimonials-img-2');
testimonialsImg2.src = testimonialsImgSrc2;
const testimonialsImg3 = document.getElementById('testimonials-img-3');
testimonialsImg3.src = testimonialsImgSrc3;
const testimonialsImg4 = document.getElementById('testimonials-img-4');
testimonialsImg4.src = testimonialsImgSrc4;
const testimonialsImg5 = document.getElementById('testimonials-img-5');
testimonialsImg5.src = testimonialsImgSrc5;
// #portfolio imgs
const portfolioImg1 = document.getElementById('portfolio-img-1');
portfolioImg1.src = portfolioImgSrc1;
const portfolioImg2 = document.getElementById('portfolio-img-2');
portfolioImg2.src = portfolioImgSrc2;
const portfolioImg3 = document.getElementById('portfolio-img-3');
portfolioImg3.src = portfolioImgSrc3;
const portfolioImg4 = document.getElementById('portfolio-img-4');
portfolioImg4.src = portfolioImgSrc4;
const portfolioImg5 = document.getElementById('portfolio-img-5');
portfolioImg5.src = portfolioImgSrc5;
const portfolioImg6 = document.getElementById('portfolio-img-6');
portfolioImg6.src = portfolioImgSrc6;
const portfolioImg7 = document.getElementById('portfolio-img-7');
portfolioImg7.src = portfolioImgSrc7;
const portfolioImg8 = document.getElementById('portfolio-img-8');
portfolioImg8.src = portfolioImgSrc8;
const portfolioImg9 = document.getElementById('portfolio-img-9');
portfolioImg9.src = portfolioImgSrc9;