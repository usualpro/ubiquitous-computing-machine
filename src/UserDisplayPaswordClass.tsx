import React from 'react';
import { Observer } from 'mobx-react';
import UserData from './observables/UserData';

export default class UserDisplayPaswordClass extends React.Component {
    render = () => <Observer>
        {
            () => <>
                LOGIN: {UserData.formData.get('login')}
                <br />
                PASSWORD:  {UserData.formData.get('password')}
            </>
        }
    </Observer>
};
