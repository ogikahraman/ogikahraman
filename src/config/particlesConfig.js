const particlesConfig = {
    fullScreen: {
        enable: false,
    },
    particles: {
        number: {
            value: 150,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "star",
        },
        opacity: {
            value: 0.6,
            random: true,
        },
        size: {
            value: 5,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ccff",
            opacity: 0.5,
            width: 2,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out",
            bounce: true,
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                    opacity: 1,
                },
            },
            push: {
                particles_nb: 10,
            },
        },
    },
    retina_detect: true,
};

export default particlesConfig;