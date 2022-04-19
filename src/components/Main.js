import Section from "./Section";

const Main = () => (
  <>
    <h2>This is Main.js</h2>
    <p>
      This component is doing some cool stuff, but nothing with props. It's only
      mission is to receive props from App.js and pass them down to it's child
      component
    </p>
    <hr />
    <Section />
  </>
);

export default Main;
