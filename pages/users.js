import Link from "next/link";
import { useEffect, useState } from "react";
import MainContainer from "../components/MainContainer";

// const Users = () => {
    // const [users, setUsers] = useState([
    //     {id: 1, name: 'Петя'},
    //     {id: 2, name: 'Вася'},
    // ]);

    // useEffect(async () => {
    //     const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //     const data = await response.json()
    //     setUsers(data)
    // }, [])
const Users = ({users}) => {

    return (
        <MainContainer keywords={"users page"}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <Link href={`/users/${user.id}`}>
                        <li key={user.id}>
                            <a >{user.name}</a>
                        </li>
                    </Link>

                    )}
            </ul>
        </MainContainer>
    )
}

export default Users;


export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()

    return {
      props: {users}, // will be passed to the page component as props
    }
  };