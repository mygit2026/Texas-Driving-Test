const questionArea = `
<h2>Question 1 of 150</h2>

<p>
What does a red octagonal sign mean?
</p>

<label>
<input type="radio" name="q1">
Yield
</label>

<br><br>

<label>
<input type="radio" name="q1">
Railroad Crossing
</label>

<br><br>

<label>
<input type="radio" name="q1">
Stop
</label>

<br><br>

<label>
<input type="radio" name="q1">
School Zone
</label>

<br><br>

<label>
<input type="radio" name="q1">
No Passing
</label>

<br><br>

<button class="btn">
Next Question
</button>
`;

function startStudyMode() {
    document.querySelector(".container").innerHTML = questionArea;
}

function startExamMode() {
    document.querySelector(".container").innerHTML = questionArea;
}
