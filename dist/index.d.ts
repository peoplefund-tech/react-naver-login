import * as React from 'react';
interface IProps {
    clientId: string;
    callbackUrl: string;
    render: (props: any) => React.ComponentElement<any, any> | Element | JSX.Element;
    onSuccess: (result: any) => void;
    onFailure: (result: any) => void;
}
interface IState {
}
declare class LoginNaver extends React.Component<IProps, IState> {
    constructor(props: IProps);
    componentDidMount(): void;
    render(): React.ComponentElement<any, any> | Element | JSX.Element;
}
export default LoginNaver;
