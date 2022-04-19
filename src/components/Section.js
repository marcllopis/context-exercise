import Final from "./Final";

const Section = (props) => (
  <>
    <h2>This is Section.js</h2>
    <p>
      This component is also doing nothing really special. It has the same
      purpose, to receive props and pass props down to the child component!
    </p>
    <hr />
    <Final age={props.age} name={props.name} getOld={props.getOld} />
  </>
);

export default Section;
