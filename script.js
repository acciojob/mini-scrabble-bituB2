const inputText = document.getElementById("evaluatedText");
const letterCountDisplay = document.getElementById("letterCount");

inputText.addEventListener("input", function() {
  let letterCount = this.value.length;
  if (isNaN(letterCount) ||letterCount === 0) {
    letterCountDisplay.innerHTML = 0;
  } else {
    letterCountDisplay.innerHTML = letterCount;
  }
});

