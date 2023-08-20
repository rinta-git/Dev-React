import {Component} from "react";
import Supporters from "./Supporters";
import SupportersClass from "./SupportersClass";

class AboutUs extends Component{
  constructor(props){
    super(props);
    console.log('Parent constructor')
  }
  componentDidMount(){
    console.log('Parent didMount')
  }
  render(){
    console.log('Parent render')
    return (
      <>
       <h1>Hello</h1>
       <p>You are in About Us page :)</p>
       <SupportersClass
        name={"First"}
        role={"SDE1"}
        location={"Bangalore"}
      />
      <SupportersClass
        name={"Second"}
        role={"SDE1"}
        location={"Bangalore"}
      />
    </>
    )
  }
}

// const AboutUs = () => {
//   return (
//     <>
//       <h1>Hello</h1>
//       <p>You are in About Us page :)</p>
//       <Supporters name={"Rinta Roy"} role={"SDE2"} location={"Chennai"} />
//       <SupportersClass
//         name={"Nithin K S"}
//         role={"SDE1"}
//         location={"Bangalore"}
//       />
//     </>
//   );
// };

export default AboutUs;
