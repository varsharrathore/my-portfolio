export default function Header() {
    return(
        <header>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">  
      <img src='logo.png' alt='logo' className="w-12 h-12 "/>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a href="#about" className="mr-5">About</a>
      <a href="#portfolio" className="mr-5">Portfolio</a>
      <a href="#contact" className="mr-5">Contact</a>
    </nav>
    <div className='social'>
       <div className="flex flex-col md:flex-row items-center md:justify-center">
            <button className="btn"><a href="#portfolio"> View Projects </a> </button>
          </div>
     </div>
  </div>
</header>
    )
}