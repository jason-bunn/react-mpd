
import { MDBInput } from 'mdb-react-ui-kit';
import Button from "./Button";

interface Props {
    children: string;
    onClick: () => void;
}
function LoginForm({ children, onClick }: Props) {

    return (
        <>
            <h2>{children}</h2>
            <MDBInput label="User Name" id="form1" type="text" />;
            <MDBInput label="Password" id="form1" type="text" />;
            <Button onClick={onClick}>Login {children}</Button>
        </>
        
    );
}

export default LoginForm;