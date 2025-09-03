
//Animations
gsap.registerPlugin(ScrollTrigger);

  // home about
  gsap.from(".left-hm-about-in", {
    duration: 1,   
    x: -100,
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".left-hm-about-in",  
      start: "top 80%",    
      end: "bottom 30%",    
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });
  gsap.from(".right-hm-about-video", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".right-hm-about-video",    
      start: "top 80%",             
      end: "bottom 30%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // home event
  gsap.from(".left-events-inner-cont", {
    duration: 1,   
    x: -100,
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".left-events-inner-cont",  
      start: "top 80%",    
      end: "bottom 30%",    
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  //// about

  // about-first-section
  gsap.from(".right-about-first-img", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".right-about-first-img",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // testimonial
  gsap.from(".testim-all-list-out .owl-carousel .item", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".testim-all-list-out",    
      start: "top 50%",             
      end: "bottom 70%",             
      scrub: 2,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // faq
  gsap.from(".left-faq", {
    duration: 1,   
    x: -100,
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".left-faq",  
      start: "top 50%",    
      end: "bottom 55%",    
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });
  gsap.from(".right-faq", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".right-faq",    
      start: "top 50%",             
      end: "bottom 55%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // request-demo
  gsap.from(".qt", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".qt",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  //// solutions

  // custom-tab-solution
  gsap.from(".left-solutions", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".left-solutions",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // achive-event
  gsap.from(".left-achive-event", {
    duration: 1,   
    x: -100,
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".left-achive-event",  
      start: "top 80%",    
      end: "bottom 30%",    
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });
  gsap.from(".right-achive-event", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".right-achive-event",    
      start: "top 80%",             
      end: "bottom 30%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // custom-tab-solution
  gsap.from(".custom-tab-solution-in", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".custom-tab-solution-in",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  //// blogs page

  // blog-item list
  gsap.from(".blog-item-full-out .blog-item-outr", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".blog-item-full-out",    
      start: "top 80%",             
      end: "bottom 30%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  //// blogs details page

  // blog details img
  gsap.from(".blog-dtails-img", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".blog-dtails-img",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // blog details form
  gsap.from(".blog-contact .contact-form", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".blog-contact .contact-form",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // blog-item list
  gsap.from(".all-ft-blog-listing .blog-item-outr", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".all-ft-blog-listing",    
      start: "top 80%",             
      end: "bottom 30%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  //// features

  // featur detls
  gsap.from(".featur-detls-cont", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".featur-detls-cont",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // featur list
  gsap.set(".right-featur-list", { x: 300, opacity: 0 });
  gsap.set(".left-featur-list", { x: -300, opacity: 0 });

  gsap.utils.toArray(".right-featur-list").forEach((item) => {
    gsap.to(item, {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false
      },
    });
  });
  gsap.utils.toArray(".left-featur-list").forEach((item) => {
    gsap.to(item, {
      x: 0,
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
        markers: false
      },
    });
  });

  // blog details form
  gsap.from(".innovative-featur-in", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".innovative-featur-in",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // blog-item list
  gsap.from(".empower-featur-in .empower-carousel .item", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".empower-featur-in",    
      start: "top 80%",             
      end: "bottom 30%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  //// projects page 

  // achive-event
  gsap.from(".right-project-event", {
    duration: 1,   
    x: -100,
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".right-project-event",  
      start: "top 80%",    
      end: "bottom 30%",    
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });
  gsap.from(".left-project-event", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".left-project-event",    
      start: "top 80%",             
      end: "bottom 30%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  // project item
  gsap.from(".project-item-out .project-item", {
    duration: 1,       
    x: 100,
    opacity: 0,
    stagger: 0.2,  
    scrollTrigger: {
      trigger: ".project-item-out",    
      start: "top 80%",             
      end: "bottom 30%",             
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  //// contact page 

  // contact us
  gsap.from(".contact-in", {
    duration: 1,   
    y: -100,     
    opacity: 0,
    stagger: 0.2,   
    scrollTrigger: {
      trigger: ".contact-in",  
      start: "top 80%",    
      end: "bottom 30%",   
      scrub: true,
      markers: false,
      toggleActions: "play none none reverse"
    }
  });

  

  


//scroller-smooth
const lenis = new Lenis()
lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 300)
})
gsap.ticker.lagSmoothing(0)
// close



