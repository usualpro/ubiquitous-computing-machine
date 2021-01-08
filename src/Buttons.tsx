import React from 'react';
import CountStore from './observables/Count';
const Buttons = (): JSX.Element => {
    interface btnType {
        testid: string;
        label: string;
        method: () => void;
    }
    const btns: btnType[] = [
        {
            testid: 'in',
            label: '+',
            method: () => CountStore.increment()
        },
        {
            testid: 'de',
            label: '-',
            method: () => CountStore.decrement()
        }
    ];

    return <>
        {
            btns.map(
                (btn, index) => <button
                    key={index}
                    data-testid={`${btn.testid}crement-btn`}
                    onClick={btn.method}>
                    {btn.label}
                </button>
            )
        }
    </>;
};
export default Buttons;
