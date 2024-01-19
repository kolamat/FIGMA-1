const Logo = document.querySelectorAll("#logo path");

for (let i = 0; i < Logo.length; i++) {
  console.log(`Letter ${i} is ${Logo[i].getTotalLength()}`);
}

anime({
  targets: "#seclogo path",
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: "easeInOutSine",
  duration: 1500,
  delay: function (el, i) {
    return i * 250;
  },
  direction: "alternate",
  loop: true,
});
