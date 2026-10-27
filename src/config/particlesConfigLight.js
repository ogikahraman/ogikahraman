const particlesConfig = {
    fullScreen: {
        enable: false,
    },
    particles: {
        number: {
            value: 65,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#74856e",
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.48,
            random: true,
        },
        size: {
            value: 2.7,
            random: true,
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#74856e",
            opacity: 0.32,
            width: 1,
        },
        move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            out_mode: "out",
            bounce: false,
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
                    opacity: 0.55,
                },
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
};

export default particlesConfig;
