import Layout from '../components/layout';

const Success = () => {
  return (
    <Layout>
      <div className='container mx-auto flex justify-center items-center flex-col'>
        <h2 className='text-gray-800 text-5xl md:text-7xl font-extrabold font-sans mt-10 text-center flex items-center'>
          Success! <img src='/celebrateEmoji.png' />
        </h2>
        <h5 className='text-gray-800 text-2xl  font-sans mt-5 mb-4 text-center'>
          I will be reaching out to you shortly!
        </h5>
      </div>
    </Layout>
  );
};

export default Success;
