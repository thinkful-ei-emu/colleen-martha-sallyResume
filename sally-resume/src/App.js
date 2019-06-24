import React from 'react';
import StudentName from './StudentName.js';

function App() {

  return (
    <div>
    <header role="banner">
      <h1>Resume of Sally Student</h1>
    </header>

    <address>
      <header>
      Contact Information:
      </header>
      <ul>
        <StudentName name='Sally Student' />
        <li>Email address: <a href="mailto:sstudent@gmail.com"> sstudent@gmail.com</a></li>
        <li>Phone number: (123)456-7890</li>
      </ul>
      <img alt="" src="https://vignette.wikia.nocookie.net/broad-city/images/e/e0/Ilana-wexler.jpg/revision/latest?cb=20160210220217"/>
    </address>

    <main role="main">
    <section>
      <header>
      <h3>Eductional History</h3> 
      </header>
      <p>Doctorate in Comedy, College of Sally Student, 2000-2004</p>
    </section>

    <section>
      <header>
      <h3>Employment History</h3>
      </header>
        <h4>Hometown Restaurant, Head Chef, 2000-2004</h4>
        <p>
          As the head chef at Hometown Restaurant I was responsible for keep the kitchen staff organized, clean, and able to communicate clearly.
          </p>
        <h4>Google, Head Logo Artist, 2004-2010</h4>
        <p>
          The responsibilities at google as head logo artist were to reamin creative, work collaboratively with brainstorming team and meet strict deadlines.
        </p>
    </section>
    </main>
    <script src="script.js"></script>
  </div>
  );
}

export default App;
