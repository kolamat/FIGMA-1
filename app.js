const Logo = document.querySelectorAll("#logo path");

for (let i = 0; i < Logo.length; i++) {
  console.log(`Letter ${i} is ${Logo[i].getTotalLength()}`);
}
