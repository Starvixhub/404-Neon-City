const rain =
    document.getElementById("rain");

const enterButton =
    document.getElementById("enterButton");


/* =========================
   RAIN GENERATOR
========================= */

function createRain() {

    const drop =
        document.createElement("span");

    drop.classList.add("drop");

    drop.style.left =
        Math.random() * 110 + "%";

    drop.style.height =
        Math.random() * 50 + 40 + "px";

    drop.style.opacity =
        Math.random() * .55 + .15;

    drop.style.animationDuration =
        Math.random() * .5 + .45 + "s";

    drop.style.animationDelay =
        Math.random() * -2 + "s";

    rain.appendChild(drop);
}


/* Create city rain */

for (let i = 0; i < 220; i++) {
    createRain();
}


/* =========================
   ENTER CITY
========================= */

enterButton.addEventListener(
    "click",
    () => {

        document.body.style.transition =
            "opacity 1s ease";

        document.body.style.opacity =
            "0";

        setTimeout(() => {

            window.location.href = "/";

        }, 1000);

    }
);


/* =========================
   NEON CURSOR PARTICLES
========================= */

document.addEventListener(
    "mousemove",
    (event) => {

        if (Math.random() > .35) {
            return;
        }

        const particle =
            document.createElement("span");

        particle.style.position =
            "fixed";

        particle.style.left =
            event.clientX + "px";

        particle.style.top =
            event.clientY + "px";

        particle.style.width = "3px";
        particle.style.height = "3px";

        particle.style.borderRadius =
            "50%";

        particle.style.background =
            Math.random() > .5
                ? "#ff2bd6"
                : "#00d9ff";

        particle.style.boxShadow =
            "0 0 10px currentColor";

        particle.style.pointerEvents =
            "none";

        particle.style.zIndex = "100";

        particle.style.transition =
            "all .7s ease";

        document.body.appendChild(
            particle
        );

        requestAnimationFrame(() => {

            particle.style.transform =
                `translate(
                    ${(Math.random() - .5) * 40}px,
                    ${-20 - Math.random() * 30}px
                ) scale(0)`;

            particle.style.opacity = "0";

        });

        setTimeout(() => {

            particle.remove();

        }, 700);

    }
);