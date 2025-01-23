
import { MDBInput } from 'mdb-react-ui-kit';


interface Props {
    children: string;

}
function LoginForm({ children }: Props) {

    return (
        <>
            <h2>{children}</h2>
            <MDBInput label="User Name" id="form1" type="text" />;
            <MDBInput label="Password" id="form1" type="text" />;
        </>
        
    );
}

export default LoginForm;