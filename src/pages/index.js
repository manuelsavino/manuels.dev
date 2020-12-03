import Layout from '../components/layout';

const Index = () => {
  return (
    <Layout>
      <div className='container mx-auto flex flex-col justify-center items-center '>
        <div className='rounded-full bg-blue-500 overflow-hidden w-48 md:w-72 h-48 md:h-72 mt-5 md:mt-20'>
          <img className='w-96' src='/me.svg' />
        </div>
        <h2 className='text-6xl md:text-7xl text-gray-800 font-extrabold font-sans text-center pb-6'>
          Howdy,
          <br />
          My Name is Manuel
        </h2>
        <h4 className='text-2xl text-gray-500 font-sans text-center pb-1'></h4>
        <h3 className='text-2xl text-gray-500 font-sans text-center px-20 pb-0 md:pb-36'>
          I'm a front-end web developer from Miami, FL 🌴
        </h3>
      </div>
    </Layout>
  );
};
export default Index;
