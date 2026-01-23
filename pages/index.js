import Head from 'next/head'
import Image from 'next/image'
import Header from '@/components/Header'
import Intro from '@/components/Intro'
import About from '@/components/About'
import Skill from '@/components/Skill'
import Tool from '@/components/Tool'
import Porfolio from '@/components/Portfolio'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useCallback, useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries, opts) => {
      entries.forEach(entry =>{
        entry.target.classList.toggle('visible', entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    document.querySelectorAll('section').forEach(elm => {
      observer.observe(elm);
    });
  }, []);
  
  return (   
    <main>
<Header/>
<Intro/>
<About/>
<Skill/>
<Tool/>
<Porfolio/>
<Experience/>
<Contact/>
<Footer/>
    </main>
  )
}
