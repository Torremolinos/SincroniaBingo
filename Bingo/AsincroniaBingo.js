function* extracNumber(attemps) {
  for (let i = 0; i < attemps; i++) {
    yield Math.floor(Math.random() * 91);
  }
}

let cpu = 0;
let player = 0;

//CPU attemps

let cpuGenerator = extracNumber(2);

//now we rolls the dices

cpu += cpuGenerator.next().value; //two roll for the cpu.
cpu += cpuGenerator.next().value;

//now the player will roll the dice

let playerGenerator = extracNumber(2);
player += playerGenerator.next().value;
player += playerGenerator.next().value;

let show = document.getElementById("result");
show.innerText = cpu > player ? "CPU WIN" : "Player wins";
