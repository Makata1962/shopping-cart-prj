import Image from '../../ui/Image';
import Button from '../../ui/Button';
import spring from '../../assets/spring.png';
import Countdown from './CountDown';

function SpringCollection() {
  const endDate = '2024-05-30T00:00:00';

  return (
    <div className='flex justify-center items relative overflow-x-hidden mb-32'>
      <Image src={spring} alt='spring collection cover' />
      <div className='absolute bottom-20 left-60 w-full h-full flex flex-col justify-center items-center'>
        <h1 className='mb-5 font-medium'>
          <span className='text-deep-ocean'>SPRING </span>
          <span className='text-coral-red'>COLLECTIONS</span>
        </h1>
        <span className='w-[145px] h-[31px] text-coral-red bg-light-gray px-2 py-3 mb-20 flex justify-center items-center transition duration-150 ease-in-out transform active:scale-95'>
          <Button to='/product-list' type='nav'>
            SHOP NOW &rarr;
          </Button>
        </span>
        <div className='w-[280px] h-[60px] bg-deep-gray flex justify-around items-center backdrop-blur-sm bg-white/30'>
          <Countdown targetDate={new Date(endDate)} />
        </div>
      </div>
    </div>
  );
}

export default SpringCollection;
