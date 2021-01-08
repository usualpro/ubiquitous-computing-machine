import React from 'react';
import { observer } from 'mobx-react';
import CountStore from './observables/Count';

export const DisplayCount = observer((): JSX.Element => <div>{CountStore.currentCount}</div>);
