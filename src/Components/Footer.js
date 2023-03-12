import React from 'react';

function Footer() {
    return (
        <div className="flex justify-between items-center mx-12 my-6 p-4 border-2 border-gray-800">
            <h1 className="w-6 h-6 mx-4 bg-sky-600 text-white text-center">d</h1>
            <div className='flex justify-around'>
                <a href="https://www.linkedin.com/company/zapit-io/?originalSubdomain=in"  >
                    <img src="https://img.icons8.com/bubbles/50/null/linkedin.png" />
                </a>
                <a href="/">
                    <img src="https://img.icons8.com/bubbles/50/null/facebook-new.png" />
                </a>
                <a href="/">
                    <img src="https://img.icons8.com/bubbles/50/null/twitter-circled.png" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
