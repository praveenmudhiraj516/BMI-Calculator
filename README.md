🧮 BMI Calculator
This is a simple Body Mass Index (BMI) calculator web application built using HTML, CSS, and JavaScript. The app allows users to input their weight (in kilograms) and height (in centimeters), and it calculates their BMI, displaying the result with a health classification (Underweight, Normal weight, Overweight, or Obesity).

bmi-calculator/
│
├── index.html         # Main HTML structure
├── style.css          # Stylesheet for design and layout
├── script.js          # JavaScript logic for BMI calculation
└── README.md          # This file
User inputs:

Weight in kilograms

Height in centimeters

On clicking Calculate BMI:

The BMI is calculated using the formula:

arduino
Copy
Edit
BMI = weight / (height * height) * 10,000
Result is displayed with:

BMI Value (rounded to 1 decimal place)

Health Category (e.g. "Normal weight")

Reference legend for BMI categories

| Category      | BMI Range   |
| ------------- | ----------- |
| Underweight   | < 18.5      |
| Normal weight | 18.5 – 24.9 |
| Overweight    | 25 – 29.9   |
| Obesity       | ≥ 30        |
