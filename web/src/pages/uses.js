import Layout from '../components/layout';
import styles from '../styles/blog.module.css';

const Uses = () => {
  return (
    <Layout>
      <div className='container mx-auto flex flex-col justify-center items-center py-5'>
        <h2 className='text-gray-700 text-5xl font-extrabold font-sans pb-5'>
          Uses
        </h2>
        <img
          className='w-full rounded-lg md:w-8/12 px-5 md:px-0'
          src='/uses.jpg'
        />

        <div className='w-full md:w-8/12 px-5 md:px-0'>
          <h3 className='text-gray-800 text-4xl font-extrabold font-sans mt-10 mb-4'>
            Hardware
          </h3>
          <ul>
            <li>
              <a
                href='https://www.apple.com/macbook-pro-16/'
                target='_blank'
                rel='noreferrer'
              >
                16 Inch Macbook Pro
              </a>
            </li>
            <li>
              <a
                href='https://www.amazon.com/Dell-S2715H-27-Inch-LED-Lit-Monitor/dp/B00M9B3S0W'
                target='_blank'
                rel='noreferrer'
              >
                27 Inch Dell S2715H 1080p Display
              </a>
            </li>
            <li>
              <a
                href='https://www.amazon.com/Dell-S2415H-24-Inch-LED-Lit-Monitor/dp/B00M9B3XZW?th=1'
                target='_blank'
                rel='noreferrer'
              >
                24 Inch Dell S2415H 1080p Display
              </a>
            </li>
            <li>
              <a
                href='https://www.logitech.com/en-us/products/keyboards/mx-keys-wireless-keyboard.920-009294.html'
                target='_blank'
                rel='noreferrer'
              >
                Logitech MX-Keys Keybaord
              </a>
            </li>
            <li>
              <a
                href='https://www.logitech.com/en-us/products/mice/mx-master-3.html'
                target='_blank'
                rel='noreferrer'
              >
                Logitech MX-Master 3 Mouse
              </a>
            </li>
            <li>
              <a
                href='https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_black'
                target='_blank'
                rel='noreferrer'
              >
                Bose QC35II Headphones
              </a>
            </li>
            <li>
              <a
                href='https://store.google.com/us/product/google_nest_hub'
                target='_blank'
                rel='noreferrer'
              >
                Nest Hub
              </a>
            </li>
            <li>
              <a
                href='https://www.ikea.com/us/en/p/malm-desk-black-brown-00214157/'
                target='_blank'
                rel='noreferrer'
              >
                Black-Brown IKEA Malm Desk
              </a>
            </li>
            <li>
              <a
                href='https://www.amazon.com/gp/product/B088R6H7NC/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1'
                target='_blank'
                rel='noreferrer'
              >
                Aukey USB C Hub
              </a>
            </li>
            <li>
              <a
                href='https://www.amazon.com/gp/product/B074DTL449/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'
                target='_blank'
                rel='noreferrer'
              >
                Bestand Aluminum Cooling Computer Stand
              </a>
            </li>
            <li>
              <a
                href='https://www.amazon.com/gp/product/B01MR397OH/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'
                target='_blank'
                rel='noreferrer'
              >
                Dual Monitor Mount
              </a>
            </li>
          </ul>
          <h3 className='text-gray-800 text-4xl font-extrabold font-sans mt-10 mb-4'>
            On The Go
          </h3>
          <ul>
            <li>
              <a
                href='https://store.google.com/us/product/pixel_4'
                target='_blank'
                rel='noreferrer'
              >
                Google Pixel 4XL
              </a>
            </li>
            <li>
              <a
                href=' https://store.google.com/us/product/pixel_buds'
                target='_blank'
                rel='noreferrer'
              >
                Google Pixel Buds
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default Uses;
