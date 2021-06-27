import { props } from "bluebird";
import PropTypes from 'prop-types'
import { exp } from "prelude-ls";
import { useState } from "react";

const PropsDemo = () => {
  const [color, setColor] = useState("white");
  const [backgroundColor, setBackgroundColor] = useState("purple");
  const [borderRadius, setBorderRadius] = useState("5px");
  const [borderStyle, setBorderStyle] = useState("dashed");
  const [display, setDisplay] = useState("inline-block");
  const [width, setWidth] = useState("350px");
  const [textAlign, setTextAlign] = useState("center");

  let styles = {
    color: color,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    display: display,
    width: width,
    textAlign: textAlign,
  };

  const toggleColor = () => {
    color === "white" ? setColor("pink") : setColor("white");
  };
  const toggleBackgroundColor = () => {
    backgroundColor === "purple"
      ? setBackgroundColor("black")
      : setBackgroundColor("purple");
  };
  const toggleBorderRadius = () => {
    borderRadius === "5px" ? setBorderRadius("20px") : setBorderRadius("5px");
  };
  const toggleBorderStyle = () => {
    borderStyle == "dashed"
      ? setBorderStyle("double")
      : setBorderStyle("dashed");
  };

  return (
    <div className="main">
      <div className="mainDiv">
        <div style={styles}>
          <FunctionalComponent
            string="will this display?"
            function={toggleColor} 
            selectedStyle={color}
          />
          <FunctionalComponent
            string="I hope I understand all of this!"
            function={toggleBackgroundColor} 
            selectedStyle={backgroundColor}
          />
          <FunctionalComponent
            string="I seriously need a nap."
            function={toggleBorderRadius}
            selectedStyle={borderRadius}
          />
          <FunctionalComponent
            string="I can do this sort of thing all night . . . but why?!"
            function={toggleBorderStyle}
            selectedStyle={borderStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default PropsDemo;

const FunctionalComponent = (props) => {
  return (
    <div>
      <p>{props.string}</p>
      <button onClick={props.function}>Press Me!</button>
      <TinyComponent selectedStyle={props.selectedStyle} />
    </div>
  );
};

const TinyComponent = (props) => {
    return (
        <div>
            <p>The current style is : {props.selectedStyle}</p>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    string: 'This is wild!',
    function: () => console.log('Can I see this in my dev tools?'),
    selectedStyle: 'what style??'
}

FunctionalComponent.propTypes = {
    string: PropTypes.string.isRequired,
    function: PropTypes.func.isRequired,
    selectedStyle: PropTypes.string.isRequired
}