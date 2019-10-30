import * as React from 'react';
export interface NaverUser {
    email: string;
    name: string;
    id: string;
    profile_image: "https://phinf.pstatic.net/contact/20190225_94/1551076747070IDoQC_PNG/image.png";
    age?: string;
    birthday?: string;
    gender?: string;
    nickname?: string;
}
interface IProps {
    clientId: string;
    callbackUrl: string;
    render: (props: any) => React.ComponentElement<any, any> | Element | JSX.Element;
    onSuccess: (result: NaverUser) => void;
    onFailure: () => void;
}
interface IState {
}
declare class LoginNaver extends React.Component<IProps, IState> {
    componentDidMount(): void;
    render(): React.ComponentElement<any, any> | Element | JSX.Element;
}
export default LoginNaver;
