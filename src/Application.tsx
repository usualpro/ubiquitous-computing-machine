import React from 'react';
import CurrentTime from './methods/getTime';

import { DisplayCount } from './CountDisplay';
import Buttons from './Buttons';

const Application = (): JSX.Element => {
    return <>
        <h2>{`Hello World at ${CurrentTime}!`}</h2>
        <DisplayCount />
        <Buttons />
    </>;
};
export default Application;
