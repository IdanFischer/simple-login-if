import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { Form, Button, Input } from "antd"

const firebaseConfig = {
  apiKey: "AIzaSyCT49fTgteRcw-vifnTotEh9w8_NaN_c5s",
  authDomain: "simple-login-if.firebaseapp.com",
  projectId: "simple-login-if",
  storageBucket: "simple-login-if.appspot.com",
  messagingSenderId: "439899236558",
  appId: "1:439899236558:web:789e6055053e0922ce889f"
};

export default function Login({ setUser, setIsUser }) {
  const loginWithGoogle = async () => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const _user = await signInWithPopup(auth, provider)
      .catch(alert)
    setUser(_user.user)
  }
  const handleSumbit = async ({ email, password }) => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const _user = await signInWithEmailAndPassword(auth, email, password)
      .catch(alert)
    setUser(_user.user)
  }
  return (
    <section>
      <h1>Login</h1>
      <Form onFinish={handleSumbit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
        <Form.Item label="Email" name="email">
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
      <Button type="primary" onClick={loginWithGoogle}>Login with Google</Button>
      <p>Not a User? <Button type="primary" onClick={() => setIsUser(false)}>Sign Up</Button></p>
    </section>
  )
}