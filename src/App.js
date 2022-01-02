import './App.css';
import AAbasicTextField from "./components/Input/TextField";
// import StateTextFields from "./components/Input/TextArea";

function App() {
  return (
      // <div>
      //   {/*<errorTextField lable="name" errorMessage="invalid................." />*/}
      //   {/*<textField lable="name" />*/}
      //
      // </div>
      //
      // <div>
      //   {/*<textFieldd isValid={true} lable="testttttttt"/>*/}
      //
      // </div>
      // <div>
      //   <basicTextField/>
      // </div>
      // basicTextField()


      <div>
         {/*<AbasicTextField isValid={true} label="name"/>*/}
         <AAbasicTextField isValid={true} label="name"/>
         {/*<AbasicTextField isValid={false} label="name" message="invalid entity."/>*/}
      </div>

      // <div>
      //     <StateTextFields/>
      // </div>

  );
}

export default App;
