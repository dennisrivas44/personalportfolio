const checkButton = document.getElementById("check-btn");
const inputText = document.getElementById("text-input");
const resultText = document.getElementById("result");

const isPalindrome = (str) => {
  const cleaned = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}

const checkInput = () => {
  const inputValue = inputText.value;
  if(inputValue === ""){
    alert("Please input a value");
  }else if(isPalindrome(inputValue)){
    const HTMLString = `${inputValue} is a palindrome.`;
    resultText.textContent = HTMLString;
  }else{
    const HTMLString = `${inputValue} is not a palindrome.`;
    resultText.textContent = HTMLString;
  }
}

checkButton.addEventListener("click", checkInput);