
interface Props{
    currentUser: string
}

function HelloWorld({currentUser }: Props) {

  

    return (
        <>
            <h1>Hello {currentUser}!</h1>
            <h2>Welcome to the wonderful world of React.</h2>
        </>
    )
}

export default HelloWorld