import React from 'react';
import './App.css';
import NaverLogin from 'react-naver-login';

function App() {

  const buttonStyle = {
    backgroundColor: '#20c997',
    width: '140px',
    height: '32px',
    padding: '16px',
    margin: '100px auto',
    fontSize: '24px',
    fontWeight: 600,
    color: 'white',
    textAlign: 'center',
    cursor: 'pointer',
    border: '1px solid #dee2e6',
    borderRadius: '4px',
  }

  return (
    <div className="App">
      <NaverLogin 
        clientId="VFtyErnFdMS45iISw0Fy"
        callbackUrl="http://127.0.0.1:3000/login"
        render={(props) => <div style={buttonStyle} onClick={props.onClick}>Naver Login</div>}
        onSuccess={(result) => console.log(result)}
        onFailure={(result) => console.error(result)}
      />
    </div>
  );
}

export default App;
