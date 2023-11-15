# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

## My process

### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- Formik
- Yup
- SCSS modules

### What I learned

1. Form Building with Formik:
   In the initial phase, I delved into various libraries to streamline the form-building process and manage input values effectively. The research led me to choose Formik, a powerful library. Throughout the project, I gained insights into accessing stored input values in Formik, implementing conditional rendering based on these values, and organizing the form into distinct steps. Additionally, I successfully developed two types of reusable Formik fields to enhance modularity.

2. Custom Toggle Button:
   For the specific requirements of this project, I explored pre-built toggle button solutions, experimenting with ReactSwitch. However, upon careful consideration, I opted to craft a custom toggle button tailored to the project's needs. This turned out to be an engaging task, even though there's room for improvement in the transition area of the custom-built button.

3. Validation with Yup:
   In this project, I encountered validation schemas for the first time and chose Yup for its compatibility with Formik. Leveraging Formik's special config option for Yup object schemas, known as validationSchema, proved to be an effective way to automatically transform Yup's validation errors into a well-organized object. This object neatly aligns its keys with the corresponding values and touched states.

4. Multistep Forms and Wizard Components:
   The project also involved incorporating the fundamentals of multistep forms and wizard components. This aspect broadened my understanding of creating user-friendly interfaces for step-by-step form completion, enhancing the overall user experience.

### Continued development

1. Improve the calculateSummary function;
2. Improve the toggle button (add transition).
3. Make the toggle button reusable for different functions.
