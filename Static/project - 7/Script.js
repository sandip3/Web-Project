function home_Section_Animation() {
    gsap.set('.slides-mrq', {
        scale: 15
    })

    var Gsap_Time_line = gsap.timeline({
        scrollTrigger: {
            trigger: '.home',
            start: "top top",
            end: 'bottom bottom',
            scrub: 1,
            // pin: true
        }
    })

    Gsap_Time_line.to('.vid-div', {
        '--clip': '0%',
        ease: Power2,
    }, 'a')
        .to('.slides-mrq', {
            scale: 1,
            ease: Power2,
        }, 'a')
        .to('.lft', {
            xPercent: -10,
            stagger: .03,
            ease: Power4,
        }, 'b')
        .to('.rgt', {
            xPercent: 10,
            stagger: .03,
            ease: Power4,
        }, 'b')
}

function Real_Section_Animation() {
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: '.real',
            start: 'top top',
            end: 'bottom bottom',
            // markers: true,
            scrub: 1
        },
        xPercent: -310,
        ease: Power2
    })
}

function Team_section_Animation() {

    var list = document.querySelectorAll('.list_elem').forEach(function (x) {
        x.addEventListener('mouseover', function (data) {
            var pic = this.querySelector('.pic')

            var x_Axias_value_mouse = gsap.utils.mapRange(0, window.innerWidth, -200, 200, data.clientX)
            gsap.to(pic, {
                opacity: 1,
                x: x_Axias_value_mouse,
                ease: Power4,
                duration: .5
            })
        })

        x.addEventListener('mouseleave', function (data) {
            var pic = this.querySelector('.pic')

            gsap.to(pic, {
                opacity: 0,
                ease: Power4,
                duration: 1
            })
        })
    })
}

function Para_2_Section_animation() {
    var txt_data = document.querySelectorAll('.para-2-txt');
    txt_data.forEach(function (txt) {
        var clutter = '';
        var arr_txt = txt.innerText.split('')
        arr_txt.forEach(function (x) {
            if (x === ' ') {
                clutter += `<span >&nbsp;</span>`
            }
            else {
                clutter += `<span >${x}</span>`
            }
        })
        txt.innerHTML = clutter;
    })
    
}

gsap.set(".para-2-txt span", {
    opacity: .1,
})

gsap.to(".para-2-txt span", {
    scrollTrigger: {
        trigger: "para-2",
        // pin:true,
        start: "top 50%",
        end: "bottom 90%",
        scrub: .2,
        markers: true,
    },
    opacity: 1,
    stagger: .01,
    ease: Power4,
})





home_Section_Animation();
Real_Section_Animation();
Team_section_Animation();
Para_2_Section_animation();
