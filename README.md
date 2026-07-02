# NEXORASTATE - Thrift Store Website

NexoraState is a Tunisia-based thrift store offering handpicked second-hand and vintage clothing. Discover unique, affordable, and sustainable fashion with carefully selected pieces that help you stand out while giving clothes a second life.

## 🌟 Features

- **Product Filtering** - Browse items by category (Jackets, Dresses, Jeans, Accessories)
- **Smooth Navigation** - Smooth scroll functionality for seamless browsing
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile devices
- **Contact Form** - Easy way for customers to get in touch
- **Animations** - Engaging scroll animations and transitions
- **Mobile Menu** - Hamburger menu for mobile devices
- **Product Showcase** - Featured items and complete product grid

## 📁 Project Structure

```
NEXORASTATE/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling and responsive design
├── js/
│   └── script.js       # Interactive functionality
├── images/
│   └── 20260531_193415.png  # Store photo
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations needed

### How to Run

1. **Clone the repository**
   ```bash
   git clone https://github.com/thereal4youb/NEXORASTATE.git
   cd NEXORASTATE
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
   
   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000` in your browser

   **Using Node.js (http-server):**
   ```bash
   npx http-server
   ```
   Then visit the provided local address

3. **That's it!** The website is now running

## 📋 Sections

### Navigation Bar
- Sticky navigation with smooth scrolling
- Active link highlighting based on scroll position
- Mobile hamburger menu for smaller screens

### Hero Section
- Eye-catching banner with call-to-action button
- Parallax scrolling effect

### About Us
- Store information
- Mission and values
- Store photo showcase

### Featured Items
- Showcase of selected products
- Professional product cards with images and pricing

### Shop Section
- Complete product catalog with 8+ items
- Filter buttons for easy browsing:
  - All Items
  - Jackets
  - Dresses
  - Jeans
  - Accessories
- Product cards with pricing and condition info
- Quick view functionality

### Why Choose Us
- Four key value propositions:
  - Sustainable Fashion
  - Unique Pieces
  - Affordable Prices
  - Quality Checked

### Contact Section
- Contact information display
- Functional contact form with validation
- Success/error message feedback

### Footer
- Copyright information
- Social media links

## 🎨 Customization

### Change Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2c3e50;      /* Main color */
    --secondary-color: #e74c3c;    /* Accent color */
    --accent-color: #3498db;       /* Button color */
    --light-color: #ecf0f1;        /* Light backgrounds */
    --dark-color: #34495e;         /* Dark text */
}
```

### Add Products
Edit `index.html` and add new product cards in the shop section:
```html
<div class="product-card" data-category="category-name">
    <div class="product-image"></div>
    <h3>Product Name</h3>
    <p class="price">$XX</p>
    <p class="condition">Condition</p>
    <button class="btn btn-small">Quick View</button>
</div>
```

### Update Contact Information
Edit the contact section in `index.html`:
```html
<p><strong>Email:</strong> your-email@nexorastate.tn</p>
<p><strong>Phone:</strong> +216 XX XXX XXXX</p>
```

### Enable Email Form Submission
Uncomment and configure Formspree in `js/script.js`:
1. Sign up at [Formspree.io](https://formspree.io)
2. Get your form ID
3. Uncomment the fetch code and add your form ID
4. The form will now submit emails to your inbox

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px and above)
- **Tablet** (768px - 1199px)
- **Mobile** (below 768px)

## ✨ JavaScript Features

### Product Filtering
- Click filter buttons to show/hide products by category
- Smooth fade in/out animations

### Smooth Scrolling
- Click navigation links to smoothly scroll to sections
- Works on all modern browsers

### Form Validation
- Validates required fields
- Email format validation
- User-friendly error messages

### Animations
- Scroll-triggered animations for cards
- Parallax effect on hero background
- Hover effects on buttons and cards

### Mobile Menu
- Hamburger menu appears on smaller screens
- Auto-closes when a link is clicked

## 🌐 Deployment

### Deploy on GitHub Pages
1. Push your code to GitHub
2. Go to repository settings
3. Scroll to "GitHub Pages"
4. Select `main` branch as source
5. Your site will be live at `https://yourusername.github.io/NEXORASTATE/`

### Deploy on Other Platforms
- **Netlify**: Connect your GitHub repo, auto-deploys on push
- **Vercel**: Similar process to Netlify
- **Any Web Host**: Upload files via FTP or file manager

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **Vanilla JavaScript** - No frameworks, pure JavaScript
- **Responsive Design** - Mobile-first approach

## 📝 Future Enhancements

- [ ] Shopping cart functionality
- [ ] Product detail pages
- [ ] User authentication
- [ ] Product search feature
- [ ] Backend integration (Node.js/Python)
- [ ] Database for dynamic product management
- [ ] Payment processing (Stripe/PayPal)
- [ ] Admin dashboard for managing inventory
- [ ] Customer reviews and ratings
- [ ] Wishlist functionality

## 📧 Contact & Support

For questions or support, reach out to:
- **Email**: info@nexorastate.tn
- **Location**: Tunisia

## 📄 License

This project is open source. Feel free to use, modify, and distribute.

## 👨‍💻 Author

**thereal4youb** - NexoraState Project Creator

---

**Last Updated**: July 2, 2026

**Status**: ✅ Active & Maintained

Thank you for visiting NEXORASTATE! 🛍️✨