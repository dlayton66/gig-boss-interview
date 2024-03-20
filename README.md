# Overview

This coding challenge is aimed at our future implementations of our app's "Books" page.  Currently users can keep track of their income for the year, the overall income, and each individual band's income. Our future implementations will include a more thorough record of all of the above, with the addition of keeping track of individual musician income, Tracking 1099 (those who earn more than $600 from your bands), as well as an EXPORT option where all income information can be printed in a format that's easy to use for tax purposes. 

We've provided you with instructions and income data that you will use for the challenge, as well as design examples to assist you. Our MVP, or Minimum Viable Product, is the completion of Iteration 2, and we really hope you can complete through Iteration 2! Iteration 3 is extra but encouraged if you have the time.

# Coding Challenge Instructions

## Context

You are the leader of 3 bands, and it's time to do taxes for the year — ugh, sucks right?! 🙃 \
Thankfully, you're working on an app that would make tax season a whole lot easier for musicians like you!

\
Each band has 4 members total (3 including you).
- For Band 1, you have paid each member over $600 total in the past year.
- For Band 2, you have paid each member under $600 in the past year.
- For Band 3, you have paid 2 members >= $600 and the other 2 members less than $600 in the past year.

\
Create an interactive app that displays:
- How much you have made personally over the past year
- How much each individual band has made
- How much total all the bands have made (all 3 bands added together)
- How much each individual member has made (within each band)
- Sort ppl who made >= $600 and < $600
- Total amount of $ you paid to ppl who made >= $600
- Total amount of $ you paid to ppl who made < $600
- Search for a person’s name and see how much you paid them (or dropdown menu)

## Resources:

*Income Data 2023-24.csv* has been uploaded in this repo, please reference it for all the data we want you to include in this challenge. You can simply hardcode the values in your code, but feel free to create your own backend/api if you wish to go the extra mile.
\
[Here is the link](https://www.figma.com/file/9qH3jQrBrNppwJjSgnoGUP/GB-Coding-Challenge?type=design&node-id=0%3A1&mode=design&t=wlM8zlV3ihzc8ZNB-1) to the Figma designs we've created as examples of what you could create. Individual examples are also shown in this README for each iteration.

## Iteration 0

UI Setup - This is a BASIC template of how to setup the UI.  This is not a strict template, so feel free to use your own design ideas! We are looking for functionality over beauty, but with a lot of UI changes on the horizon for Gig Boss, A catchy design is a Plus!

\
Details:
- Notice there is a "Total Income for 2023-2024" for all bands at the top.
- The "Income By Band" will be a drop down menu, where you can choose which band info you'll see.
- Then there are Two Buttons, "Income By Musician" is aimed at showing all individuals income, and "Export Data" is the last iteration of the project. Push this button and all information will be exported to a sheet with all the numbers for taxes.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%200_Example.png' width='400' />

## Iteration 1

This illustrates the "Income By Band" pulldown menu, as well as the information necessary in the "Render Area." These include:
 - Total Band Income
 - A breakdown of all members of the band's income. 
 - When you switch from band to band the information in this window will change to match the band's income.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%201_Example.png' width='400' />

## Iteration 2 (MVP - Minimum Viable Product)

This illustrates the first button, "Income By Musician"  With a click of this button the "Render Area" should show: 

- A search input (keyword search)
- A dropdown input with two options >= $600 and < $600. 
- And below a list of ALL (unfiltered) employees.  
- The search input allows users to search for a direct name
- The pulldown separates members who've earn more than or equal to, or less then $600. 

 Ideally, when the members are unfiltered there will be some visual cue to those members who have made more than $600.  This is shown with a green highlight in the example.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%202_Example.png' width='400' />

## Iteration 3

This step is the final step.  Here we will press "Export Data" and ALL of the important information should be exported to a useful tax page.  It should include:

- Total All Bands Income
- Total $ Each Member Made
- Total $ You Paid Out To Members Who Made >= $600
- Total $ You Paid Out To Members Who Made < $600
- Total $ You Paid Out
- Total Personal Income
- Visual Cue as to those Who Made >= $600

The Export can be:
- Another Page (little spicy)
- PDF file (spicy)
- Excel sheet (extra spicy)

We've made a Figma example of how you might show the data in another page after clicking the button. Don't think too hard about how you want to export the data; do what time allows and prioritize displaying all the necessary information cleanly.

<img src='https://github.com/joeyhuaa/gig-boss-interview/blob/main/Iteration%203_Example.png' width='400' />

## How to Complete and Submit
Please fork this repo and email us a link to the repo after you've completed the challenge, or you can create a new repo from scratch if you'd like. Just make sure you use the data from the .csv file we've attached 🙂

If you have any questions, please do not hesitate to email Joey, one of the lead developers at Gig Boss, at joeyhua17@gmail.com.


