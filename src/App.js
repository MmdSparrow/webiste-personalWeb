import './App.css';
import CustomTextField from "./components/Input/TextField";
import CustomButton from "./components/Button/Button";
import LoadingButtonsTransition from "./components/Input/material";
import VerticalTabs from "./components/Tab/Tab";
import LabelBottomNavigation from "./layouts/Header/Header";
import DemoAutoPlay from "./components/Swipeable/SwipeableViews";
import Body from "./index/main";


function App() {
  return (

      <Body/>
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
