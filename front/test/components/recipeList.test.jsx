import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

let componentProps;

jest.mock('redux-connect-decorator', () => (matchPropsToState) => {
    const store = {
        receptList: [{id: "first", name:"recipe"}]
    };
    componentProps = matchPropsToState(store);
    return () => {};
});

import ReceptList from '../../containers/ReceptList';


describe('blabla', () => {

    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('should render', () => {

        expect(true).toBeTruthy();

        act(() => {
            ReactDOM.render(<ReceptList {...componentProps}/>, container);
        });

        console.log(container.innerHTML);
    });

});