type HelloProps =  {
    name: string;
    message: string;
    isActive?: boolean;
}

function Hello(props: HelloProps) {
    const { name , message, isActive} = props;
    return <div>
        <h1>{message +" "+ name}</h1>
        <p> your account is {isActive?"Active": "Inactive"}</p>
    </div>
}

export default Hello;