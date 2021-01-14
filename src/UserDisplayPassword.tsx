import React from 'react';
import { observer } from 'mobx-react';
import UserData from './observables/UserData';

export const UserDisplayPassword = observer(() => <>
    LOGIN: {UserData.formData.get('login')}
    <br />
PASSWORD:  {UserData.formData.get('password')}
</>);
