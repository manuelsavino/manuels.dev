import Layout from '../components/layout';
import styles from '../styles/blog.module.css';
const Index = () => {
  return (
    <Layout>
      <div
        className={`${styles.hero} h-4/5 mx-auto flex flex-col justify-center items-center`}
      >
        <div className='container mx-auto py-20'>
          <h2 className='text-white text-7xl font-bold'>Blog</h2>
          <p>
            Sint officia elit velit voluptate duis velit cupidatat mollit Lorem.
            Cillum do et mollit aliquip fugiat dolore est laboris excepteur
            nostrud. Dolor pariatur aliquip nostrud minim commodo do aliqua
            ipsum sit anim tempor cupidatat amet ut. Aliqua aliquip cupidatat
            anim culpa fugiat eu velit cillum ad occaecat deserunt ea esse sunt.
            Laboris anim fugiat ipsum adipisicing sunt reprehenderit duis id
            qui. Anim consequat elit officia irure consectetur sunt.
          </p>
          <p>
            Aliqua irure qui excepteur incididunt tempor eu eu sint. Adipisicing
            anim esse in est eu do incididunt excepteur elit. Nulla veniam anim
            labore pariatur culpa commodo ea ex et. Magna sit eiusmod aliqua
            nisi commodo officia cillum minim quis quis exercitation velit.
            Cupidatat veniam Lorem incididunt est nostrud commodo nostrud quis
            aliqua voluptate qui nulla sunt veniam. Sit reprehenderit incididunt
            laboris deserunt. Incididunt ea anim irure nulla do incididunt. Elit
            incididunt esse ad incididunt culpa cupidatat duis fugiat pariatur
            irure deserunt ut proident nostrud. Ea aute nisi excepteur mollit.
          </p>
        </div>
      </div>
    </Layout>
  );
};
export default Index;
