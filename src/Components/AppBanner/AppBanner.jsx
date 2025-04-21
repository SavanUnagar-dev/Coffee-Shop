import 'react';
import AppStore from '../../assets/website/app_store.png';
import PlayStore from '../../assets/website/play_store.png';
import CofeeCover from '../../assets/coffee/coffee-cover.jpg';

const BannerStyle ={
    background: `url(${CofeeCover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100%",
    width: "100%",
}

const AppBanner = () => {
  return (
    <div className="container">
        <div style={BannerStyle} className='sm:min-h-[400px] sm:flex sm:justify-end sm:items-center rounded-xl'>
          <div>
            <div className='space-y-6 max-w-xl mx-auto'>
                <h1 className='text-2xl text-center sm:text-4xl font-semibold'>Download the app</h1>
                <p className='text-center sm:px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, corporis! consectetur adipisicing elit</p>
                {/* image link */}
                <div className='flex justify-center items-center gap-4'>
                    <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                        <img src={AppStore} alt="" />
                    </a>
                    <a href="#" className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]'>
                        <img src={PlayStore} alt="" />
                    </a>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AppBanner