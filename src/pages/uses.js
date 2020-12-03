import Layout from '../components/layout';

const Uses = () => {
  return (
    <Layout>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <h2 className='text-gray-800 text-5xl font-extrabold font-sans mt-10 mb-4'>
          Uses
        </h2>
        <img className='md:w-2/3 px-5 md:px-0' src='./uses.jpg' />
        <div className='w-full md:w-2/3 px-5 md:px-0'>
          <h3 className='text-gray-800 text-4xl font-extrabold font-sans mt-10 mb-4'>
            Hardware
          </h3>
          <ul>
            <li>
              <a href='https://www.apple.com/macbook-pro-16/'>
                16 Inch Macbook Pro
              </a>
            </li>
            <li>
              <a href='https://www.amazon.com/Dell-S2715H-27-Inch-LED-Lit-Monitor/dp/B00M9B3S0W'>
                27 Inch Dell S2715H 1080p Display
              </a>
            </li>
            <li>
              <a href='https://www.amazon.com/Dell-S2415H-24-Inch-LED-Lit-Monitor/dp/B00M9B3XZW?th=1'>
                24 Inch Dell S2415H 1080p Display
              </a>
            </li>
            <li>
              <a href='https://www.logitech.com/en-us/products/keyboards/mx-keys-wireless-keyboard.920-009294.html'>
                Logitech MX-Keys Keybaord
              </a>
            </li>
            <li>
              <a href='https://www.logitech.com/en-us/products/mice/mx-master-3.html'>
                Logitech MX-Master 3 Mouse
              </a>
            </li>
            <li>
              <a href='https://www.bose.com/en_us/products/headphones/over_ear_headphones/quietcomfort-35-wireless-ii.html#v=qc35_ii_black'>
                Bose QC35II Headphones
              </a>
            </li>
            <li>
              <a href='https://store.google.com/us/product/google_nest_hub'>
                Nest Hub
              </a>
            </li>
            <li>
              <a href='https://wyze.com/'>
                Currently using a Wyze Cam V2 as a webcam
              </a>
            </li>
            <li>
              <a href='https://www.ikea.com/us/en/p/malm-desk-black-brown-00214157/'>
                Black-Brown IKEA Malm Desk
              </a>
            </li>
            <li>
              <a href='https://www.amazon.com/gp/product/B088R6H7NC/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1'>
                Aukey USB C Hub
              </a>
            </li>
            <li>
              <a href='https://www.amazon.com/gp/product/B074DTL449/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'>
                Bestand Aluminum Cooling Computer Stand
              </a>
            </li>
            <li>
              <a href='https://www.amazon.com/gp/product/B01MR397OH/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1'>
                Dual Monitor Mount
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default Uses;
