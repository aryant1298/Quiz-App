const app = document.getElementById("quiz");
app.style.height = "600px";
app.style.width = "600px";
app.style.margin = "10px";
app.style.padding = "10px";

const h1 = document.createElement("h1");
h1.textContent = "Quiz app";
app.appendChild(h1);

const form = document.createElement("form");

const nameLabel = document.createElement("label");
nameLabel.textContent = "Name: ";
nameLabel.setAttribute("for", "name");
const nameInput = document.createElement("input");
nameInput.setAttribute("type", "text");
nameInput.setAttribute("id", "name");
nameInput.setAttribute("name", "name");
form.appendChild(nameLabel);
form.appendChild(nameInput);
form.appendChild(document.createElement("br"));

const classLabel = document.createElement("label");
classLabel.textContent = "Class: ";
classLabel.setAttribute("for", "class");
const classInput = document.createElement("input");
classInput.setAttribute("type", "text");
classInput.setAttribute("id", "class");
classInput.setAttribute("name", "class");
form.appendChild(classLabel);
form.appendChild(classInput);
form.appendChild(document.createElement("br"));

const rollLabel = document.createElement("label");
rollLabel.textContent = "Roll No.: ";
rollLabel.setAttribute("for", "roll");
const rollInput = document.createElement("input");
rollInput.setAttribute("type", "number");
rollInput.setAttribute("id", "roll");
rollInput.setAttribute("name", "roll");
form.appendChild(rollLabel);
form.appendChild(rollInput);
form.appendChild(document.createElement("br"));

const phoneLabel = document.createElement("label");
phoneLabel.textContent = "Phone Number: ";
phoneLabel.setAttribute("for", "phone");
const phoneInput = document.createElement("input");
phoneInput.setAttribute("type", "number");
phoneInput.setAttribute("id", "phone");
phoneInput.setAttribute("name", "phone");
form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.appendChild(document.createElement("br"));

const startButton = document.createElement("button");
startButton.setAttribute("type", "submit");
startButton.textContent = "Start Task";
form.appendChild(startButton);
app.appendChild(form);


const questions = [
    {
        text: "1 + 1 ?",
        options: ["1", "4", "2", "3"],
        answer:2
    },
    {
        text: "2 + 2 ?",
        options: ["2", "4", "6", "8"],
        answer: 1
    },
      {
        text: "3 + 3 ?",
        options: ["2", "4", "6", "8"],
        answer: 2
    },
      {
        text: "4 + 4 ?",
        options: ["2", "4", "6", "8"],
        answer: 3
    },
      {
        text: "5 + 5 ?",
        options: ["2", "49", "6", "10"],
        answer: 3
    },
      {
        text: "6 + 6 ?",
        options: ["12", "41", "6", "8"],
        answer: 0
    },
      {
        text: "7 + 7 ?",
        options: ["21", "14", "6", "8"],
        answer: 1
    },
      {
        text: "8 + 8 ?",
        options: ["12", "4", "16", "8"],
        answer: 2
    },
      {
        text: "9 + 9 ?",
        options: ["21", "41", "61", "18"],
        answer: 3
    },

];

let userAnswers = [];

function showQuestion(index) {
  app.innerHTML = "";
  const questiondiv = document.createElement("div");
  questiondiv.style.marginTop = "20px";

  const question = document.createElement("p");
  question.textContent = questions[index].text;
  questiondiv.appendChild(question);

  questions[index].options.forEach((opt, i) => {
    const label = document.createElement("label");
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "quiz";
    radio.value = i;
    if (userAnswers[index] === i) radio.checked = true;
    radio.onclick = function() {
      userAnswers[index] = i;
    };
    label.appendChild(radio);
    label.appendChild(document.createTextNode(opt));
    questiondiv.appendChild(label);
    questiondiv.appendChild(document.createElement("br"));
  });

  const nextButton = document.createElement("button");
  nextButton.textContent = (index < questions.length - 1) ? "Next" : "Finish";
  nextButton.onclick = function() {
    if (index < questions.length - 1) {
      showQuestion(index + 1);
    } else {
      showResult();
    }
  };
  questiondiv.appendChild(nextButton);
  app.appendChild(questiondiv);
}

function showResult() {
  app.innerHTML = "";
  let score = 0;
  questions.forEach((q, i) => {
    if (userAnswers[i] === q.answer) score++;
  });
  const resultDiv = document.createElement("div");
  resultDiv.innerHTML = `<h2>Your result</h2>
    <p>Name: ${nameInput.value}</p>
    <p>Class: ${classInput.value}</p>
    <p>Roll No.: ${rollInput.value}</p>
    <p>Phone Number: ${phoneInput.value}</p>
    <p>Your Score: ${score} / ${questions.length}</p>`;
  app.appendChild(resultDiv);
}

form.onsubmit = function(event) {
  event.preventDefault();
  if (
    !nameInput.value.trim() ||
    !classInput.value.trim() ||
    !rollInput.value.trim() ||
    !phoneInput.value.trim()
  ) {
    alert("Please fill the form before starting the quiz.");
    return;
  }
  showQuestion(0);
};