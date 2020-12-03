import Layout from '../components/layout';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, email, message } = data;

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: JSON.stringify({ 'form-name': 'contact', name, email, message }),
    })
      .then(() => router.push('/success'))
      .catch((error) => alert(error));
  };

  return (
    <Layout>
      <div className='container mx-auto flex flex-col justify-center items-center'>
        <div className='px-5 w-full md:w-1/2'>
          <h2 className='text-gray-800 text-5xl font-extrabold font-sans my-10'>
            Drop me a Line
          </h2>
          <form
            className='grid grid-cols-2 gap-3'
            name='contact'
            data-netlify='true'
            onSubmit={handleSubmit(onSubmit)}
            action='/'
          >
            <label
              className='text-base text-gray-500 col-span-2 md:col-span-1'
              htmlFor='name'
            >
              Name
              <input
                className='border-b border-gray-300  w-full h-8 focus:outline-none focus:border-blue-500'
                type='text'
                name='name'
                id='name'
                ref={register}
              ></input>
            </label>
            <label
              className='text-base text-gray-500 col-span-2 md:col-span-1'
              htmlFor='email'
            >
              Email
              <input
                className='border-b border-gray-300 w-full h-8 focus:outline-none focus:border-blue-500'
                type='email'
                name='email'
                id='email'
                ref={register}
              ></input>
            </label>
            <label
              className='text-base text-gray-500 col-span-2 pt-5'
              htmlFor='message'
            >
              Message
              <textarea
                className='border-b border-gray-300 w-full h-28 focus:outline-none focus:border-blue-500'
                name='message'
                id='message'
                ref={register}
              ></textarea>
            </label>
            <button
              className='bg-blue-500 rounded text-white font-bold  py-3 w-1/2'
              type='submit'
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default Contact;
