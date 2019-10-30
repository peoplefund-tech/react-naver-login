# React Naver Login

> A Naver oAuth Log-in Component for React


## Install
```
npm install react-naver-login
```
## How to use
---

### copy your application's client ID and Callback URL.
If you have not yet registered your application, you must go to A and register your application.
> testing on local environment, use not http://localhost:3000 but http://127.0.0.1:3000


```js
import React from 'react';
import ReactDOM from 'react-dom';
import NaverLogin from 'react-naver-login';

ReactDOM.render(
  <NaverLogin 
    clientId="sdffdNNFDSjsddiosd"
    callbackUrl="http://127.0.0.1:3000/login"
    render={(props) => <div onClick={props.onClick}>Naver Login</div>}
    onSuccess={(naverUser) => console.log(naverUser)}
    onFailure={() => console.error(result)}
  />,
  document.getElementById('root')
);
```

## onSuccess / onFailure callback
---

if response is success, it will call the onSuccess with naver user object.
or not, it will call the onFailure and return nothing.

You can also access the returned values via the following properties on the returned object.

### Required 
| property name |  value   |             definition               |     sample      |
|:-------------:|:--------:|:------------------------------------:|:---------------:|
|   email       |  string  |           Naver user email           | "abc@gmail.com" |
|   id          |  string  |              Naver User ID           |   "371972918"   |
|   name        |  string  |            user name                 |      "홍길동"     |
| profile_image |  string  |        Naver profile image           |"http://img.na.."|  

### Optional
| property name |        value         |             definition               |     sample      |
|:-------------:|:--------------------:|:------------------------------------:|:---------------:|
|     age       |  string / undefined  |               User Age               |     "20-29"     |
|   birthday    |  string / undefined  |           User Birthday              |     "05-14"     |
|     gender    |  string / undefined  |             User Gender              |       "M"       |
|   nickname    |  string / undefined  |             User Nickname            |    "tmmoond8"   |

## Run on your machine
---
### Prerequistes
- Node.js v8^
- npm

## Installation
---
**1. Clone the project**
```
$ git clone https://github.com/peoplefund-tech/react-naver-login.git
```
**2. Install packages from npm**
```
$ cd react-naver-login 
$ npm i
```

**3. Build packages**
```
$ npm run build
# then, create dist directory that contains modules
```
**4. Demo run**
```
$ cd demo
$ npm i
$ npm run start
$ open http://127.0.0.1:3000, not http://localhost:3000
```