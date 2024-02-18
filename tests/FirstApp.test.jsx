// import { render} from "@testing-library/react";
// import {App} from "../src/FirstApp.jsx";
//
// describe('Tests firstApp', () => {
//     // it('It will be match with snapshot', () => {
//     //     const title = 'Hola soy goku'
//     //     const {container} =render( <App title={title}/>)
//     //     expect(container).toMatchSnapshot();
//     // });
//
//     it('should show title in a h1', () => {
//         const title = 'Hola soy goku'
//         const {container, getByText, getByTestId} =render( <App title={title}/>)
//         expect(getByText(title)).toBeTruthy();
//         expect(getByTestId('test-title').innerHTML).toContain(title)
//         // const h1 = container.querySelector('h1');
//         // expect(h1.innerHTML).toContain(title);
//     });
//
//     it('should demostrate subtitle by props', () => {
//         const title = 'Hola soy goku';
//         const subtitle = 333;
//         const { getAllByText} =render( <App title={title} subtitle={subtitle}/>)
//         expect(getAllByText(subtitle).length).toBe(2);
//     });
// });