class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter your name...");
   //Create a input box to enter the number
    this.input2 = createInput("").attribute("placeholder", "Enter your Option...");

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)

    this.question1 = createElement("h3");
    this.message = createElement("h2");
  }

  hide(){
    this.question1.hide();
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);
    var qa = `Question: What starts and ends with 'E', but has only one letter in it?
              </br> 1. Everyone
              </br> 2. Envelope
              </br> 3. Estimate
              </br> 4. Example `
    this.question1.html(qa)

    //Create html() and position() for each question, input and answers.
    this.question1.position(150, 75);
    this.input1.position(150, 230);
    this.button.position(425, 300);
    this.input2.position(575, 230);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.handleMousePressed();
  }

  handleMousePressed(){
    this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.question1.hide();
      this.button.hide();

      var msg = `Thank You!! Your Answer has been Recorded`
      this.message.html(msg);
      this.message.position(220, 175);
    })
  }
}
