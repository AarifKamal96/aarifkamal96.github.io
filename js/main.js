
$(document).ready(function () {
    // gsap.registerPlugin(ScrollTrigger);

    // gsap.to(".scr-reveal-fd-lr", {
    //     scrollTrigger: ".scr-reveal-fd-lr",
    //     opacity: 1,
    //     x: 0,
    //     duration: 1,
    //     toggleActions: 'replay none none none',
    // })

    var scr_reveal_lr_batch = [
        ".scr-reveal-fd-lr-1", ".scr-reveal-fd-lr-2"
    ];

    // for (let icn = 0; icn < scr_reveal_lr_batch.length; icn++) {
    //     ScrollTrigger.batch(scr_reveal_lr_batch[icn], {
    //         interval: 0.1,
    //         onEnter: batch => gsap.from(batch, {
    //             opacity: 0, x: -100, stagger: { each: 0.15, grid: [1, 3] },
    //             overwrite: true, duration: 1, ease: "power4", start: "bottom center"
    //         }),
    //         onLeave: batch => gsap.set(batch, {
    //             opacity: 0, x: 0, y: -100, stagger: 0.15, overwrite: true,
    //             start: "bottom center"
    //         }),
    //         onEnterBack: batch => gsap.to(batch, {
    //             opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true, duration: 2,
    //             ease: "power4", start: "bottom center"
    //         }),
    //     });
    // }

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
        }),
        // onLeaveBack: batch => gsap.set(batch, {
        //     opacity: 0, x: 0, y: -100, stagger: 0.15, overwrite: true
        // })
        // you can also define things like start, end, etc.
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
        // start: "top 50%",
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

    // ScrollTrigger.batch(".flt-img-btlr-prof-1", {
    //     interval: 0.1,
    //     onEnter: batch => gsap.to(batch, {
    //         opacity: 0.5, x: 0, y: -200, stagger: { each: 0.15, grid: [1, 3] },
    //         overwrite: true, duration: 2, ease: "power4"
    //     }),
    //     onLeave: batch => gsap.set(batch, {
    //         opacity: 0, x: 400, y: -200, stagger: 0.15, overwrite: true
    //     }),
    //     onEnterBack: batch => gsap.to(batch, {
    //         opacity: 0.5, x: 0, y: -200, stagger: 0.15, overwrite: true, duration: 2,
    //         ease: "power4"
    //     }),
    //     // start: "top 50%",
    //     end: "bottom top",
    // });


    // let tl_head_j = gsap.timeline({
    //     ScrollTrigger: {
    //         trigger: ".scr-reveal-fd-lr",
    //         start: "center center"
    //     }
    // });

    // let tl1 = gsap.timeline({
    //     ScrollTrigger: {
    //         trigger: ".scr-reveal-fd-lr-2",
    //         start: "top 50%",
    //         end: "bottom top",
    //         toggleActions: "restart none none restart"
    //     }
    // }).from()


    gsap.set(".scr-reveal-fd-lr-3", {
        opacity: 0,
        x: -100,
    })
    ScrollTrigger.batch(".scr-reveal-fd-lr-3", {
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
        // start: "top 50%",
        end: "bottom top",
    });

    var reveal_arr = ['.scr-reveal-fd-lr-4', '.scr-reveal-fd-lr-5'];
    for (var i = 0; i < reveal_arr.length; i++) {
        var reveal_cls = reveal_arr[i]
        gsap.set(reveal_cls, {
            opacity: 0,
            x: 100,
        })
        ScrollTrigger.batch(reveal_cls, {
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
            // start: "top 50%",
            end: "bottom top",
        });
    }
    var reveal_only_arr = ['.scr-reveal-fd-lr-6'];
    for (var i = 0; i < reveal_only_arr.length; i++) {
        var reveal_only_cls = reveal_only_arr[i]
        gsap.set(reveal_only_cls, {
            opacity: 0,
            x: 100,
        })
        ScrollTrigger.batch(reveal_only_cls, {
            interval: 0.1,
            onEnter: batch => gsap.to(batch, {
                opacity: 1, x: 0, stagger: { each: 0.15, grid: [1, 3] },
                overwrite: true, duration: 2, ease: "power4"
            }),
            // start: "top 50%",
            end: "bottom top",
        });
    }
    var popup_arr = ['.scr-reveal-fd-lr-7'];
    for (var i = 0; i < popup_arr.length; i++) {
        var popup_arr_cls = popup_arr[i]
        gsap.set(popup_arr_cls, {
            opacity: 0,
            scaleX: 0, scaleY: 0,
        })
        ScrollTrigger.batch(popup_arr_cls, {
            interval: 0.1,
            onEnter: batch => gsap.to(batch, {
                opacity: 1, scaleX: 1, scaleY: 1, stagger: { each: 0.15, grid: [1, 3] },
                overwrite: true, duration: 1, ease: "elastic"
            }),
            onLeave: batch => gsap.set(batch, {
                opacity: 0, scaleX: 0, scaleY: 0, stagger: 0.15, overwrite: true
            }),
            onEnterBack: batch => gsap.to(batch, {
                opacity: 1, scaleX: 1, scaleY: 1, stagger: 0.15, overwrite: true, duration: 1,
                ease: "elastic"
            }),
            start: "top 80%",
            end: "top 0%",
        });
    }

    {
        const process = document.querySelector('.process');
        if ((typeof (process) != 'undefined' && process != null)) {
            let sections = gsap.utils.toArray('.process__item');
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: process,
                    start: "top center",
                    markers: false,
                    scrub: 2,
                    pin: true,
                    end: () => "+=" + document.querySelector(".process").offsetWidth
                },
            });
        }
    }

    ScrollTrigger.refresh();

    $('.height-reset-wid').height($('.process').width() / 1.5 + 'px');


    var reveal_arr_2 = ['.scr-reveal-fd-lr-8'];
    for (var i = 0; i < reveal_arr_2.length; i++) {
        var reveal_cls_2 = reveal_arr_2[i]
        gsap.set(reveal_cls_2, {
            opacity: 0,
            x: 100,
        })
        ScrollTrigger.batch(reveal_cls_2, {
            interval: 0.1,
            onEnter: batch => gsap.to(batch, {
                opacity: 1, x: 0, stagger: { each: 0.15, grid: [1, 3] },
                overwrite: true, duration: 1, ease: "slow"
            }),
            onLeave: batch => gsap.set(batch, {
                opacity: 0, x: 0, y: 0, stagger: 0.15, overwrite: true
            }),
            onEnterBack: batch => gsap.to(batch, {
                opacity: 1, x: 0, y: 0, stagger: 0.15, overwrite: true, duration: 1,
                ease: "slow"
            }),
            // start: "top 50%",
            end: "bottom top",
        });
    }
});

