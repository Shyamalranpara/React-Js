import React from "react";

export const ParentComponent = () => {
  return (
    <>
      <h1>Hello React Component 1</h1>
      <ChildComponents data="react_js" />
    </>
  );
};

const ChildComponents = (props) => {
  return (
    <>
      <h1>Component 2</h1>
      <Grandchildcomponets data={props.data} />
    </>
  );
};

const Grandchildcomponets = (props) => {
  return (
    <>
      <h1>Component 3</h1>
      <Grandgrandchildcomponets data={props.data} />
    </>
  );
};

const Grandgrandchildcomponets = (props) => {
  return (
    <>
      <h1>Component 4: {props.data}</h1>
    </>
  );
};

