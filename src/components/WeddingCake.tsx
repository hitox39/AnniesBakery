import WeddingCakeimg from '../assets/WeddingCake.jpg';

export default function WeddingCake() {
    return(
        <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={WeddingCakeimg} alt='/' />
          <div className='flex flex-col justify-center'>
            <h1 className='text-2xl font-bold py-2'>We Do Custom Cakes and Catering!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
              eveniet ex deserunt fuga?
            </p>
            <button className='bg-red-400 text-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Order Now!</button>
          </div>
        </div>
      </div>
    );
}
