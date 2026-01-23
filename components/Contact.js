export default function Contact() {
    return (
        <section id="contact">
            <div className="text-center">
        <h2>Contact Me</h2>
    </div>
    <div className="flex justify-center items-center">
            <div className="rounded-lg overflow-hidden p-10 relative">
                <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.8430989546896!2d73.02262797420364!3d26.299185977018208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418dba784d9dab%3A0x4c7366d431a0eba1!2sBadlon%20Ka%20Chowk%2C%20Gulab%20Sagar%2C%20Jodhpur%2C%20Rajasthan%20342001!5e0!3m2!1sen!2sin!4v1768901162312!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
    <div className="lg:w-1/2 px-6 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" className="w-5 h-5 mr-2">
            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
        </svg>
        <div>
            <h3 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h3>
            <p className="mt-1 text-gray-900">Jodhpur, Rajasthan, 342001</p>
        </div>
    </div>
   <div className="lg:w-1/2 px-6 mt-4 lg:mt-0 flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-5 h-5 mr-2">
    <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
  </svg>
  <div>
    <h3 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h3>
    <button
      onClick={() => {
        navigator.clipboard.writeText('udawat134@gmail.com');
        alert('Email copied to clipboard: udawat134@gmail.com');
      }}
      className="text-indigo-500 leading-relaxed hover:text-indigo-700 cursor-pointer underline bg-transparent border-none p-0 text-left"
    >
      udawat134@gmail.com
    </button>
  </div>
</div>

<div className="lg:w-1/2 px-6 mt-4 lg:mt-0 flex items-center">
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-5 h-5 mr-2">
    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
  </svg>
  <div>
    <h3 className="title-font font-semibold text-gray-900 tracking-widest text-xs">PHONE</h3>
    <button
      onClick={() => {
        navigator.clipboard.writeText('+919166054013');
        alert('Phone number copied to clipboard: +919166054013');
      }}
      className="leading-relaxed text-indigo-500 hover:text-indigo-700 cursor-pointer underline bg-transparent border-none p-0 text-left"
    >
      +91 9166054013
    </button>
  </div>
</div>

</div>
            </div>
            </div>
        </section>
    );
}
