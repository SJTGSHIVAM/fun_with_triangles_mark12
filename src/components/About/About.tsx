import "./About.css";
const About = () => {
  return (
    <div className="main-sec">
      <header className="myHead">
        <h1>Fun with Triangles</h1>
      </header>
      <section className="aboutpage mypadding">
        <div className="row">
          <h1>Description</h1>
          <p>
            {" "}
            This is a bundle of web apps combines can calculate the area of the
            triangle, check whether 3 lengths of side or 3 different angles can
            form a triangle or not, and contains a fun quiz to check your
            knowledge on triangles. Built using ReactJS.
          </p>
        </div>
        <div className="row">
          <h2>Github Link :</h2>
          <p>
            <a href="https://github.com/SJTGSHIVAM/fun_with_triangles_mark12">
              Click here
            </a>
          </p>
        </div>
        <div className="row mylist">
          <h2>Salient features are:</h2>
          <ol>
            <li>Built using ReactJS</li>
            <li>Made a quiz on triangles </li>
            <li>Random questions from existing questionbank</li>
            <li>Let user know his/her score</li>

            <li>An app to calculate Hypotenuse of a right angled triangle</li>
            <li>An app to calculate area of triangle</li>
            <li>
              An app to check weather given angles can form a triangle or not
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};
export default About;
