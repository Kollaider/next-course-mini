import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer";
import styles from "../../styles/user.module.scss";


// export default function User() {
export default function User({user}) {

    // const router = useRouter()
    // console.log(router)
    const {query} = useRouter();

    return (
        <MainContainer keywords={user.name}>
            <div className={styles.user}>
                <h1>Пользователь c id {query.id}</h1>
                <div>Имя пользователя - {user.name}</div>
            </div>
        </MainContainer>
    )
};


  export async function getServerSideProps({params}) {
    console.log(params.id)
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const user = await response.json()
    console.log(user)
    return {
      props: {user}, // will be passed to the page component as props
    }
  }