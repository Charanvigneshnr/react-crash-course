import { ChildComponent } from "./ChildComponent";

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert("Hello Parent ${props.childName}");
  };
  return <ChildComponent greetHandler={greetParent} />;
};
