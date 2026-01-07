# Shekhar Mohanty Hemant - Personal Portfolio Website

A modern, dark-themed personal portfolio website built with React, designed for GitHub Pages deployment.

## 🌟 Features

- **Dark Mode Theme**: Professional dark aesthetic with teal accent colors
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Tab-Based Navigation**: Clean single-page application with URL hash routing
- **Four Main Sections**:
  - **CV/About**: Profile, education, work experience, skills, and achievements
  - **Projects**: Project showcase with tech stacks and links
  - **Research**: Academic publications and research work
  - **Blog**: Personal blog with modal-based post viewing

## 🚀 Deployment to GitHub Pages

### Method 1: Direct Push (Recommended)

1. **Create a GitHub Repository**
   - Go to [GitHub](https://github.com) and create a new repository
   - Name it `<your-username>.github.io` for a user site, or any name for a project site

2. **Initialize Git and Push**
   ```bash
   cd /path/to/this/folder
   git init
   git add .
   git commit -m "Initial commit - Personal portfolio website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repository-name>.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository's **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Select **/ (root)** folder
   - Click **Save**

4. **Access Your Site**
   - Your site will be available at:
     - User site: `https://<your-username>.github.io`
     - Project site: `https://<your-username>.github.io/<repository-name>`

### Method 2: Upload via GitHub Web Interface

1. Create a new repository on GitHub
2. Click "uploading an existing file"
3. Drag and drop all files from this folder
4. Commit the changes
5. Enable GitHub Pages in Settings

## 📁 File Structure

```
├── index.html      # Main HTML file
├── styles.css      # All styles (dark theme, responsive)
├── app.js          # React application (components, data, routing)
└── README.md       # This file
```

## ✏️ Customization

### Updating Your Information

All personal data is stored in the `app.js` file. Edit the following objects:

- `profileData` - Your name, title, contact info
- `educationData` - Your educational background
- `experienceData` - Work experience
- `skillsData` - Technical skills by category
- `projectsData` - Your projects
- `researchData` - Research publications
- `blogData` - Blog posts
- `achievementsData` - Achievements and awards

### Adding a Profile Picture

Replace the user icon with an actual image:

1. Add your image to the repository (e.g., `profile.jpg`)
2. In `styles.css`, update the `.profile-image` class
3. In `app.js`, update the `AboutSection` component to use an `<img>` tag

### Changing Theme Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #2dd4bf;    /* Main accent color */
    --accent-secondary: #14b8a6;  /* Hover states */
    --accent-dark: #0d9488;       /* Darker accent */
}
```

### Adding Blog Posts

Add new entries to `blogData` in `app.js`:

```javascript
{
    id: 5,
    title: "Your New Post Title",
    date: "January 7, 2025",
    excerpt: "A brief description...",
    content: "Full blog post content..."
}
```

## 🛠️ Technologies Used

- **React 18** - UI components
- **CSS3** - Custom styling with CSS variables
- **Font Awesome** - Icons
- **Inter Font** - Typography
- **Babel** - JSX transformation

## 📱 Responsive Breakpoints

- Desktop: > 900px
- Tablet: 600px - 900px
- Mobile: < 600px

## 🔧 Local Development

To test locally, you can use any simple HTTP server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📄 License

This project is open source and available under the MIT License.

---

Created with ❤️ by Shekhar Mohanty Hemant
