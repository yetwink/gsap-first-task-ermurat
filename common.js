
gsap.registerPlugin(ScrollTrigger);

let containerHeight = document.querySelector('.gallery__about-left img').offsetHeight,
    containerRightHeight = document.querySelector('.gallery__about-right').offsetHeight,
    resultHeight = containerRightHeight - containerHeight - 23,
    aboutLeftImgList = [...document.querySelectorAll('.about-left__img')],
    aboutRightList = [...document.querySelectorAll('.gallery__about-right')],
    aboutList = [...document.querySelectorAll('.gallery__about')],
    aboutLastLeft = document.querySelector('.gallery__about-left-last');


console.log(containerHeight);
console.log(containerRightHeight);
console.log(resultHeight);

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.gallery',
            start:"top top",
            end:"bottom+=5000vh top",
            pin: true,
            scrub: 1,
            // markers: true,
        },
    }    
    );


let mainTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.main-img',
        start:"top bottom",
        end:"bottom bottom",
        scrub: 1,
        markers: true,
},
}

);

mainTl.to('.gallery__main',{
    scale: 1,
})

mainTl.to('.main-img',{
    scale: 1,
}, '<')



for(let i = 0; i < aboutLeftImgList.length; i++){
    tl.to(aboutList[i], {
        xPercent: -100,
        // opacity: 1,
    })
    
    tl.to(aboutLeftImgList[i],{
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        scale: 1,
    }, '<');

    tl.to(aboutRightList[i], {
        y: -resultHeight,
    })
}

tl.to(aboutLastLeft,{
    // duration: 2,
    onComplete: ()=>{
        aboutLastLeft.classList.add('active')
    },
    onReverseComplete: ()=>{
        aboutLastLeft.classList.remove('active')
    }

    
})

// -------------- 1ST CONTAINER -------------

// tl.to('.main-img',{

//         scrollTrigger: {
//         trigger: '.gallery__main',
//         scrub: 1,
//         markers: true,

        
//     },
//     scale: 1,
// })

// -------------- 1ST CONTAINER -------------



// -------------- 2ND CONTAINER ABOUT -------------







// --------- 1 option -----------

// aboutList.forEach((el, i) =>{
//     tl.to(el, {
//         xPercent: -100,
//         opacity: 1,
//     })

// })
// aboutLeftImgList.forEach((el, i) => {
//     tl.to(el,{
//         clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//     }, '<');
// })

// aboutRightList.forEach((el, i) => {
//     tl.to(el,{
//         y: -resultHeight,
//     },);
// })



// --------- 2 option -----------

// aboutList.forEach((el, i) =>{
//     tl.to(el[i], {
//         xPercent: -100,
//         opacity: 1,
//     })
//     tl.to(aboutLeftImgList[i],{
//         clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
//     }, '<');
//     tl.to(aboutRightList[i], {
//         y: -resultHeight,
//     })
// })


// --------- 3 option -----------





// -------------- 2ND CONTAINER ABOUT -------------



// -------------- LAST CONTAINER -------------

// tl.from('.gallery__end', {
//     xPercent: 100,
// })
// tl.to('.bottom-img',{
//     clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
// },'<')

// -------------- LAST CONTAINER -------------

























// gsap.to('.about-left__img',{
//     scrollTrigger: {
//         trigger: '.gallery__about',
//         start: 'top center',
//         pin: true,
//         scrub: 1,
//     }
// })















// gsap.registerPlugin(ScrollTrigger);

// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".container").offsetWidth
//   }
// });






// gsap.registerPlugin(ScrollTrigger)

// const tlGallery = gsap.timeline()

// let panelWidth = document.querySelector(".gallery__main").offsetWidth,
//     panelHeight = document.querySelector('.gallery__main').offsetHeight


// gsap.to('.gallery__main', {
//     pin: true,
// })

// gsap.from('.gallery__about',
//     {
//         scrollTrigger: {
//             trigger: '.gallery',
//             start: 'top top',
//             scrub: true,
//         },
//         pin: true,
//         x: panelWidth,
//         y: -panelHeight,
//         markers: true,
//         // opacity: 0,
//         // duration: 2,
//     },

// )




// let sections = gsap.utils.toArray(".panel");

// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".gallery",
//     pin: true,
//     scrub: 1,
//     // snap: 1 / (sections.length - 1),
//     end: () => "+=" + document.querySelector(".panel").offsetWidth
//   }
// });



let wpTL = gsap.timeline({
    scrollTrigger: {
        trigger: '.section projects-main projects-first',
        start:"top bottom",
        end:"bottom bottom",
        scrub: 1,
},
})

const wpIcon = document.querySelector('.event_wp.fixed-whatsapp');

wpTL.to('.event_wp.fixed-whatsapp', {
    opacity: 0,
    visibility: 0,
    onComplete: ()=>{
        wpIcon.style.opacity = "1",
        wpIcon.style.visibility = "1"
    }
})



