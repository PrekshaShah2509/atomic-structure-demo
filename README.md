# React Atomic Design Example

> **Author:** Preksha Shah

A clean, minimal React project structured according to the Atomic Design methodology, using Vite, TypeScript, React, and custom CSS for styling.

---

## 📁 Project Structure

```
src/
  components/
    atoms/       # Smallest, reusable UI elements (e.g., Button)
    molecules/   # Groups of atoms (e.g., InputGroup)
    organisms/   # Complex UI sections (e.g., Header)
    templates/   # Page layouts (e.g., MainTemplate)
  pages/         # Route-level components (e.g., SignupPage, HomePage)
```

- **components/**: All reusable UI building blocks, organized by Atomic Design.
- **pages/**: Top-level pages for routing, composed of components.

---

## ➕ How to Add New Components

1. **Choose the right level** (atom, molecule, organism, template).
2. **Create a new file** in the appropriate folder (e.g., `src/components/atoms/MyAtom.tsx`).
3. **Export it** in the folder's `index.ts` file.
4. **Document your component** with JSDoc and author comments.

---

## ▶️ How to Run the Project Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 Example: Composing Components (Atom → Page)

- **Atom:** `Button` (in `atoms/`)
- **Molecule:** `InputGroup` (uses `Button`)
- **Organism:** `Header` (uses `InputGroup`)
- **Template:** `MainTemplate` (uses `Header`)
- **Page:** `SignupPage` (uses all above)

See `src/pages/SignupPage.tsx` for a full example.

---

## 📝 Best Practices

- Use clear, modular file and folder names.
- Export all components via `index.ts` files.
- Use custom CSS for styling (see `src/index.css`).
- Document all code and mention the author in every file.

---

## 🤝 Contributing

Contributions are welcome! Please open issues or pull requests for improvements, bug fixes, or new features.

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## ⭐ Star This Repo

If you found this project helpful or inspiring, please consider [starring the repository on GitHub](https://github.com/your-username/react-atomic-design-example) to show your support!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📣 Author

**Preksha Shah**
