import heart from '/Assets/mini/heart.svg';
import * as utils from '../../Data/utils';

const Footer = () => {
  return (
    <footer className="w-full  py-10 relative overflow-hidden font-main select-none">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-text text-center border-t border-border-dark pt-6">
        <img src={heart} className='h-auto max-w-30 w-full mx-auto' />

        <div
          onClick={() => utils.OpenLink('https://github.com/ilittleaakif/iaplab')}
          className='flex items-center gap-8 mx-auto w-fit bg-text-soft text-white cursor-pointer px-4 py-1 rounded-md shadow-[3px_3px_0_black] my-4 transition-all hover:bg-black duration-300 hover:translate-[3px] hover:shadow-none active:translate-[3px] active:bg-black active:shadow-none'>
          <div className='space-x-1'>
            <i className='fab fa-github'></i>
            <span>star on github</span>
          </div>
          <i class="fa-solid fa-star text-amber-300"></i>
        </div>

        

        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-text  text-lg">Thanks for your visit Mate!</span>
          <i className="fas fa-heart text-red-500 fa-bounce"></i>
        </div>

        <p className="text-text-muted text-sm">© 2025 IAPTeam</p>
      </div>
    </footer>
  );
};

export default Footer;