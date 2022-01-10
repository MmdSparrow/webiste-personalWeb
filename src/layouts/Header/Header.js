import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';      //contact mail
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';  //download
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined'; 	                //course
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';                //education
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';      //work
import '../../fonts/Fonts.css'



const sxStyles={
    bottomNavigation:{
        position: 'relative',
        display:"flex",
        // justifyContent: 'space-evenly',
        width: '30em',
        backgroundColor: 'transparent',

    },
    bottomNavigationAction:{
        color: "#efeaea",
        fontFamily: "roboto",
        fontSize:"30px",
        '&:hover': {
            transform: "scale(1.15)",
        },
        '&.MuiBottomNavigationAction-root.Mui-selected':{
            transform: "scale(1.15)",
            color: '#000000'
        }
    }
};

// eslint-disable-next-line no-undef
// $(document).ready(function() {
//
//     // eslint-disable-next-line no-undef
//     var scrollLink = $('.scroll');
//
//     // Smooth scrolling
//     scrollLink.click(function (e) {
//         e.preventDefault();
//         // eslint-disable-next-line no-undef
//         $('body,html').animate({
//             // eslint-disable-next-line no-undef
//             scrollTop: $(this.hash).offset().top
//         }, 1000);
//     });
// });

const HeaderNavbar=()=> {

    const [value, setValue] = React.useState('');
    const handleChange = (event, newValue) => {
        setValue(newValue);

        console.log("size..........................................")
        console.log(document.querySelectorAll(".bna[href='#education']").length)
        console.log("size..........................................")
        // myRef=rea
        // scroll()
        document.querySelectorAll(".bna[href='#education']")[0].scrollIntoView({
            behavior: 'smooth'
        });

    };



    return (
        <BottomNavigation sx={sxStyles.bottomNavigation} value={value} onChange={handleChange}>
            <BottomNavigationAction
                className={"bna"}
                sx={sxStyles.bottomNavigationAction}
                label="experience"
                value="experience"
                icon={<WorkOutlineOutlinedIcon />}
                // href={"#experience"}

            />
            <BottomNavigationAction
                className={"bna"}
                sx={sxStyles.bottomNavigationAction}
                label="education"
                value="education"
                icon={<SchoolOutlinedIcon />}
                href="#education"
            />
            <BottomNavigationAction
                className={"bna"}
                sx={sxStyles.bottomNavigationAction}
                label="courses"
                value="courses"
                icon={<ClassOutlinedIcon />}
                href={"#courses"}
            />
            <BottomNavigationAction
                className={"bna"}
                sx={sxStyles.bottomNavigationAction}
                label="contact"
                value="contact"
                icon={<ContactMailOutlinedIcon />}
                href={"#contact"}
            />
            <BottomNavigationAction
                className={"bna"}
                sx={sxStyles.bottomNavigationAction}
                label="download"
                value="download"
                icon={<CloudDownloadOutlinedIcon />}
            />
        </BottomNavigation>
    );
}
export default HeaderNavbar;