function scr_to(loc_id, loc_cl) {
    if (unh_rem_cls(loc_cl) == true) {
        var to_vw = document.getElementById(loc_id);
        to_vw.scrollIntoView({ behavior: "smooth" });
    }
}

function unh_rem_cls(cl) {
    $('.' + cl).each(function () {
        $(this).removeClass('hidden');
    });
    return true;
}

function ctFSbt() {
    $('#f_btn').attr('disabled', true);
    var f_name = $('#f_name').val();
    var f_email = $('#f_email').val();
    var f_ph = $('#f_ph').val();
    var f_msg = $('#f_msg').val();
    var is_err = false;
    if (!f_name.trim() || f_name == undefined) {
        $('.err-div').html('Name is required');
        $('#f_name').addClass('err-content');
        is_err = true;
        $('#f_btn').attr('disabled', false);
        display_msg("error", "Name is required", 1500);
        return false;
    } else {
        if ($('#f_name').hasClass('err-content'))
            $('#f_name').removeClass('err-content');
    }
    if (!f_email.trim() || f_email == undefined || !validateEmail(f_email)) {
        $('.err-div').html('E-mail is invalid');
        $('#f_email').addClass('err-content');
        is_err = true;
        $('#f_btn').attr('disabled', false);
        display_msg("error", "E-mail is invalid", 1500);
        return false;
    } else {
        if ($('#f_email').hasClass('err-content'))
            $('#f_email').removeClass('err-content');
    }
    // if (f_ph.trim()) {
    //     if (!validatePhone(f_ph)) {
    //         $('.err-div').html('Phone number is invalid');
    //         $('#f_ph').addClass('err-content');
    //         is_err = true;
    //         $('#f_btn').attr('disabled', false);
    //         display_msg("error", "Phone number is invalid", 1500);
    //         return false;
    //     } else {
    //         if ($('#f_ph').hasClass('err-content'))
    //             $('#f_ph').removeClass('err-content');
    //     }
    // } else {
    //     if ($('#f_ph').hasClass('err-content'))
    //         $('#f_ph').removeClass('err-content');
    // }
    if (!is_err) {
        $('#f_btn').text('Submitting details...');
        $('#f_btn').attr('onclick', 'e');
        $('form').submit();
        if (submitted) {
            setTimeout(() => {
                display_msg("success", "Successfully submitted details");
            }, 1500);
        }
    }
}

const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

const validatePhone = (phone) => {
    return String(phone)
        .toLowerCase()
        .match(
            /^[\+]?[(]?[0-9]{3,4}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
        );
};
var submitted = false;

function display_msg(stats, msg, timeout = 0) {
    var icn = (stats == 'success') ? 'fa-check' : 'fa-times';
    var clr = (stats == 'success') ? 'green' : 'red';
    var html_cont = '<div class="form-contnr border-curve-1 mt-3 p-0 '
        + 'scr-reveal-fd-lr-6 w-100 d-flex hori-cen vert-cen" style="height:'
        + $('.form-contnr').height() + 'px;"><div class="position-relative w-100">'
        + '<div class="position-absolute text-center w-100 move-up-a"><i class="fa ' + icn + ' fa-4x"></i>'
        + '</div><div class="position-absolute text-center w-100 move-down-a">' + msg + '</div></div></div>';
    var html_retain = timeout ? $('.form-contnr').clone() : null;
    $('.form-contnr').replaceWith(html_cont);
    gsap.from(".form-contnr", { opacity: 0, ease: "power4" });
    gsap.to(".move-up-a", { opacity: 1, y: -30, color: clr, ease: "power4" });
    gsap.to(".move-down-a", { opacity: 1, y: 30, ease: "power4" });
    if (html_retain) {
        setTimeout(() => {
            gsap.to(".move-up-a", { y: 0, ease: "power4" });
            gsap.to(".move-down-a", { y: 0, ease: "power4" });
            setTimeout(() => {
                $('.form-contnr').replaceWith(html_retain);
                gsap.from(".form-contnr", { opacity: 0, ease: "power4" });
            }, 50);
        }, timeout);
    }
}