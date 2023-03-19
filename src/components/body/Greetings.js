import {alertTitleClasses} from "@mui/material";
import {hasFormSubmit} from "@testing-library/user-event/dist/utils";

export default function Greetings(props){
    return(
        <>
            <h1>Assalam o Alikum {props.username}</h1>
        </>

    )
}
