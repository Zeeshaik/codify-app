import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return <footer className=' bg-dark-layer-1 text-orange-400'>
    <div className=' md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7 md'>
        <h1 className='lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold mf:w-2/5'>
            <span className=' text-teal-50 '>Free</span> until you&apos;re ready to <br/>
            lunch
        </h1>
        <div>
            <input type="text" placeholder='Enter Your ph.no' />
        </div>
    </div>
  </footer>;
};

export default Footer;
