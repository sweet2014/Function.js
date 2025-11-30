# CSS Complete Guide for Beginners
## Make Your Websites Beautiful! 🎨

CSS (Cascading Style Sheets) is the language that makes websites look good. If HTML is the skeleton, CSS is the skin, clothes, and makeup!

---

## 📚 Table of Contents

1. [What is CSS?](#1-what-is-css)
2. [CSS Syntax](#2-css-syntax)
3. [How to Add CSS](#3-how-to-add-css)
4. [CSS Selectors](#4-css-selectors)
5. [Colors](#5-colors)
6. [Text & Fonts](#6-text--fonts)
7. [The Box Model](#7-the-box-model)
8. [Layout & Positioning](#8-layout--positioning)
9. [Flexbox](#9-flexbox)
10. [CSS Grid](#10-css-grid)
11. [Responsive Design](#11-responsive-design)
12. [Transitions & Animations](#12-transitions--animations)
13. [Practical Examples](#13-practical-examples)

---

## 1. What is CSS?

CSS tells the browser **how** to display HTML elements.

### Before CSS (Plain HTML):
```html
<h1>My Restaurant</h1>
<p>Welcome to our restaurant!</p>
```
Result: Black text, default font, boring!

### After CSS:
```css
h1 {
    color: purple;
    font-size: 48px;
    font-family: Arial;
}

p {
    color: gray;
    font-size: 18px;
}
```
Result: Colorful, styled, beautiful!

---

## 2. CSS Syntax

CSS is made of **rules**. Each rule has:
- **Selector** - What to style
- **Property** - What aspect to change
- **Value** - How to change it

```css
selector {
    property: value;
    property: value;
}
```

### Real Example:
```css
h1 {
    color: blue;
    font-size: 32px;
    text-align: center;
}
```

**Translation:** "Make all h1 headings blue, 32 pixels tall, and centered"

### Important Syntax Rules:
- ✅ Always use **curly braces** `{ }`
- ✅ End each line with **semicolon** `;`
- ✅ Use **colon** `:` between property and value
- ✅ Properties are **lowercase**

---

## 3. How to Add CSS

### Method 1: External CSS (BEST!) ⭐
Separate CSS file linked to HTML

**HTML:**
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

**styles.css:**
```css
h1 {
    color: blue;
}
```

**Pros:** Clean, reusable, organized
**When to use:** Always! (This is what your project uses)

### Method 2: Internal CSS
CSS inside HTML file

```html
<head>
    <style>
        h1 {
            color: blue;
        }
    </style>
</head>
```

**Pros:** All in one file
**Cons:** Messy, hard to reuse
**When to use:** Quick tests only

### Method 3: Inline CSS
CSS directly on element

```html
<h1 style="color: blue; font-size: 32px;">Heading</h1>
```

**Pros:** Quick for one element
**Cons:** Very messy, hard to maintain
**When to use:** Avoid if possible!

---

## 4. CSS Selectors

Selectors tell CSS **what** to style.

### Type Selector (Element)
Styles all elements of that type

```css
h1 {
    color: blue;
}

p {
    color: gray;
}

button {
    background: green;
}
```

Styles ALL h1s, paragraphs, and buttons.

### Class Selector
Styles elements with specific class

**HTML:**
```html
<div class="restaurant-card">...</div>
<div class="restaurant-card">...</div>
```

**CSS:**
```css
.restaurant-card {
    background: white;
    border-radius: 20px;
}
```

**Important:** Classes start with a **dot** `.` in CSS!

### ID Selector
Styles ONE specific element

**HTML:**
```html
<div id="header">...</div>
```

**CSS:**
```css
#header {
    background: blue;
}
```

**Important:** IDs start with **hash** `#` in CSS!

### Multiple Selectors
Style multiple things at once

```css
h1, h2, h3 {
    font-family: Arial;
    color: navy;
}
```

### Descendant Selector
Style elements inside other elements

```css
.restaurant-card h2 {
    color: red;
}
```

**Translation:** "Style h2 elements INSIDE restaurant-card"

### Child Selector
Direct children only

```css
.card-content > h2 {
    margin-top: 0;
}
```

**Translation:** "Style h2 that is a direct child of card-content"

### Your Project Example:
```css
/* Type selector */
button {
    cursor: pointer;
}

/* Class selector */
.btn-primary {
    background: purple;
}

/* Descendant selector */
.restaurant-card h2 {
    font-size: 1.85rem;
}
```

---

## 5. Colors

CSS has many ways to define colors!

### Named Colors
```css
color: red;
color: blue;
color: green;
color: purple;
color: orange;
```

140+ color names available!

### Hex Colors (Most Popular)
Six-digit codes starting with `#`

```css
color: #ff0000;  /* Red */
color: #00ff00;  /* Green */
color: #0000ff;  /* Blue */
color: #ffffff;  /* White */
color: #000000;  /* Black */
color: #667eea;  /* Purple-blue */
```

### RGB Colors
Red, Green, Blue values (0-255)

```css
color: rgb(255, 0, 0);      /* Red */
color: rgb(0, 255, 0);      /* Green */
color: rgb(102, 126, 234);  /* Purple-blue */
```

### RGBA (With Transparency)
Same as RGB + Alpha (0-1)

```css
background: rgba(0, 0, 0, 0.5);  /* 50% transparent black */
background: rgba(255, 255, 255, 0.8);  /* 80% white */
```

### Your Project Uses:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
/* Purple gradient from #667eea to #764ba2 */

box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
/* Black shadow at 30% opacity */
```

### Color Tools:
- **coolors.co** - Generate color palettes
- **flatuicolors.com** - Popular color schemes
- **colorhunt.co** - Trending palettes

---

## 6. Text & Fonts

### Font Family
```css
font-family: Arial;
font-family: 'Times New Roman';
font-family: Georgia, serif;
font-family: 'Segoe UI', Tahoma, sans-serif;
```

**Fallback fonts:** If first font unavailable, use next one.

### Font Size
```css
font-size: 16px;     /* Pixels */
font-size: 1.5rem;   /* Relative to root */
font-size: 1.2em;    /* Relative to parent */
font-size: 100%;     /* Percentage */
```

**Tip:** Use `rem` for better accessibility!

### Font Weight
```css
font-weight: normal;   /* 400 */
font-weight: bold;     /* 700 */
font-weight: 300;      /* Light */
font-weight: 600;      /* Semi-bold */
font-weight: 900;      /* Extra bold */
```

### Font Style
```css
font-style: normal;
font-style: italic;
font-style: oblique;
```

### Text Alignment
```css
text-align: left;
text-align: center;
text-align: right;
text-align: justify;
```

### Text Decoration
```css
text-decoration: none;         /* Remove underline */
text-decoration: underline;
text-decoration: line-through; /* Strikethrough */
```

### Text Transform
```css
text-transform: uppercase;  /* ALL CAPS */
text-transform: lowercase;  /* all lowercase */
text-transform: capitalize; /* First Letter Capital */
```

### Line Height
Spacing between lines

```css
line-height: 1.5;    /* 1.5x font size */
line-height: 24px;
line-height: 150%;
```

### Letter Spacing
Space between letters

```css
letter-spacing: 1px;
letter-spacing: 0.05em;
letter-spacing: -0.5px;  /* Tighter */
```

### Your Project Example:
```css
.restaurant-name {
    font-size: 1.85rem;
    color: #222;
    font-weight: 700;
    line-height: 1.2;
}

.cuisine-type {
    color: #666;
    font-size: 1rem;
    font-weight: 500;
    letter-spacing: 0.3px;
}
```

---

## 7. The Box Model

Every HTML element is a **box**! The box model has 4 parts:

```
┌─────────────────────────────────┐
│         MARGIN (outside)        │
│  ┌──────────────────────────┐  │
│  │   BORDER                 │  │
│  │  ┌────────────────────┐  │  │
│  │  │  PADDING (inside)  │  │  │
│  │  │  ┌─────────────┐   │  │  │
│  │  │  │  CONTENT    │   │  │  │
│  │  │  └─────────────┘   │  │  │
│  │  └────────────────────┘  │  │
│  └──────────────────────────┘  │
└─────────────────────────────────┘
```

### Content
The actual content (text, images)

```css
width: 200px;
height: 100px;
```

### Padding
Space **inside** the element, between content and border

```css
padding: 20px;              /* All sides */
padding: 10px 20px;         /* Top/Bottom, Left/Right */
padding: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */

padding-top: 10px;
padding-right: 20px;
padding-bottom: 30px;
padding-left: 40px;
```

### Border
Line around the element

```css
border: 2px solid black;
border: 1px dashed red;
border: 3px dotted blue;

border-width: 2px;
border-style: solid;
border-color: black;

border-radius: 10px;  /* Rounded corners! */
```

### Margin
Space **outside** the element, between it and other elements

```css
margin: 20px;              /* All sides */
margin: 10px 20px;         /* Top/Bottom, Left/Right */
margin: 10px 20px 30px 40px; /* Top, Right, Bottom, Left */

margin-top: 10px;
margin-right: 20px;
margin-bottom: 30px;
margin-left: 40px;

margin: 0 auto;  /* Center element horizontally */
```

### Visual Example:
```css
.box {
    width: 200px;          /* Content width */
    height: 100px;         /* Content height */
    padding: 20px;         /* Space inside */
    border: 2px solid black; /* Border */
    margin: 30px;          /* Space outside */
}
```

Total width = 200 + 20 + 20 + 2 + 2 = 244px
Total height = 100 + 20 + 20 + 2 + 2 = 144px

### Box Sizing (Important!)
```css
box-sizing: border-box;
```

**With border-box:** Width/height includes padding and border!

```css
* {
    box-sizing: border-box; /* Apply to everything */
}
```

**Your project uses this!** Check line 4 in styles.css.

### Your Project Example:
```css
.card-content {
    padding: 32px;  /* Space inside */
}

.restaurant-card {
    border-radius: 20px;  /* Rounded corners */
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.btn {
    padding: 16px 28px;  /* Top/Bottom 16px, Left/Right 28px */
    border-radius: 12px;
    margin-bottom: 10px;
}
```

---

## 8. Layout & Positioning

### Display Property

**Block Elements** (Full width, stack vertically)
```css
display: block;
```

Examples: `<div>`, `<h1>`, `<p>`, `<section>`

**Inline Elements** (Only take needed space, sit side-by-side)
```css
display: inline;
```

Examples: `<span>`, `<a>`, `<strong>`

**Inline-Block** (Hybrid - sit side-by-side but have width/height)
```css
display: inline-block;
```

**None** (Hide element completely)
```css
display: none;
```

### Position Property

**Static** (Default - normal flow)
```css
position: static;
```

**Relative** (Relative to its normal position)
```css
position: relative;
top: 10px;    /* Move 10px down */
left: 20px;   /* Move 20px right */
```

**Absolute** (Relative to nearest positioned parent)
```css
position: absolute;
top: 0;
right: 0;  /* Top-right corner of parent */
```

**Fixed** (Relative to viewport - stays in place when scrolling)
```css
position: fixed;
top: 0;
left: 0;  /* Stays at top-left when scrolling */
```

**Sticky** (Hybrid of relative and fixed)
```css
position: sticky;
top: 0;  /* Sticks to top when scrolling */
```

### Your Project Example:
```css
.badge {
    position: absolute;  /* Position relative to card-image */
    top: 20px;
    right: 20px;
    /* "Open Now" badge floats in top-right */
}

.slider-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* Navigation arrows positioned in middle */
}
```

---

## 9. Flexbox

Flexbox makes layouts easy! Perfect for rows and columns.

### Basic Flexbox
```css
.container {
    display: flex;
}
```

Now all children line up in a row!

### Flex Direction
```css
flex-direction: row;         /* Left to right (default) */
flex-direction: row-reverse; /* Right to left */
flex-direction: column;      /* Top to bottom */
flex-direction: column-reverse; /* Bottom to top */
```

### Justify Content (Main Axis)
```css
justify-content: flex-start;    /* Start (default) */
justify-content: flex-end;      /* End */
justify-content: center;        /* Center */
justify-content: space-between; /* Equal space between */
justify-content: space-around;  /* Equal space around */
justify-content: space-evenly;  /* Equal space */
```

### Align Items (Cross Axis)
```css
align-items: flex-start;  /* Top */
align-items: flex-end;    /* Bottom */
align-items: center;      /* Middle */
align-items: stretch;     /* Fill height (default) */
```

### Gap
Space between flex items
```css
gap: 20px;  /* Modern way */
```

### Flex Wrap
```css
flex-wrap: nowrap;  /* Single line (default) */
flex-wrap: wrap;    /* Multiple lines */
```

### Visual Examples:

**Center everything:**
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

**Space between items:**
```css
.container {
    display: flex;
    justify-content: space-between;
}
```

**Vertical stack:**
```css
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
```

### Your Project Example:
```css
.card-header {
    display: flex;
    justify-content: space-between;  /* Name left, rating right */
    align-items: flex-start;
    gap: 16px;
}

.card-actions {
    display: flex;
    gap: 14px;  /* Space between buttons */
}

.rating {
    display: flex;
    align-items: center;
    gap: 10px;  /* Space between stars and number */
}
```

---

## 10. CSS Grid

Grid is perfect for 2D layouts (rows AND columns).

### Basic Grid
```css
.container {
    display: grid;
    grid-template-columns: 200px 200px 200px;  /* 3 columns */
    grid-template-rows: 100px 100px;           /* 2 rows */
    gap: 20px;
}
```

### Flexible Columns
```css
/* Equal width columns */
grid-template-columns: 1fr 1fr 1fr;

/* Mixed widths */
grid-template-columns: 2fr 1fr 1fr;  /* First is 2x wider */

/* Repeat function */
grid-template-columns: repeat(3, 1fr);  /* 3 equal columns */

/* Auto-fit (responsive!) */
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
```

### Gap
```css
gap: 20px;          /* All gaps */
row-gap: 20px;      /* Vertical only */
column-gap: 30px;   /* Horizontal only */
```

### Your Project Example:
```css
.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 40px;
    /* Cards automatically fit to screen width! */
}
```

**What this does:**
- Creates columns at least 500px wide
- Fits as many as possible per row
- Equal width columns
- 40px gap between cards

---

## 11. Responsive Design

Make your site look good on all devices!

### Media Queries

**Syntax:**
```css
@media (condition) {
    /* CSS rules only apply when condition is true */
}
```

### Screen Size Breakpoints
```css
/* Mobile phones */
@media (max-width: 640px) {
    body {
        font-size: 14px;
    }
}

/* Tablets */
@media (min-width: 641px) and (max-width: 1024px) {
    body {
        font-size: 16px;
    }
}

/* Desktop */
@media (min-width: 1025px) {
    body {
        font-size: 18px;
    }
}
```

### Common Patterns

**Mobile First:**
```css
/* Default: Mobile styles */
.card {
    width: 100%;
}

/* Tablet and up */
@media (min-width: 768px) {
    .card {
        width: 50%;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .card {
        width: 33.33%;
    }
}
```

**Desktop First:**
```css
/* Default: Desktop styles */
.card {
    width: 33.33%;
}

/* Tablet */
@media (max-width: 1024px) {
    .card {
        width: 50%;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .card {
        width: 100%;
    }
}
```

### Your Project Example:
```css
/* Desktop - default */
.cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    gap: 40px;
}

/* Mobile - smaller screens */
@media (max-width: 640px) {
    .cards-grid {
        grid-template-columns: 1fr;  /* Single column */
        gap: 30px;
    }

    .card-actions {
        flex-direction: column;  /* Stack buttons */
    }

    .btn {
        width: 100%;  /* Full width buttons */
    }
}
```

### Responsive Units

**px** - Fixed pixels
```css
font-size: 16px;  /* Always 16 pixels */
```

**rem** - Relative to root font size
```css
font-size: 1.5rem;  /* 1.5 times root size */
```

**em** - Relative to parent font size
```css
font-size: 1.2em;  /* 1.2 times parent size */
```

**%** - Percentage of parent
```css
width: 50%;  /* Half of parent width */
```

**vw/vh** - Viewport width/height
```css
width: 100vw;   /* 100% of viewport width */
height: 50vh;   /* 50% of viewport height */
```

---

## 12. Transitions & Animations

Make things move smoothly!

### Transitions

Smooth change from one state to another.

**Basic Syntax:**
```css
transition: property duration timing-function delay;
```

**Example:**
```css
.button {
    background: blue;
    transition: background 0.3s ease;
}

.button:hover {
    background: red;  /* Smoothly changes to red */
}
```

### Transition Properties
```css
/* Single property */
transition: background 0.3s;

/* Multiple properties */
transition: background 0.3s, transform 0.2s;

/* All properties */
transition: all 0.3s ease;
```

### Timing Functions
```css
transition-timing-function: ease;        /* Slow start, fast middle, slow end */
transition-timing-function: linear;      /* Constant speed */
transition-timing-function: ease-in;     /* Slow start */
transition-timing-function: ease-out;    /* Slow end */
transition-timing-function: ease-in-out; /* Slow start and end */
```

### Your Project Example:
```css
.restaurant-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.restaurant-card:hover {
    transform: translateY(-10px);  /* Moves up smoothly */
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.btn {
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-3px);  /* Lifts up */
}
```

### Transform Property

Move, rotate, scale elements without affecting layout.

```css
/* Move */
transform: translateX(50px);      /* Move right */
transform: translateY(-20px);     /* Move up */
transform: translate(50px, -20px); /* Move right and up */

/* Scale */
transform: scale(1.2);     /* 20% bigger */
transform: scale(0.8);     /* 20% smaller */

/* Rotate */
transform: rotate(45deg);  /* Rotate 45 degrees */
transform: rotate(-90deg); /* Rotate counter-clockwise */

/* Combine */
transform: translateY(-10px) scale(1.1);
```

### Animations

For complex, repeating animations.

```css
/* Define animation */
@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(-100px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

/* Use animation */
.element {
    animation: slideIn 0.5s ease;
}
```

**More control:**
```css
@keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
    100% { transform: translateY(0); }
}

.element {
    animation: bounce 1s infinite;  /* Repeats forever */
}
```

---

## 13. Practical Examples

Let's style some common elements!

### Button Styles
```css
.button {
    /* Basic styling */
    background: #3498db;
    color: white;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;

    /* Transition */
    transition: all 0.3s ease;
}

.button:hover {
    background: #2980b9;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.button:active {
    transform: translateY(0);
}
```

### Card Component
```css
.card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

### Navigation Bar
```css
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-links {
    display: flex;
    gap: 30px;
    list-style: none;
}

.nav-links a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: #3498db;
}
```

### Image Overlay
```css
.image-container {
    position: relative;
    overflow: hidden;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.image-container:hover .image-overlay {
    opacity: 1;
}
```

### Gradient Background
```css
.gradient-bg {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

/* Multiple gradients */
.multi-gradient {
    background: linear-gradient(45deg, #f093fb 0%, #f5576c 100%),
                linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

---

## 🎯 Practice Exercises

### Exercise 1: Style a Button
Create a button that:
- Has blue background
- White text
- Rounded corners
- Changes to darker blue on hover
- Lifts up slightly on hover

### Exercise 2: Center a Card
Create a card that:
- Is 400px wide
- Has white background
- Has shadow
- Is centered on the page
- Has padding inside

### Exercise 3: Create a Grid
Make a grid with:
- 3 equal columns
- 20px gap between items
- On mobile: 1 column

### Exercise 4: Animate on Load
Make an element:
- Start invisible (opacity: 0)
- Fade in over 1 second
- Move from bottom to top

---

## 🚀 CSS Resources

### Learning:
- **MDN Web Docs** - Complete CSS reference
- **CSS-Tricks** - Tutorials and guides
- **freeCodeCamp** - Interactive lessons
- **W3Schools** - Simple examples

### Tools:
- **CodePen** - Try CSS live
- **CSS Grid Generator** - cssgrideenerator.io
- **Flexbox Froggy** - Game to learn flexbox
- **CSS Battle** - CSS challenges

### Inspiration:
- **Dribbble** - Design inspiration
- **Awwwards** - Award-winning sites
- **CodePen** - Community creations

---

## 💡 Quick Reference Card

### Colors
```css
color: #hexcode;
background: rgb(255, 0, 0);
background: rgba(0, 0, 0, 0.5);
```

### Text
```css
font-family: Arial;
font-size: 16px;
font-weight: bold;
text-align: center;
```

### Box Model
```css
width: 200px;
height: 100px;
padding: 20px;
margin: 10px;
border: 2px solid black;
border-radius: 10px;
```

### Layout
```css
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 20px;
```

### Position
```css
position: absolute;
top: 0;
right: 0;
```

### Effects
```css
transition: all 0.3s ease;
transform: translateY(-10px);
box-shadow: 0 4px 12px rgba(0,0,0,0.1);
```

---

## 🎓 Next Steps

1. **Practice on Your Project**
   - Change colors in your restaurant cards
   - Modify spacing and sizes
   - Try different layouts

2. **Experiment**
   - Copy examples and modify them
   - Break things and fix them
   - Try new properties

3. **Build Projects**
   - Personal portfolio
   - Landing page
   - Photo gallery
   - Blog design

4. **Learn Advanced CSS**
   - CSS Variables
   - Advanced animations
   - CSS preprocessors (Sass)
   - CSS frameworks (Tailwind)

---

**Remember:** The best way to learn CSS is by doing! Start changing things in your restaurant project and see what happens. 🎨

**You've got this!** 🚀
