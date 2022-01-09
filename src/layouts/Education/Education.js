import {makeStyles} from "@material-ui/core";
import WinkTitle from "../../components/WinkTitle/WinkTitle";
import $ from 'jquery';
import './time_line.css'


const useStyles=makeStyles(()=>({

}));

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
        // var stop2 =$(window).scrollTop() + $(window).height()*1.2;
        const litop = $(this).offset().top;
        if (stop > litop){
            $(this).addClass('visibility');
        } else{
            $(this).removeClass('visibility');
        }
    });
});


const Education=()=>{
    const classes=useStyles();
    return(
        <div>
            <WinkTitle title={"Education"}/>
            <div className="body">
                <ul id="time-line">
                    <li>
                        <div>
                            <span className="font-text"><span>2019 - present</span><br/><span>Bachelor of computer engineering</span><br/><span>AmirKabir University of Technology</span></span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span
                                className="font-text"><span>2016 - 2019</span><br/><span>Diploma of mathematics science</span><br/><span>Harati high school</span></span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Education;