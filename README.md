# Overview

This coding challenge is aimed at our future implementations of our app's "Books" page.  Currently users can keep track of their income for the year, the overall income, and each individual band's income. Our future implementations will include a more thorough record of all of the above, with the addition of keeping track of individual musician income, Tracking 1099 (those who earn more than $600 from your bands), as well as an EXPORT option where all income information can be printed in a format that's easy to use for tax purposes. 

We will provide you with 3 visual examples, as well as income data, that you will use for the challenge. Our MVP, or minimum viable product, is the completion of Iteration 2, Iteration 3 is extra but encouraged!

The following instructions will guide you through our Interview Challenge.

# Coding Challenge Instructions

You are the leader of 3 bands, and it's time to do taxes for the year (ugh, sucks right?!).\
Thankfully, you're working on an app that would make tax season a whole lot easier for musicians!

\
Each band has 4 members total (3 including you).
- For Band 1, you have paid each member over $600 total in the past year.
- For Band 2, you have paid each member under $600 in the past year.
- For Band 3, you have paid 2 members >= $600 and the other 2 members less than $600 in the past year.

\
Create a page that displays:
- How much you have made personally over the past year
- How much each individual band has made
- How much total all the bands have made (all 3 bands added together)
- How much each individual member has made (within each band)
- Sort ppl who made >= $600 and < $600
- Total amount of $ you paid to ppl who made >= $600
- Total amount of $ you paid to ppl who made < $600
- Search for a person’s name and see how much you paid them (or dropdown menu)

\
# References:

You'll find screen shots of "Iteration 0," "Iteration 1," "Iteration 2," "Iteration 3, "as well as "Income Data - 2023-24."

# Iteration 0

UI Setup - This is a BASIC template of how to setup the UI.  This is not a strict template, so feel free to use your own design ideas! We are looking for functionality over beauty, but with a lot of UI changes on the horizon for Gig Boss, A catchy design is a Plus!

\
Details:
- Notice there is a "Total Income for 2023-2024" for all bands at the top.
- The "Income By Band" will be a drop down menu, where you can choose which band info you'll see.
- Then there are Two Buttons, "Income By Musician" is aimed at showing all individuals income, and "Export to Spreadsheet" is the last iteration of the project. Push this button and all information will be exported to a sheet with all the numbers for taxes.

# Iteration 1

This illustrates the "Income By Band" pulldown menu, as well as the information necassary in the "Render Area." These include:
 - Total Band Income
 - A breakdown of all members of the band's income. 
 - When you switch from band to band the information in this window will change to match the band's income.

# Iteration 2 (MVP - Minimum Viable Product)

This illustrates the first button, "Income By Musician"  With a click of this button the "Render Area" should show: 

- A search input (keyword search)
- A dropdown input with two options >= $600 and < $600. 
- And below a list of ALL (unfiltered) employees.  
- The search input allows users to search for a direct name
- The pulldown separates members who've earn more than or equal to, or less then $600. 

 Ideally, when the members are unfiltered there will be some visual cue to those members who have made more than $600.  This is shown with a green highlight in the example.

# Iteration 3

This step is the final Step, if you complete everything in the previous steps, then go for this  implementation.  Here we will press the third button, "Export for Spreadsheet," and ALL of the important information should be exported to a useful tax page.  It should include:

- Total All Bands Income
- Total Personal Income
- Total You Paid Out To Members Who Made >= $600
- Total You Paid Out To Members Who Made < $600
- Total You Paid Out Combined
- Total Each Member Made
- Visual Cue as to those Who Made >= $600



