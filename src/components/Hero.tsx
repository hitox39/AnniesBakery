import heroPic from '../assets/HeroPic.jpg'

export default function Hero() {


    return (
        
        <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img' >
            <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='text-6xl font-bold md:py-6'>
                   ANNIE'S BAKERY
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='text-4xl font-bold py-4'>
                    The Best Baked Goods In Town!
                    </p>
                </div>
                <p className='text-2xl font-bold text-gray-600'>We offer the freshest cookies, cupcakes, birthday cakes, wedding cakes and more! </p>
                <button className='bg-red-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Order Now!</button>
            </div>
        </div>
    );
};
