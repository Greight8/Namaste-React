import React from "react";
import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe('testing heading in our react component', () => {

//     test("testing wether heading in our contact component, renders on our DOM or not", () => {
//         // 1) render Contact component inside js-dom
//         render(<Contact />)

//         // 2) finding heading byRole() method
//         const heading = screen.getByRole("heading");

//         // 3) writing Assertion
//         expect(heading).toBeInTheDocument()
//     });
// })


// describe('testing button in our contact component', () => {

//     test("testing wether button in our contact component, renders on our DOM or not", () => {
//         // 1) render Contact component inside js-dom
//         render(<Contact />)

//         // 2) finding button byRole() method
//         const button = screen.getByRole("button");

//         // 3) writing Assertion
//         expect(button).toBeInTheDocument()
//     });

//     test("testing button through the text in our contact component, renders on our DOM or not", () => {
//         // 1) render Contact component inside js-dom
//         render(<Contact />)

//         // 2) finding button bytext() method
//         const button = screen.getByText("submit");

//         // 3) writing Assertion
//         expect(button).toBeInTheDocument()
//     });
// })


describe('testing our input boxes through ways in our contact component', () => {

    it("testing to find input name through placeholder in our contact componant, which renders on our DOM or not", () => {

        // 1) render Contact component inside js-dom
        render(<Contact />)

        // 2) finding button byRole() method
        const inputName = screen.getByPlaceholderText("name");

        // 4) writing Assertion
        expect(inputName).toBeInTheDocument()
    });

    it("testing wether we have 2 input boxes in our contact componant, which renders on our DOM or not", () => {

        // 1) render Contact component inside js-dom
        render(<Contact />)

        // 2) finding input AllbyRole() method this will give error
        // const inputBoxes = screen.getAllByRole("input");

        // 3) have to find input AllbyRole() method using textbox
        const inputBoxes = screen.getAllByRole("textbox");
        // console.log(inputBoxes);


        // 3.1) we cannot use getByRole bec we have multiple textbox , this will give error
        // const inputBoxes = screen.getByRole("textbox");


        // 4) writing Assertion like this will not work bec inputBoxes is an array
        // expect(inputBoxes).toBeInTheDocument()

        // 5) have to write assertion like this bec inputBoxes is an array
        // expect(inputBoxes[0]).toBeInTheDocument()
        expect(inputBoxes[1]).toBeInTheDocument()
    });

    it("testing  we have 2 input boxes using length in our contact componant, which renders on our DOM or not", () => {

        // 1) render Contact component inside js-dom
        render(<Contact />)

        // 3) have to find input AllbyRole() method using textbox
        const inputBoxes = screen.getAllByRole("textbox");

        // console.log(inputBoxes);


        // 5) assertion using length of inputBoxes bec, it is ana array
        // expect(inputBoxes.length).toBe(2)
        expect(inputBoxes.length).not.toBe(3)
    });
})