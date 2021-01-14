import React, { useRef } from 'react';
import UserDataStore from './observables/UserData';
import { UserDisplayPassword } from './UserDisplayPassword';
import UserDisplayPaswordClass from './UserDisplayPaswordClass';

const Application = (): JSX.Element => {
    const form = useRef(null);
    const onChange = (e: any) => {
        const formData = new FormData((form.current as any));
        UserDataStore.setFormData(formData);
        console.log(UserDataStore.formData);
    };

    return <>
        <form ref={form} onChange={onChange}>
            <input type="text" placeholder='login' name='login' />
            <input type="password" placeholder='password' name='password' />
        </form>
        <UserDisplayPassword />
        <UserDisplayPaswordClass />
    </>;
};
export default Application;
