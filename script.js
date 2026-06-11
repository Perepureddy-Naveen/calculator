const display = document.getElementById("display");
function appendValue(v) {
  display.value += v;
}
function clearDisplay() {
  display.value = "";
}
function deleteLast() {
  display.value = display.value.slice(0, -1);
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
document.addEventListener("keydown", (e) => {
  const k = e.key;
  if ("0123456789+-*/.%".includes(k)) display.value += k;
  if (k === "Enter") calculate();
  if (k === "Backspace") deleteLast();
});
