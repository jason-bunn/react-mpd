
import { MDBBtn } from 'mdb-react-ui-kit';
interface Props {
    children: string[];
    onClick: () => void;
}

function Button({ children, onClick }: Props) {
    return (
        <>
            <MDBBtn type="button" className="me-1" onClick={onClick}>{children}</MDBBtn>
        </>
    )
}

export default Button;