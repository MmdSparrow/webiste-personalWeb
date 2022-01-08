import CustomForm from "../../components/EmailForm/Form";

const sxStyles={
    bottomNavigation:{
        position: 'relative',
        justifyContent: 'start',
        width: '40em',
        backgroundColor: 'transparent',
    },
    bottomNavigationAction:{
        color: "#efeaea",
        '&:hover': {
            transform: "scale(1.15)",
        },
        '&.MuiBottomNavigationAction-root.Mui-selected':{
            transform: "scale(1.15)",
            color: '#000000'
        }
    }
};

const Contact=()=>{
    return(
        <div>
            <h2>

            </h2>
            <CustomForm/>
        </div>
    );
}
export default Contact;