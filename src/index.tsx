import * as React from 'react';

const NAVER_ID_SDK_URL = 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js';
export interface NaverUser {
  email: string
  name: string
  id: string
  profile_image: string;
  age?: string
  birthday?: string
  gender?: string
  nickname?: string
}

interface IProps {
  clientId: string;
  callbackUrl: string;
  render: (props: any) => React.ComponentElement<any, any> | Element | JSX.Element;
  onSuccess: (result: NaverUser) => void;
  onFailure: () => void;
}


/**
 * 이 함수는 브라우저 환경에서만 호출이 되야 한다. window 객체에 직접 접근한다.
 * @param props 
 */
const initLoginButton = (props: IProps) => {
  if(!('browser' in process)) {
    return;
  }
  const { clientId, callbackUrl, onSuccess, onFailure } = props;
  const naver = window['naver'];

  const naverLogin = new naver.LoginWithNaverId(
    {
      callbackUrl,
      clientId,
      isPopup: true,
      loginButton: {color: "green", type: 3, height: 60},
    }
  );

  naverLogin.init();

  if (!window.opener) {
    naver.successCallback = (data: NaverUser) => onSuccess(data);
    naver.failureCallback = onFailure;
  } else {
    naverLogin.getLoginStatus((status: any) => {
      if (status) {
        window.opener.naver.successCallback(naverLogin.user);
      } else {
        window.opener.failureCallback();
      }
      window.close();
    })
  }
};

const appendNaverButton = () => {
  if (document && document.querySelectorAll('#naverIdLogin').length === 0) {
    const naverId = document.createElement('div');
    naverId.id = 'naverIdLogin';
    naverId.style.position =  'absolute';
    naverId.style.top = '-10000px';
    document.body.appendChild(naverId);
  }
}
const loadScript = (props: IProps) => {
  if (document && document.querySelectorAll('#naver-login-sdk').length === 0) {
    const script = document.createElement('script');
    script.id = 'naver-login-sdk';
    script.src = NAVER_ID_SDK_URL;
    script.onload = () => initLoginButton(props);
    document.head.appendChild(script);
  }
}

class LoginNaver extends React.Component<IProps> {
   componentDidMount() {
    if(!('browser' in process)) {
      return;
    }
    appendNaverButton();
    loadScript(this.props);
  }
    

  public render() {
    const { render } = this.props;
    return (
      render({ 
        onClick: () => { 
          if (!document || !(document as any).querySelector('#naverIdLogin').firstChild) return;
          const naverLoginButton: any = (document as any).querySelector('#naverIdLogin').firstChild;
          naverLoginButton.click();
        }
      })
    )
  }
}

export default LoginNaver;