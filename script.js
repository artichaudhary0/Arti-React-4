function Counter() {
  let count = 0;

  const render = () => {
    document.body.innerHTML = "";

    const contentDiv = document.createElement("div"); // div

    const displayCounter = document.createElement("p");

    displayCounter.textContent = `Count : ${count}`;
    const button = document.createElement("button");
    button.textContent = "Increment";

    button.onclick = () => {
      count++;
      render();
    };

    contentDiv.appendChild(displayCounter);
    contentDiv.appendChild(button);
    document.body.appendChild(contentDiv);
  };

  render();
}

Counter();

function LifeCycleOfElement() {
  console.log("Component create");
  const element = document.createElement("div");

  console.log("add text to div");
  // innerHtml textContent innerText

  element.textContent = "Click to increase count";

  return element;
}

document.body.appendChild(LifeCycleOfElement());
console.log("append");



function Form() {
  let inputValue = "";

  const handleInput = (event) => {
    inputValue = event.target.value;

    display.textContent = `You have typed : ${inputValue}`;
  };

  const formElement = document.createElement("div");
  const input = document.createElement("input");
  input.type = "text";

  input.addEventListener("input", handleInput);

  const display = document.createElement("p");
  display.textContent = "You typed : ";

  formElement.appendChild(input);
  formElement.appendChild(display);
  return formElement;
}

document.body.appendChild(Form());
