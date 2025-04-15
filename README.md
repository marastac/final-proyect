# Escala - Online Course Platform

Escala is a modern web platform where users can create, manage, and purchase online courses focused on AI, digital business, and personal development.

## 🧠 Features

- 🏠 **Homepage** with featured courses, newsletter, and search/filter options
- 👤 **Authentication system** (Login & Register with avatar and address)
- 🎁 **Welcome modal** for first-time visitors
- 📚 **Courses listing** with dynamic filtering and search
- 🎨 **Course detail page** with carousel, color selection, and quantity input
- ❤️ **Wishlist system** stored in `localStorage`
- 🛒 **Cart system** with item quantity update, removal, and total calculation
- ✅ **Checkout form** with form validation and success message
- 📈 **Student dashboard** displaying purchased courses and progress
- 🤖 **AI course generator** using OpenAI API
- 🧭 **Breadcrumb navigation** across all pages
- 🔒 **Auth guard** to protect private routes from unauthenticated users

## 🚀 Technologies Used

- HTML5, CSS3, JavaScript (ES6)
- OpenAI API for AI course generation (optional)
- `localStorage` for data persistence (cart, wishlist, auth token)

## 🗂️ Folder Structure

/css → Global styles
/js → Page logic and utilities
/json/cursos.json → Course data
/auth → Login and Register pages
/dashboard → User dashboard
/courses → Course listing and detail pages
/cart → Shopping cart
/checkout → Checkout form
/ai-course → AI course generator
/wishlist → Saved wishlist items

## 🔐 Simulated Login

The authentication system uses a simulated `authToken` stored in localStorage. In a real app, this should be replaced by a secure backend.

## 💡 Getting Started

To run locally:

1. Download the project folder
2. Open `index.html` in a browser
3. Explore all sections and test the flow
4. Optionally connect the AI generator to your OpenAI API key

## 📦 To Do

- [ ] Connect to a backend for real user sessions
- [ ] Save wishlist/cart to database
- [ ] Enable course publishing by users

## 📫 Contact

For questions or suggestions, contact us at **team@escala.com**.

---

✅ Let me know if you’d like a Spanish version or if you want to continue con alguna página adicional como `directory.html`, un `404.html`, o animaciones extra para mejorar la UX.
