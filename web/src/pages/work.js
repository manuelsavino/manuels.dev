import styles from '../styles/card.module.css';
import Layout from '../components/layout';

const Work = () => {
  return (
    <Layout>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-gray-800 text-5xl font-extrabold font-sans mt-10 mb-4'>
          Some of my work
        </h2>
        <p>Here are a few projects I've worked on recently.</p>
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
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center  bg-gradient-to-b from-orange-500  to-orange-400`}
          >
            <img
              className='w-40'
              src='https://chglobalconstruction.com/images/white-logo.png'
            />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                CH Global Construction
              </h2>
              <a
                className='text-blue-500'
                href='https://chglobalconstruction.com/'
                target='_blank'
                rel='noreferrer'
              >
                www.chglobalconstruction.com
              </a>
              <h5 className='font-bold'>Tech Used</h5>
              <p className='text-sm leading-snug text-center'>
                GatsbyJS, Chakra-ui, Javascript, HTML5, Lambda Functions
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
        </div>
        <h2 className='text-gray-800 text-5xl font-extrabold font-sans mt-10 mb-4 text-center'>
          Cloned using Tailwind CSS
        </h2>
        <p className='text-center'>
          For fun, often times I like to clone websites just using Tailwind CSS,
          here's a few I've done
        </p>
        <div className='container px-5 md:px-0 max-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-10'>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center `}
          >
            <img
              className='w-52'
              src='https://www.ziprecruiter.com/zrs/f810ae13/img/logos/ziprecruiter-blacktext.svg'
            />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Zip Recruiter
              </h2>
              <a
                className='text-blue-500'
                href='https://play.tailwindcss.com/Fcme56XMXW?layout=preview'
                target='_blank'
                rel='noreferrer'
              >
                View on Tailwind Play
              </a>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center bg-spirit-yellow`}
          >
            <img
              className='w-52'
              src='https://www.spirit.com/assets/img/global/spirit-logo-black.svg'
            />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                Spirit Airlines
              </h2>
              <a
                className='text-blue-500'
                href='https://play.tailwindcss.com/WPiYASAuyK?layout=preview'
                target='_blank'
                rel='noreferrer'
              >
                View on Tailwind Play
              </a>
            </div>
          </div>
          <div
            className={`${styles.card} border rounded-lg border-gray-100 shadow-sm h-48 border-box relative flex items-center justify-center`}
          >
            <img
              className='w-52'
              src='https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-line.svg'
            />
            <div
              className={`${styles.details} absolute top-0 left-0 bg-white w-full min-h-full flex p-5 flex-col items-center justify-center box-border`}
            >
              <h2 className='text-gray-800 text-xl font-extrabold font-sans'>
                American Express
              </h2>
              <a
                className='text-blue-500'
                href='https://play.tailwindcss.com/5lLVyUqWuD?layout=preview'
                target='_blank'
                rel='noreferrer'
              >
                View on Tailwind Play
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Work;
