import Header from "../components/Header";
import Signup from "../components/Register";

export default function SignupPage(){
    return (
        <>
            <Header
                heading="Signup to create an account"
                paragraph="Already have an account? "
                linkName="Login"
                linkUrl="/"
            />
            <Signup/>
        </>
    )
}