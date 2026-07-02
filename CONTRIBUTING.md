# Contributing to NEXORASTATE

Thank you for your interest in contributing to NEXORASTATE! This document provides guidelines and instructions for contributing.

## 🤝 How to Contribute

### 1. Report Bugs
Found a bug? Help us fix it!

**Before creating a bug report, check if the issue already exists.**

When reporting a bug, include:
- Clear description of the problem
- Steps to reproduce
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your browser and OS

### 2. Suggest Features
Have an idea for improvement?

**Before suggesting a feature, check if it's already been suggested.**

When suggesting a feature:
- Clearly describe the feature
- Explain why it would be useful
- Provide examples of how it would work
- Consider how it fits with the project

### 3. Submit Code Changes

#### Fork the Repository
```bash
# Click "Fork" button on GitHub
# Clone your fork
git clone https://github.com/YOUR_USERNAME/NEXORASTATE.git
cd NEXORASTATE
```

#### Create a Branch
```bash
# Create a new branch for your feature
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/bug-description
```

#### Make Your Changes
- Keep changes focused and minimal
- Follow the existing code style
- Test your changes thoroughly
- Update documentation if needed

#### Commit Your Changes
```bash
git add .
git commit -m "Clear description of your changes"
# Good commit messages explain WHAT and WHY, not just WHAT
```

#### Push to GitHub
```bash
git push origin feature/your-feature-name
```

#### Create a Pull Request
1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR description:
   - What does this PR do?
   - Why is it needed?
   - Related issues (if any)
4. Submit the PR

---

## 📋 Contribution Guidelines

### Code Style

#### HTML
```html
<!-- Use semantic HTML -->
<section id="shop">
  <div class="container">
    <h2>Shop</h2>
    <!-- Content here -->
  </div>
</section>

<!-- Proper indentation (2 spaces) -->
<!-- Use meaningful class names -->
```

#### CSS
```css
/* Group related styles */
.section {
  padding: 2rem;
  background: white;
}

/* Use CSS variables for colors */
color: var(--primary-color);

/* Mobile-first approach */
@media (min-width: 768px) {
  /* Desktop styles */
}
```

#### JavaScript
```javascript
// Use clear variable names
const productCards = document.querySelectorAll('.product-card');

// Comment complex logic
// Use const/let, not var
// Use arrow functions when appropriate
const filterProducts = (category) => {
  // Implementation
};

// Add comments for important sections
```

### File Organization
```
NEXORASTATE/
├── index.html          # Main file
├── css/
│   └── styles.css      # All styles in one file
├── js/
│   └── script.js       # All scripts in one file
├── images/             # All images here
└── docs/               # Documentation files
```

### Naming Conventions
- **HTML ids/classes:** Use kebab-case (`.product-card`, `#contact-form`)
- **JavaScript variables:** Use camelCase (`const productName = ...`)
- **Folders:** Use lowercase with hyphens if multiple words
- **Files:** Use lowercase with hyphens or underscores

---

## ✅ Before Submitting

- [ ] Code follows the style guide
- [ ] No console errors or warnings
- [ ] Changes work on desktop and mobile
- [ ] Documentation is updated
- [ ] Commit messages are clear
- [ ] No unnecessary files are included
- [ ] Code is tested thoroughly

---

## 🧪 Testing Your Changes

### Local Testing
```bash
# Use a local server
python -m http.server 8000
# Visit http://localhost:8000
```

### Test Checklist
- [ ] All links work
- [ ] Forms submit properly
- [ ] Animations play smoothly
- [ ] Responsive design works (test different screen sizes)
- [ ] Images load correctly
- [ ] No JavaScript errors (open browser console)

### Browser Compatibility
Test on:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

---

## 📚 Types of Contributions

### Bug Fixes
Focus on fixing specific issues without changing functionality.

```javascript
// Before: Bug in filter
if (filterValue == 'all') { // Wrong equality
```

```javascript
// After: Fixed
if (filterValue === 'all') { // Correct equality
```

### Features
Add new functionality or improve existing features.

Examples:
- New product categories
- Advanced filtering
- User authentication
- Shopping cart
- Product search

### Documentation
- Improve README
- Add code comments
- Create tutorials
- Fix typos
- Add examples

### Performance
- Optimize images
- Minify CSS/JS
- Improve load times
- Reduce file sizes

### Styling
- Improve visual design
- Add animations
- Better color scheme
- Responsive improvements

---

## 🚫 What NOT to Do

❌ Don't commit:
- `node_modules/` folder
- `.env` files with secrets
- IDE settings (`.vscode/`, `.idea/`)
- Backup or temporary files

❌ Don't:
- Use external frameworks without approval
- Break existing functionality
- Ignore responsive design
- Add unnecessary dependencies

---

## 📝 Commit Message Guidelines

### Good Commit Messages
```
Add product search functionality
Fix mobile menu closing on scroll
Update deployment documentation
Improve button hover animations
```

### Bad Commit Messages
```
fix bug
update
changes
asdf
```

### Format
```
[Type] Brief description (50 chars max)

Detailed explanation of changes (if needed)
- Include what changed
- Include why it changed
- Include how it works
```

**Types:**
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation
- `style:` Code style (no logic change)
- `refactor:` Code refactor
- `perf:` Performance improvement

---

## 🏆 Recognition

Contributors will be:
- Added to the contributors list (if desired)
- Mentioned in commit messages
- Acknowledged in README

---

## ❓ Questions?

- **GitHub Issues:** Open an issue with your question
- **Discussions:** Use GitHub Discussions (if enabled)
- **Email:** Contact the maintainer

---

## 📜 Code of Conduct

### Be Respectful
- Treat all contributors with respect
- Welcome diverse perspectives
- Be patient with others
- Use inclusive language

### Be Constructive
- Give helpful feedback
- Acknowledge good work
- Focus on ideas, not people
- Help others learn

### Be Professional
- No harassment or discrimination
- No spam or self-promotion
- Keep discussions on-topic
- Report violations respectfully

---

## 📖 Additional Resources

- [GitHub Guides](https://guides.github.com)
- [How to Write Good Commit Messages](https://cbea.ms/git-commit/)
- [Git Documentation](https://git-scm.com/doc)
- [Web Development Best Practices](https://developer.mozilla.org/)

---

## 🎯 Development Roadmap

Planned improvements:
- [ ] Backend integration
- [ ] User authentication
- [ ] Shopping cart functionality
- [ ] Product search
- [ ] Admin dashboard
- [ ] Payment processing
- [ ] Customer reviews
- [ ] Inventory management

Interested in working on these? Open an issue first!

---

## 📊 Current Contributors

- **thereal4youb** - Project creator and maintainer

Want to be listed here? Submit your first PR! 🚀

---

## 📄 License

By contributing to NEXORASTATE, you agree that your contributions will be licensed under the MIT License.

---

## Thank You! 🙏

Every contribution, no matter how small, helps make NEXORASTATE better. Thank you for taking the time to contribute!

**Happy coding! 💻✨**