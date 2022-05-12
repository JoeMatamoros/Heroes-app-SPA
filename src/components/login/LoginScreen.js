import { useNavigate } from 'react-router-dom';

export const LoginScreen = () => {
  const navigate = useNavigate();
  const handleLogin = () =>{
    //console.log('function login has been activate');
    navigate('/marvel',{
      replace: true
    });
  }
    return (
      <div className="container mt-5">
          <h1>Login Screen</h1>
          <hr/>

          <button
           onClick={handleLogin}
           className="btn btn-primary"
           >
             Login
            </button>
      </div>
    )
  }
  