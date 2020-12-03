import styles from '../styles/card.module.css';
import Layout from '../components/layout';

const Work = () => {
  return (
    <Layout>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-gray-800 text-5xl font-extrabold font-sans mt-10 mb-4'>
          Some of my work
        </h2>
        <h5>Here are a few projects I've worked on recently.</h5>
        <div className='container px-5 md:px-0 max-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center  bg-gradient-to-b from-pink-700 via-red-500 to-pink-500`}
          >
            <img className='w-52' src='./asc_logo.svg' />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Ascendance Studio
              </h2>
              <a
                className='text-blue-500'
                href='https://www.doraldance.com'
                target='_blank'
                rel='noreferrer'
              >
                www.doraldance.com
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                GatsbyJS, Styled Components, Javascript, CSS3, HTML5, Lambda
                Functions, Auth0, Netlify, Air Table, Paper Forms, Sanity
              </p>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center`}
          >
            <img className='w-64' src='./ccl_logo.png' />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Carnival Cruise Line
              </h2>

              <a
                className='text-blue-500'
                href='https://www.carnival.com'
                target='_blank'
                rel='noreferrer'
              >
                www.carnival.com
              </a>
              <p>Employer - Carnival Cruise Line</p>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                Javascript, CSS3, HTML5, Optimizely, React, JQuery, Sitecore
              </p>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center bg-black`}
          >
            <img className='w-64' src='./globe_logo.png' />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Globe Services Inc
              </h2>

              <a
                className='text-blue-500'
                href='https://globeservicesinc.com/'
                target='_blank'
                rel='noreferrer'
              >
                www.globeservicesinc.com
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                GatsbyJS, Styled Components, Javascript, CSS3, HTML5, VantaJS,
                TailwindCSS, Lambda Functions, Netlify, Sanity
              </p>
            </div>
          </div>

          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center  bg-gradient-to-b from-yellow-300  to-yellow-500`}
          >
            <img className='w-52' src='./se_logo.png' />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Storage Express
              </h2>
              <a
                className='text-blue-500'
                href='http://storagexps.com/'
                target='_blank'
                rel='noreferrer'
              >
                www.storagexps.com
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                Javascript, CSS3, HTML5, Bootstrap, JQuery, Node, Express,
                NodeMailer, Google Maps, Netlify
              </p>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center`}
            style={{ backgroundImage: 'url(./puppies.jpg)' }}
          >
            <h4 className='font-bold text-3xl text-white text-center'>
              Puppy Search App
            </h4>
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Puppy Search App
              </h2>

              <a
                className='text-blue-500'
                href='https://tender-franklin-c0908e.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                Live Site
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                GatsbyJS, Styled Components, Javascript, CSS3, HTML5, Netlify
              </p>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center  bg-gradient-to-b from-blue-600  to-blue-800`}
          >
            <h4 className='font-bold text-3xl text-white text-center'>
              Web Assets Library
            </h4>
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Web Assets Library
              </h2>

              <a
                className='text-blue-500'
                href='https://images.manuels.dev/'
                target='_blank'
                rel='noreferrer'
              >
                Live Site
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                React, TailwindCSS, Javascript, CCS3, HTML5, Netlify
              </p>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center  bg-gradient-to-b from-blue-500  to-blue-500`}
          >
            <img className='w-52' src='./tekfirm_logo.png' />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                TekFirm
              </h2>

              <a
                className='text-blue-500'
                href='https://www.thetekfirm.com/'
                target='_blank'
                rel='noreferrer'
              >
                www.thetekfirm.com
              </a>
              <p>Employer - CREATIVECORE</p>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                GatsbyJS, Sass, Javascript, HTML5, Headless Wordpress, Lambda
                Functions
              </p>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center bg-cover`}
            style={{ backgroundImage: 'url(./masters.jpg)' }}
          >
            <h4 className='font-bold text-3xl text-white text-center'>
              Masters Landing Page
            </h4>
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Masters Landing Page
              </h2>

              <a
                className='text-blue-500'
                href='https://manuelsavino.github.io/MBAlandingPage/'
                target='_blank'
                rel='noreferrer'
              >
                Live Site
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                HTML5, CSS3, Bootstrap, Github Pages
              </p>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center bg-cover`}
            style={{ backgroundImage: 'url(./book.jpg)' }}
          >
            <h4 className='font-bold text-3xl text-white text-center'>
              Sample Book Site
            </h4>
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Sample Book Site
              </h2>

              <a
                className='text-blue-500'
                href='https://manuelsavino.github.io/JsBookSite/'
                target='_blank'
                rel='noreferrer'
              >
                Live Site
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                HTML5, CSS3, Bootstrap, Github Pages
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Work;
