import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

// Components
import Button from '../components/Buttons/Button/Button';
import Buttons from '../components/Buttons/Buttons';
import Copy from '../components/Copy/Copy';
import Screen from '../components/Display/Screen';
import Logo from '../components/Logo/Logo';
import App from '../App';
import SYMBOLS from '../models/symbolKeys';

let storeModel = {
    calculator: {
        result: '0',
        screen: '12+',
        lastType: 'Action',
        keyHistory: '12+',
        lastKey: '+'
    }
}

// Redux mock store
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

// // Smoke bomb tests

// Tests 
// Button test
describe('Button component should render without crashing', () => {

    let store = mockStore(storeModel);

    store.dispatch = jest.fn();

    let component = renderer.create(
        <Provider store={store}>
            <Button type={'Display'} btn={'8'} operatorStyle={'btn--operator'} />
        </Provider>
    );

    it('should render with given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
    it('should dispatch an action on button click', () => {
    })
});

// Tests
// Screen component
describe('Screen component should render without crashing', () => {
    let store = mockStore(storeModel);

    let component = renderer.create(
        <Provider store={store}>
            <Screen />
        </Provider>
    );
    it('should render with given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {

    })

});

describe('Buttons component should render without crashing', () => {
    let store = mockStore(storeModel);

    let component = renderer.create(
        <Provider store={store}>
            <Buttons symbols={SYMBOLS} />
        </Provider>
    );
    it('should render with given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

    it('should dispatch an action on button click', () => {
    });
});


it('Copy component should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Copy />, div);
});

it('Logo component should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
});


describe('App should render al components without crasing', () => {
    let store = mockStore(storeModel);

    let component = renderer.create(
        <Provider store={store}>
            <App />
        </Provider>
    );

    it('should render with given state from redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });
})