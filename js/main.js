
$(document).ready(function () {
    var scr_reveal_lr_batch = [
        ".scr-reveal-fd-lr-1", ".scr-reveal-fd-lr-2"
    ];

    // scr-reveal-fd-lr-1
    ScrollTrigger.batch(".scr-reveal-fd-lr-1", {
        interval: 0.1,
        //batchMax: 3,
        onEnter: batch => gsap.from(batch, {
            opacity: 0, x: -100, stagger: { each: 0.15, grid: [1, 3] },
            overwrite: true, duration: 1, ease: "power4"
        }),
        onLeave: batch => gsap.set(batch, {
            opacity: 0, x: 0, y: -100, stagger: 0.15, overwrite: true
        }),
        onEnterBack: batch => gsap.to(batch, {
            opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true, duration: 2,
            ease: "power4"
        })
    });

    // scr-reveal-fd-lr-2
    gsap.set(".scr-reveal-fd-lr-2", {
        opacity: 0,
        x: -100,
    })
    ScrollTrigger.batch(".scr-reveal-fd-lr-2", {
        interval: 0.1,
        onEnter: batch => gsap.to(batch, {
            opacity: 1, x: 0, stagger: { each: 0.15, grid: [1, 3] },
            overwrite: true, duration: 2, ease: "power4"
        }),
        onLeave: batch => gsap.set(batch, {
            opacity: 0, x: 0, y: 0, stagger: 0.15, overwrite: true
        }),
        onEnterBack: batch => gsap.to(batch, {
            opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true, duration: 2,
            ease: "power4"
        }),
        end: "bottom top",
    });

    // flt-img-btlr-prof-1
    gsap.set(".flt-img-btlr-prof-1", {
        opacity: 0,
        x: 400,
        y: 200
    })
    let flt_img_btlr_prof_1_tl = gsap.timeline({ paused: true });
    flt_img_btlr_prof_1_tl.to(".flt-img-btlr-prof-1", {
        opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true,
        duration: 2, ease: "power4"
    }).to(".move-up-100", {
        y: 0, duration: 2, ease: "power4"
    }, "-=1.5")

    ScrollTrigger.create({
        trigger: ".flt-img-btlr-prof-1-trig",
        onEnter: () => flt_img_btlr_prof_1_tl.play()
    })

    gsap.set(".hbgr", {
        opacity: 0,
        x: 0,
        y: -100
    })
    let hbgr_1 = gsap.timeline({ paused: true });
    hbgr_1.to(".hbgr-1", {
        opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true,
        duration: 0.75, ease: "power4"
    }).to(".hbgr-2", {
        opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true,
        duration: 0.75, ease: "power4"
    }, "-=0.5").to(".hbgr-3", {
        opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true,
        duration: 0.75, ease: "power4"
    }, "-=0.5")

    ScrollTrigger.create({
        trigger: ".trigger-hbgr-1",
        onEnter: () => hbgr_1.play(),
        start: "top 50%"
    })
});