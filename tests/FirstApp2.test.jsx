// import { render, screen} from "@testing-library/react";
// import {App} from "../src/FirstApp.jsx";
//
// describe('Tests firstApp', () => {
//     const title = 'Hola soy goku'
//     const subtitle = 333;
//
//     // it('It will be match with snapshot', () => {
//     //     const {container} =render( <App title={title}/>)
//     //     expect(container).toMatchSnapshot();
//     // });
//
//     it('should show title in a h1', () => {
//
//         render( <App title={title}/>)
//         expect(screen.getByText(title)).toBeTruthy();
//         expect(screen.getByTestId('test-title').innerHTML).toContain(title);
//         expect(screen.getByRole('heading', { level: 1}).innerHTML).toContain(title);
//     });
//
//     it('should demostrate subtitle by props', () => {
//         render( <App title={title} subtitle={subtitle}/>)
//         expect(screen.getAllByText(subtitle).length).toBe(2);
//     });
// });