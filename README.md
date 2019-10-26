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
    onSuccess={(result) => console.log(result)}
    onFailure={(result) => console.error(result)}
  />,
  document.getElementById('root')
);
```

## onSuccess / onFailure callback
---

If responseType is not 'code', callback will return the NaverAuth object.

If responseType is 'code', callback will return the offline token for use on your server.

You can also access the returned values via the following properties on the returned object.

| property name |  value   |             definition               |
|:-------------:|:--------:|:------------------------------------:|
|   email       |  string  |           Naver user email           |
|   id          |  string  |              Naver User ID           |
|   name        |  string  |            user name                 |
| profile_image |  string  |        Naver profile image           |
|               | Optional |                                      |
|     age       |  string  |               User Age               |
|   birthday    |  string  |           User Birthday              |
|     gender    |  string  |             User Gender              |
|   nickname    |  string  |             User Nickname              |

### onFailure callback

onFailure callback is called when either initialization or a signin attempt fails.

| property name |  value   |             definition               |
|:-------------:|:--------:|:------------------------------------:|
|   error       |  string  |           Error code                 |
|   details     |  string  |      Detailed error description      |


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
$ open http://127.0.0.1, not http://localhost:3000
```