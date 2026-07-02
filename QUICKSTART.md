# NEXORASTATE - Quick Start Guide

Get your NEXORASTATE website up and running in minutes!

## ⚡ 5-Minute Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/thereal4youb/NEXORASTATE.git
cd NEXORASTATE
```

### Step 2: Open in Browser
Simply double-click `index.html` or open it in your browser:
```
File → Open → index.html
```

### Step 3: Done! 🎉
Your website is running locally!

---

## 🌐 Local Development Server (Optional)

For better development experience, use a local server:

### Using Python 3:
```bash
python -m http.server 8000
```
Then visit: `http://localhost:8000`

### Using Node.js:
```bash
npx http-server
```
Then visit the provided local address

---

## 📝 File Structure Overview

```
NEXORASTATE/
├── index.html              # Main website file
├── css/
│   └── styles.css          # All styling
├── js/
│   └── script.js           # Interactive features
├── images/
│   └── 20260531_193415.png # Store photo
├── package.json            # Project info
├── .gitignore              # Git ignore rules
├── README.md               # Full documentation
├── DEPLOYMENT.md           # Deployment guide
└── QUICKSTART.md           # This file
```

---

## 🎨 Customization Quick Tips

### Change Website Title
Edit `index.html`, line 5:
```html
<title>Your New Title Here</title>
```

### Change Colors
Edit `css/styles.css`, lines 12-20:
```css
--primary-color: #2c3e50;      /* Change this */
--secondary-color: #e74c3c;    /* And this */
```

### Add More Products
Duplicate a product card in `index.html` and change:
- Product name
- Price
- Category (data-category attribute)

### Update Contact Info
Edit the contact section in `index.html`:
```html
<p><strong>Email:</strong> your-email@nexorastate.tn</p>
<p><strong>Phone:</strong> +216 XX XXX XXXX</p>
```

---

## ✨ Features at a Glance

✅ Product filtering by category
✅ Smooth scrolling navigation
✅ Responsive mobile design
✅ Contact form with validation
✅ Scroll animations
✅ Mobile hamburger menu
✅ Featured products showcase

---

## 🚀 Ready to Deploy?

See [DEPLOYMENT.md](DEPLOYMENT.md) for:
- GitHub Pages (FREE)
- Netlify (FREE)
- Vercel (FREE)
- Custom domain setup
- Monitoring & maintenance

---

## 🔗 Key Sections

| Section | File | Lines |
|---------|------|-------|
| Navigation | `index.html` | 14-33 |
| Hero Banner | `index.html` | 35-44 |
| About Us | `index.html` | 46-58 |
| Featured Items | `index.html` | 60-80 |
| Shop/Products | `index.html` | 82-160 |
| Why Us | `index.html` | 162-188 |
| Contact Form | `index.html` | 190-219 |
| Styling | `css/styles.css` | All |
| Interactivity | `js/script.js` | All |

---

## 🐛 Common Issues & Fixes

### Issue: Styles not loading
**Solution:** Make sure `css/styles.css` path is correct in `index.html`

### Issue: Images not showing
**Solution:** Verify image files exist in repository

### Issue: JavaScript not working
**Solution:** Check browser console for errors (F12 → Console)

### Issue: Mobile menu not working
**Solution:** Ensure JavaScript is enabled in browser

---

## 📱 Test on Mobile

### Desktop Browser:
- Press `F12` to open Developer Tools
- Click device toggle (top-left)
- Select mobile device
- Check responsive layout

### Actual Phone:
- Find your local IP address
- From phone on same network, visit: `http://YOUR_IP:8000`

---

## 💡 Pro Tips

1. **Use real product images** - Replace gradient backgrounds with actual photos
2. **Enable Formspree** - Uncomment email form code in `js/script.js`
3. **Add more products** - Duplicate product cards for more items
4. **Customize colors** - Match your brand colors in CSS variables
5. **Add social links** - Update footer social media links
6. **Deploy early** - Test on GitHub Pages first

---

## 📚 Next Steps

1. ✅ Run locally and test
2. ✅ Customize content and colors
3. ✅ Add real product images
4. ✅ Deploy to GitHub Pages / Netlify / Vercel
5. ✅ Set up custom domain
6. ✅ Share with the world!

---

## 📧 Need Help?

- **Documentation:** See [README.md](README.md)
- **Deployment:** See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Code Issues:** Check [js/script.js](js/script.js) comments

---

## 🎯 What You Have

✨ **A Complete, Production-Ready Website!**

- Fully responsive design
- Modern styling with animations
- Interactive features
- Contact form with validation
- Mobile-optimized
- Zero dependencies (no frameworks needed)
- Easy to customize
- Ready for deployment

---

## 🚀 You're All Set!

Your NEXORASTATE website is ready to:
- Showcase your thrift store
- Attract customers
- Process inquiries
- Build your online presence

**Happy coding! 🎉**

---

**Last Updated:** July 2, 2026  
**Status:** Ready for Production ✅