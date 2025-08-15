# Professional Portfolio Website

Welcome to your new professional portfolio website! This site is designed to be a clean, modern, and easily maintainable showcase of your work. It's built with simple HTML, CSS, and JavaScript, making it fast, secure, and easy to host on GitHub Pages.

## How to Customize and Add Content

This guide will walk you through the most common tasks, like adding a new project or writing a new blog post.

### Project Structure Overview

*   `index.html`: Your homepage.
*   `projects.html`, `writing.html`, etc.: The main pages for each section.
*   `css/style.css`: The main stylesheet. All visual design (colors, fonts, layout) is controlled here.
*   `js/main.js`: The main JavaScript file. It currently handles the project filtering.
*   `assets/`: This folder contains all your assets.
    *   `assets/images/`: Store your images here (e.g., `.png`, `.jpg`).
    *   `assets/documents/`: Store your documents here (e.g., `.pdf`).
*   `projects/`: Contains a separate HTML file for each individual project.
*   `blog/`: Contains a separate HTML file for each individual blog post.

---

### Task: Adding a New Curriculum Project

Let's say you want to add a new project called "Civic Engagement Challenge".

**Step 1: Create the Project's Detail Page**

1.  Go into the `projects/` folder.
2.  Create a new file. It's best to use a simple name, like `civic-challenge.html`.
3.  Copy the content of an existing project page (like `projects/project1.html`) and paste it into your new file. This gives you the correct structure.
4.  Update the content:
    *   Change the `<title>`.
    *   Update the `<h2>` heading and the subtitle.
    *   Change the `src` of the banner image (`<img src="../assets/images/your-new-image.png">`).
    *   Rewrite the "Overview" and "Learning Objectives".
    *   If you have a PDF, place it in the `assets/documents/` folder and update the link.

**Step 2: Add the Project to the Main Gallery**

1.  Open `projects.html`.
2.  Find the `<div class="gallery">`.
3.  Copy one of the existing `<a href="..." class="gallery-item">...</a>` blocks.
4.  Paste it and update the details:
    *   Change the `href` to point to your new file: `href="projects/civic-challenge.html"`.
    *   **Important**: Add a `data-category` attribute that matches one of the filters (e.g., `data-category="interdisciplinary"`). The current categories are `history`, `ela`, and `interdisciplinary`. You can add more by editing the filter buttons in `projects.html`.
    *   Update the thumbnail image `src`, the `<h4>` title, and the `<p>` description.

---

### Task: Writing a New Blog Post

This is very similar to adding a project.

**Step 1: Create the Blog Post File**

1.  Go into the `blog/` folder.
2.  Create a new file, like `my-new-post.html`.
3.  Copy the content from an existing post (like `blog/post1.html`) and paste it into your new file.
4.  Update the content: change the `<title>`, `<h2>` heading, date, and write your post content in the `<div class="post-content">`.

**Step 2: Add the Post to the Blog List**

1.  Open `blog.html`.
2.  Find the `<section class="blog-list">`.
3.  Copy an existing `<div class="blog-post-summary">...</div>` block.
4.  Paste it and update the details:
    *   Change the `href` in the link to point to your new file: `href="blog/my-new-post.html"`.
    *   Update the post title, date, and the summary paragraph.

---

### Customizing the Design

If you want to change colors or fonts, all of that is controlled in `css/style.css`. The key variables are at the top of the file under the `:root` section.

```css
:root {
    --primary-color: #4A5568; /* Charcoal */
    --secondary-color: #A0AEC0; /* Slate Gray */
    --accent-color: #D69E2E; /* Warm Gold */
    /* ... and so on */
}
```

By changing these color codes, you can easily change the entire look and feel of the site.

Good luck, and enjoy your new portfolio!
