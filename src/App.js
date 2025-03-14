import "./App.scss";

import Background2 from "./assets/Background2.png";
import Logo from "./assets/Logo.png";

function App() {
  return (
    <div className="App">
      <div id="background">
        <img src={Background2} />
      </div>
      <div id="logo">
        <img src={Logo} />
      </div>
      <div id="wrapper">
        <div id="fineline"></div>
        <div id="box">
          <div id="BioBody">
            <p class="style2">I'm a technologist living London, previously New York City.</p>

            <p>
              I'm a senior engineer at{" "}
              <a href="https://www.spotify.com">Spotify</a>.
            </p>
            <p>
              I love working with different languages and technologies. I'm
              equally comfortable building front-ends in{" "}
              <a href="https://reactjs.org">React</a> or{" "}
              <a href="https://emberjs.com">Ember</a>, data pipelines in{" "}
              <a href="https://www.scala-lang.org/">Scala</a> (Spotify loves{" "}
              <a href="https://spotify.github.io/scio/">Scio</a>!), and backend
              APIs in <a href="https://nodejs.org/en/">Node.js</a> or Java using{" "}
              <a href="https://spring.io/projects/spring-boot">Spring Boot</a>.
            </p>
            <p>
              I've previously worked as a consultant at{" "}
              <b>
                <a href="http://201-created.com">201 Created</a>
              </b>{" "}
              and worked with many great companies in the{" "}
              <b>
                <a href="http://emberjs.com">Ember</a>
              </b>{" "}
              community. I have a{" "}
              <b>
                <a href="https://medium.com/@isaacezer">blog about Ember</a>
              </b>{" "}
              and I've given several{" "}
              <b>
                <a href="https://medium.com/@isaacezer/ember-meetup-talks-e35df4c0db67">
                  conference and meetup talks
                </a>
              </b>
              .
            </p>
            <p>
              I built a website{" "}
              <b>
                <a href="http://jazz.splanky.net">splanky.net</a>
              </b>{" "}
              to show a social graph of New York's jazz scene.
            </p>
            <p>
              In my free time I take in as much jazz, swing dancing, and improv
              comedy as I possibly can.
            </p>
            <p>
              I used to live in Tokyo and played piano with a swing band that
              played at festivals such as the{" "}
              <a href="http://www.youtube.com/watch?v=yiV7caPXssc&feature=youtu.be">
                Korean Lindy Hop Championships
              </a>{" "}
              and{" "}
              <a href="http://mechakuchaswing.main.jp/ole_2011/OLE2011.html">
                Osaka Lindy Exchange.
              </a>
            </p>
            <p>
              Check out video of me jumping off a{" "}
              <a href="http://www.youtube.com/watch?v=bAVA8xg6qTE">
                168m bridge in Nepal!
              </a>
            </p>

            <p>
              You can find me on{" "}
              <a href="http://www.twitter.com/isaacezer">Twitter</a>,{" "}
              <a href="http://github.com/iezer">GitHub</a>, and{" "}
              <a href="http://www.linkedin.com/in/isaacezer">LinkedIn</a>.
            </p>

            <p>
              Email:{" "}
              <b>
                <a href="mailto:me@isaacezer.com">me@isaacezer.com</a>
              </b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
