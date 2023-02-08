import { useState } from 'react';
import { Layout } from 'antd';
import 'antd/dist/reset.css'
import './App.css';
import Welcome from './scenes/Welcome';
import Login from './scenes/Login';
import Signup from './scenes/Signup';

function App() {
  const [user, setUser] = useState()
  const [isUser, setIsUser] = useState(true)
  return (
    <Layout>
      <Layout.Content style={{ padding: '48px' }}>
      {user 
        ? <Welcome user={user} />
        : isUser
          ? <Login setUser={setUser} setIsUser={setIsUser}/>
          : <Signup setUser={setUser} setIsUser={setIsUser}/>
      }
      </Layout.Content>
    </Layout>
  );
}

export default App;
