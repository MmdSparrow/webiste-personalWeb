import './App.css';
import CustomTextArea from "./components/Input/TextArea";
import CustomTextField from "./components/Input/TextField";
import MainPage from "./pages/PersonalWebsite";
import CustomForm from "./components/EmailForm/Form";


function App() {
  return (

      <MainPage/>

      // test
      // <div>
      //   <MultilineTextFields isValid={true}/>
      //   <CustomTextField isValid={true} label={"message"}/>
      // </div>

      // <div style={{width:600, height:600}}>
      //   <CustomForm/>
      // </div>

      // <Customscroll/>
      // <div>
      //     <div>
      //         <CustomTextField isValid={true} label="name"/>
      //     </div>
      //     <p>
      //         test.........................test
      //     </p>
      //     <div>
      //         <CustomTextField isValid={false} label="name" message="invaliddddddddddddd........"/>
      //     </div>
      //     <p>
      //         test.........................test
      //     </p>
      //     <div>
      //         <VerticalTabs/>
      //     </div>
      //     <p>
      //         test.........................test
      //     </p>
      //     <div>
      //         <LoadingButtonsTransition/>
      //     </div>
      // </div>
  );
}

export default App;
