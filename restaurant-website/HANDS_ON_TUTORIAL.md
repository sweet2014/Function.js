# Complete Hands-On Tutorial
## Learn By Doing - All 10 Lessons

This tutorial covers everything step-by-step. Follow along and you'll learn how to customize your restaurant website!

---

## 📚 **Table of Contents**

1. [Change Background Color](#1-change-background-color)
2. [Change Restaurant Name](#2-change-restaurant-name)
3. [Change Button Text](#3-change-button-text)
4. [Add Your Own Address](#4-add-your-own-address)
5. [Add a 6th Restaurant](#5-add-a-6th-restaurant)
6. [Change Button Colors](#6-change-button-colors)
7. [Add Your Own Images](#7-add-your-own-images)
8. [Change Number of Images](#8-change-number-of-images)
9. [How Image Slider Works](#9-how-image-slider-works)
10. [How Responsive Design Works](#10-how-responsive-design-works)

---

## Before You Start

### What You'll Need:
- Your files: `index.html`, `styles.css`, `script.js`
- A text editor (already available in your environment)
- A web browser to see changes

### Testing Your Changes:
After each change:
1. Save the file (`Ctrl+S`)
2. Open/refresh browser
3. See your changes!

---

## 1. Change Background Color

**What You'll Learn:** How CSS colors work

### Current Background:
The page has a purple gradient background.

### Let's Change It:

**Step 1:** Open `styles.css`

**Step 2:** Find this line (around line 10):
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Step 3:** Replace with one of these:

#### Option A - Solid Blue:
```css
background: #3498db;
```

#### Option B - Green to Blue Gradient:
```css
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
```

#### Option C - Sunset Gradient:
```css
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

#### Option D - Ocean Gradient:
```css
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
```

### Understanding Color Codes:

**Hex Colors:** Start with `#` followed by 6 characters
- `#ff0000` = Red
- `#00ff00` = Green
- `#0000ff` = Blue
- `#ffffff` = White
- `#000000` = Black

**Named Colors:** Use English words
- `red`, `blue`, `green`, `yellow`
- `purple`, `pink`, `orange`

### Try This:
Pick your favorite color and change the background!

---

## 2. Change Restaurant Name

**What You'll Learn:** How to edit HTML text content

### Let's Change "The Gourmet Kitchen":

**Step 1:** Open `index.html`

**Step 2:** Find this line (around line 53):
```html
<h2 class="restaurant-name">The Gourmet Kitchen</h2>
```

**Step 3:** Change to your favorite restaurant name:
```html
<h2 class="restaurant-name">Luigi's Italian Bistro</h2>
```

### Other Places to Change:

#### Description (line 62-63):
```html
<p class="description">
    Your own description here - tell people about the restaurant!
</p>
```

#### Cuisine Type (line 60):
```html
<p class="cuisine-type">Italian • Family Style • Authentic</p>
```

### Pro Tip:
Use the bullet symbol `•` to separate different cuisine types. Copy and paste: `•`

### Try This:
1. Change the name to your favorite restaurant
2. Write your own description
3. Update the cuisine type

---

## 3. Change Button Text

**What You'll Learn:** How buttons work in HTML

### Current Buttons:
- "Book a Table"
- "View Menu"

### Let's Change Them:

**Step 1:** Open `index.html`

**Step 2:** Find the buttons (around line 86-87):
```html
<button class="btn btn-primary">Book a Table</button>
<button class="btn btn-secondary">View Menu</button>
```

**Step 3:** Change to whatever you want:
```html
<button class="btn btn-primary">Reserve Now</button>
<button class="btn btn-secondary">See Our Menu</button>
```

### More Ideas:
- "Order Online"
- "Get Directions"
- "Call Us"
- "Special Offers"
- "Make Reservation"
- "Download Menu"

### Try This:
Change all 5 restaurants to have different button text that matches their style!

---

## 4. Add Your Own Address

**What You'll Learn:** How to structure contact information

### Current Address:
```html
<span>456 Washington Street, Hoboken, NJ 07030</span>
```

### Let's Change It:

**Step 1:** Open `index.html`

**Step 2:** Find the address section (around line 69):
```html
<div class="detail-item">
    <span class="icon">📍</span>
    <span>456 Washington Street, Hoboken, NJ 07030</span>
</div>
```

**Step 3:** Replace with your address:
```html
<div class="detail-item">
    <span class="icon">📍</span>
    <span>123 Your Street, Your City, State ZIP</span>
</div>
```

### Also Update:

#### Phone Number (line 81):
```html
<span>(201) 555-4567</span>
```
Change to: `(123) 456-7890`

#### Hours (line 77):
```html
<span>11:00 AM - 10:00 PM</span>
```
Change to your hours!

### Try This:
Use a real restaurant's address, phone, and hours that you know!

---

## 5. Add a 6th Restaurant

**What You'll Learn:** How to duplicate HTML sections

This is more advanced, but I'll guide you step-by-step!

### Step 1: Find Where to Add It

Open `index.html` and scroll to the end of the 5th restaurant card (around line 402). You'll see:
```html
        </div>
    </div>

    <script src="script.js"></script>
```

### Step 2: Copy One Complete Restaurant Card

Go back and copy EVERYTHING from one restaurant. For example, copy from line 326 to 402 (the Indian restaurant).

### Step 3: Paste Before the Closing Tags

Paste it BEFORE `</div>` and AFTER the last restaurant card.

### Step 4: Customize Your New Restaurant

Change these things:
- Restaurant name
- Description
- Address
- Phone number
- Hours
- Images (we'll learn this in lesson 7!)

### Example - Pizza Restaurant:

```html
<!-- Pizza Restaurant Card -->
<div class="restaurant-card">
    <div class="card-image">
        <div class="slider">
            <div class="slider-wrapper">
                <div class="slide active">
                    <img src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=500&fit=crop" alt="Pizza">
                </div>
                <div class="slide">
                    <img src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=500&fit=crop" alt="Pizza oven">
                </div>
                <div class="slide">
                    <img src="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=500&fit=crop" alt="Pizza slice">
                </div>
                <div class="slide">
                    <img src="https://images.unsplash.com/photo-1598023696416-0193a0bcd302?w=800&h=500&fit=crop" alt="Margherita pizza">
                </div>
                <div class="slide">
                    <img src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&h=500&fit=crop" alt="Pizza making">
                </div>
            </div>

            <button class="slider-btn prev" aria-label="Previous slide">❮</button>
            <button class="slider-btn next" aria-label="Next slide">❯</button>

            <div class="slider-dots">
                <span class="dot active" aria-label="Slide 1"></span>
                <span class="dot" aria-label="Slide 2"></span>
                <span class="dot" aria-label="Slide 3"></span>
                <span class="dot" aria-label="Slide 4"></span>
                <span class="dot" aria-label="Slide 5"></span>
            </div>
        </div>

        <span class="badge">Open Now</span>
    </div>

    <div class="card-content">
        <div class="card-header">
            <h2 class="restaurant-name">Bella's Wood-Fired Pizza</h2>
            <div class="rating">
                <span class="stars">★★★★★</span>
                <span class="rating-text">4.8</span>
            </div>
        </div>

        <p class="cuisine-type">Pizza • Italian • Casual Dining</p>

        <p class="description">
            Authentic Neapolitan pizza baked in our traditional wood-fired oven. Fresh ingredients, homemade dough, and recipes passed down through generations.
        </p>

        <div class="card-details">
            <div class="detail-item">
                <span class="icon">📍</span>
                <span>890 Broad Street, Newark, NJ 07102</span>
            </div>
            <div class="detail-item">
                <span class="icon">💰</span>
                <span>$$ - Moderate</span>
            </div>
            <div class="detail-item">
                <span class="icon">🕒</span>
                <span>11:00 AM - 11:00 PM</span>
            </div>
            <div class="detail-item">
                <span class="icon">📞</span>
                <span>(973) 555-9876</span>
            </div>
        </div>

        <div class="card-actions">
            <button class="btn btn-primary">Order Now</button>
            <button class="btn btn-secondary">View Menu</button>
        </div>
    </div>
</div>
```

### Try This:
Add your own 6th restaurant! It can be any type you like.

---

## 6. Change Button Colors

**What You'll Learn:** How CSS styling controls appearance

### Current Button Colors:
- Primary: Purple gradient
- Secondary: White with purple border

### Let's Change Them:

**Step 1:** Open `styles.css`

**Step 2:** Find the button styles (around line 297):

```css
.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}
```

**Step 3:** Replace with your colors:

#### Option A - Solid Green:
```css
.btn-primary {
    background: #27ae60;
    color: white;
    box-shadow: 0 4px 15px rgba(39, 174, 96, 0.3);
}
```

#### Option B - Red Gradient:
```css
.btn-primary {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
    color: white;
    box-shadow: 0 4px 15px rgba(245, 87, 108, 0.3);
}
```

#### Option C - Blue:
```css
.btn-primary {
    background: #3498db;
    color: white;
    box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
}
```

### Change Secondary Button (line 312):

```css
.btn-secondary {
    background: white;
    color: #667eea;  /* Change this color */
    border: 2px solid #667eea;  /* And this one */
}
```

### Color Ideas:
- **Green:** `#27ae60` (success/go)
- **Red:** `#e74c3c` (urgent/important)
- **Orange:** `#f39c12` (warm/friendly)
- **Blue:** `#3498db` (trust/calm)

### Try This:
Make primary buttons green and secondary buttons orange!

---

## 7. Add Your Own Images

**What You'll Learn:** How images work on the web

### Current Images:
We use Unsplash (free stock photos)

### Image URL Format:
```html
<img src="https://images.unsplash.com/photo-ID?w=800&h=500&fit=crop" alt="Description">
```

### How to Find Images:

**Option 1: Unsplash (Easiest)**
1. Go to unsplash.com
2. Search for "restaurant" or "food"
3. Click on a photo
4. Right-click the image
5. Copy image address
6. Paste in your HTML

**Option 2: Use Direct URLs**

Here are some ready-to-use image URLs for different foods:

#### Burgers:
```
https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&h=500&fit=crop
https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=500&fit=crop
```

#### Tacos:
```
https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=500&fit=crop
https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&h=500&fit=crop
```

#### Desserts:
```
https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=500&fit=crop
https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&h=500&fit=crop
```

### How to Change Images:

**Step 1:** Open `index.html`

**Step 2:** Find an image (around line 332):
```html
<img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=500&fit=crop" alt="Indian restaurant interior">
```

**Step 3:** Replace the URL and description:
```html
<img src="YOUR-NEW-IMAGE-URL" alt="Describe your image">
```

### Try This:
Replace all 5 images in one restaurant with burger images!

---

## 8. Change Number of Images

**What You'll Learn:** How to add/remove slider images

### Currently: 5 Images Per Restaurant

### To Add a 6th Image:

**Step 1:** Open `index.html`

**Step 2:** Find the slider section (around line 330-346)

**Step 3:** Add a new slide BEFORE the closing `</div>`:

```html
<div class="slide">
    <img src="YOUR-IMAGE-URL" alt="New image">
</div>
```

**Step 4:** Add a new dot indicator (around line 351-357):

```html
<span class="dot" aria-label="Slide 6"></span>
```

### Complete Example - 6 Images:

```html
<div class="slider-wrapper">
    <div class="slide active">
        <img src="image1.jpg" alt="Image 1">
    </div>
    <div class="slide">
        <img src="image2.jpg" alt="Image 2">
    </div>
    <div class="slide">
        <img src="image3.jpg" alt="Image 3">
    </div>
    <div class="slide">
        <img src="image4.jpg" alt="Image 4">
    </div>
    <div class="slide">
        <img src="image5.jpg" alt="Image 5">
    </div>
    <div class="slide">
        <img src="image6.jpg" alt="Image 6">  <!-- NEW! -->
    </div>
</div>

<!-- ... buttons ... -->

<div class="slider-dots">
    <span class="dot active" aria-label="Slide 1"></span>
    <span class="dot" aria-label="Slide 2"></span>
    <span class="dot" aria-label="Slide 3"></span>
    <span class="dot" aria-label="Slide 4"></span>
    <span class="dot" aria-label="Slide 5"></span>
    <span class="dot" aria-label="Slide 6"></span>  <!-- NEW! -->
</div>
```

### To Remove Images (Make it 3 Instead of 5):

**Step 1:** Delete 2 slide sections:
- Delete one `<div class="slide">...</div>` block
- Delete another one

**Step 2:** Delete 2 dots:
- Delete two `<span class="dot">` lines

### Try This:
Make one restaurant have 7 images and another have only 3!

---

## 9. How Image Slider Works

**What You'll Learn:** Understanding the magic behind auto-playing images

### The Concept:

Think of it like a deck of cards:
- Only show one card (image) at a time
- Hide all other cards
- Every 4 seconds, hide current card and show next one
- When you reach the last card, go back to first

### The HTML Structure:

```html
<div class="slider-wrapper">
    <div class="slide active">Image 1 - VISIBLE</div>
    <div class="slide">Image 2 - HIDDEN</div>
    <div class="slide">Image 3 - HIDDEN</div>
</div>
```

The class `active` means "show this one!"

### The CSS Magic:

```css
.slide {
    opacity: 0;  /* Hidden - transparent */
    position: absolute;
}

.slide.active {
    opacity: 1;  /* Visible - solid */
    position: relative;
}
```

**Translation:** All slides are invisible EXCEPT the one with class "active"

### The JavaScript Timer:

```javascript
// Every 4000 milliseconds (4 seconds)
setInterval(() => {
    // Remove 'active' from current image
    currentSlide.classList.remove('active');

    // Add 'active' to next image
    nextSlide.classList.add('active');
}, 4000);
```

### When You Click the Arrow:

```javascript
button.addEventListener('click', function() {
    // Same thing - remove active, add to next
    changeSlide(1);  // 1 means "next", -1 means "previous"
});
```

### Customize the Speed:

**Step 1:** Open `script.js`

**Step 2:** Find this line (around line 8):
```javascript
AUTO_PLAY_DELAY: 4000,  // 4 seconds
```

**Step 3:** Change the number:
```javascript
AUTO_PLAY_DELAY: 2000,  // 2 seconds (faster)
AUTO_PLAY_DELAY: 6000,  // 6 seconds (slower)
```

### Try This:
1. Change auto-play speed to 2 seconds
2. Open browser and watch it go faster!

---

## 10. How Responsive Design Works

**What You'll Learn:** Why websites look good on all devices

### The Concept:

Your website looks different on:
- Big computer screen (desktop)
- Medium tablet (iPad)
- Small phone (iPhone)

### How It Works - Media Queries:

Think of it like conditional instructions:
- **IF** screen is small (phone)
  - THEN use single column
  - THEN make text bigger
  - THEN stack buttons vertically

### The Code:

Open `styles.css` and look at line 344:

```css
@media (max-width: 640px) {
    /* These rules ONLY apply on screens smaller than 640px */

    .cards-grid {
        grid-template-columns: 1fr;  /* One column instead of two */
    }

    .card-actions {
        flex-direction: column;  /* Stack buttons vertically */
    }
}
```

### Breaking It Down:

**Desktop (large screen):**
```css
.cards-grid {
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    /* Multiple columns - cards side by side */
}
```

**Mobile (small screen):**
```css
@media (max-width: 640px) {
    .cards-grid {
        grid-template-columns: 1fr;
        /* One column - cards stacked */
    }
}
```

### Our Breakpoints:

1. **Mobile:** 0-640px
   - Single column
   - Larger buttons
   - Vertical stacking

2. **Tablet:** 641-1024px
   - Single column (wider)
   - Medium spacing

3. **Desktop:** 1025px+
   - Multiple columns
   - Side-by-side cards

### Test Responsive Design:

**Method 1: Resize Browser**
- Open your website
- Make browser window smaller
- Watch layout change!

**Method 2: Developer Tools**
- Press F12 in browser
- Click device icon (phone/tablet symbol)
- Choose iPhone, iPad, etc.

### Customize Breakpoints:

**Step 1:** Open `styles.css`

**Step 2:** Find media queries (line 344, 351)

**Step 3:** Change the pixel values:

```css
@media (max-width: 640px) {  /* Change this number */
    /* Mobile styles */
}

@media (max-width: 800px) {  /* Make mobile bigger */
    /* Mobile styles */
}
```

### Try This:
1. Open your website
2. Press F12
3. Click the device icon
4. Switch between iPhone, iPad, Desktop
5. See how layout changes!

---

## 🎓 Graduation Exercise

Now that you've learned everything, try this challenge:

### Create Your Dream Restaurant Card:

1. ✅ Change background to your favorite color
2. ✅ Add a 6th restaurant (your favorite food type)
3. ✅ Change button colors to match your theme
4. ✅ Use 7 images in the slider
5. ✅ Add real address and phone number
6. ✅ Set auto-play to 3 seconds
7. ✅ Customize button text
8. ✅ Write your own description

### When You're Done:

Save your work with Git:
```bash
git add .
git commit -m "Customized my restaurant website!"
git push
```

---

## 🚀 What's Next?

You've learned the basics! Here's what you can explore next:

### Level Up:
1. **Add animations** - Make cards bounce or fade in
2. **Add a contact form** - Let people send messages
3. **Add a map** - Show restaurant locations
4. **Add reviews** - Customer testimonials
5. **Add a menu page** - Full food menu with prices

### Resources:
- **freeCodeCamp.org** - Free interactive lessons
- **MDN Web Docs** - Official documentation
- **W3Schools** - Tutorials and examples
- **CSS-Tricks** - Advanced CSS techniques
- **YouTube** - Video tutorials

---

## 💡 Quick Reference

### Common Tasks:

**Change a color:**
```css
color: #hexcode;
background: #hexcode;
```

**Change text:**
```html
<h2>Your Text Here</h2>
```

**Add an image:**
```html
<img src="URL" alt="Description">
```

**Change size:**
```css
font-size: 20px;
width: 100px;
height: 50px;
```

**Add spacing:**
```css
padding: 20px;  /* Inside */
margin: 20px;   /* Outside */
```

---

## 🎉 Congratulations!

You've completed all 10 lessons! You now understand:
- ✅ HTML structure
- ✅ CSS styling
- ✅ JavaScript interactivity
- ✅ Responsive design
- ✅ Image sliders
- ✅ Git basics

**Keep practicing and building!** 🚀

---

## Need Help?

If something doesn't work:
1. Check browser console (F12 → Console tab)
2. Look for error messages
3. Double-check spelling and syntax
4. Ask questions - no question is too small!

**Remember:** Every expert was once a beginner. You're doing great! 🌟
