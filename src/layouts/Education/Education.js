import WinkTitle from "../../components/WinkTitle/WinkTitle";
import $ from 'jquery';
import './time_line.css'
import {makeStyles} from "@material-ui/core";


$('ul#time-line li').each(function(){
    const stop = $(window).scrollTop() + $(window).height() / 1.2;
    const litop = $(this).offset().top;
    if (stop > litop){
        $(this).addClass('visibility');
    }
});
$(window).scroll(function(){
    $('ul#time-line li').each(function(){
        const stop = $(window).scrollTop() + $(window).height() / 1.2;
        const litop = $(this).offset().top;
        if (stop > litop){
            $(this).addClass('visibility');
        } else{
            $(this).removeClass('visibility');
        }
    });
});

const useStyles=makeStyles(()=>({
    dateSpan:{
        color: '#b4b3b3',
        fontSize:'17px',
    },
    positionSpan:{
        color: '#008000',
        fontSize:'20px',
    },
    placeSpan:{
        color: '#3d3b3b',
        fontSize:'20px',
    },
    spanContainer:{
        lineHeight:1.4,
    },
}));

const Education=()=>{
    const classes=useStyles();

    return(
        <div>
            <WinkTitle id={"education"} title={"Education"}/>
            <div className="body">
                <ul id="time-line">
                    <li>
                        <div>
                            <span className={classes.spanContainer}>
                                <span className={classes.dateSpan}>2019 - present</span><br/>
                                <span className={classes.positionSpan}>Bachelor of computer engineering</span><br/>
                                <span className={classes.placeSpan}>AmirKabir University of Technology</span>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className={classes.spanContainer}>
                                <span className={classes.dateSpan}>2016 - 2019</span><br/>
                                <span className={classes.positionSpan}>Diploma of mathematics science</span><br/>
                                <span className={classes.placeSpan}>Harati high school</span>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Education;