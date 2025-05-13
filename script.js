let count = 0;
const countEl = document.getElementById("count-el");
const saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  if (count === 0) return;
  saveEl.textContent += " " + count + " -";
  count = 0;
  countEl.textContent = count;
}

function reset() {
  count = 0;
  countEl.textContent = count;
  saveEl.textContent = "📝 Previous entries:";
}

