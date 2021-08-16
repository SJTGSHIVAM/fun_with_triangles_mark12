import "./About.css";
const About = () => {
  return (
    <div className="bcard mid-section main-sec about">
      <header className="head">
        <h1>Fun with Triangles</h1>
      </header>
      <section className="about">
        <h1 id="description">Description</h1>
        <p>
          This is a bundle of web apps combines can calculate the area of the
          triangle, check whether 3 lengths of side or 3 different angles can
          form a triangle or not, and contains a fun quiz to check your
          knowledge on triangles. Built using ReactJS.
        </p>
        <h1 id="live-link-">Github Link :</h1>
        <p>
          <a href="https://github.com/SJTGSHIVAM/fun_with_triangles_mark12">
            https://github.com/SJTGSHIVAM/fun_with_triangles_mark12
          </a>
        </p>
        <h1 id="salient-features-are-">Salient features are:</h1>
        <ul>
          <li>Built using ReactJS</li>
          <li>Made a quiz on triangles </li>
          <li>Random questions from existing questionbank</li>
          <li>Let user know his/her score</li>

          <li>An app to calculate Hypotenuse of a right angled triangle</li>
          <li>An app to calculate area of triangle</li>
          <li>
            An app to check weather given angles can form a triangle or not
          </li>
        </ul>
      </section>
    </div>
  );
};
export default About;
