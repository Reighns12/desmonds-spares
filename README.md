# 🏍️ Desmond's Spares - Business Website

A complete static website for managing a vehicle & motorcycle spare parts business.

## 📁 File Structure

```
desmonds-spares/
├── index.html              # Customer/Employee Store (browse & sell)
├── css/
│   └── style.css           # All styles
├── js/
│   └── shared.js           # Data, storage, auth, utilities
└── admin/
    ├── login.html          # Employee/Admin login
    ├── dashboard.html      # Overview & analytics
    ├── inventory.html      # Stock management & restocking
    └── sales.html          # Sales history & export
```

## 🔐 Demo Login Credentials

| Role | Username | Password |
|------|----------|----------|
| Admin | `admin` | `desmond123` |
| Employee | `employee` | `spares456` |

## 🚀 How to Use

### Option 1: Open Locally
Simply open `index.html` in your browser. All data is stored in your browser's localStorage.

### Option 2: Host on GitHub Pages
1. Create a new GitHub repository
2. Upload all files from the `desmonds-spares` folder
3. Go to **Settings → Pages**
4. Select branch `main` and folder `/ (root)`
5. Your site will be live at `https://yourusername.github.io/repo-name/`

## ✨ Features

### Store (index.html)
- Browse parts by category: Brakes, Engine, Drivetrain, etc.
- Filter by Vehicle 🚗 or Motorcycle 🏍️
- Search products
- Click any product → select type → enter quantity → confirm sale
- Stock auto-deducts after each sale
- Out of stock items are blocked from sale

### Admin Dashboard
- **Dashboard**: Live stats, low stock alerts, recent sales, category breakdown
- **Inventory**: View all products, filter by stock status, restock items, add new products, delete products
- **Sales**: Full transaction history, revenue stats, CSV export

## ⚠️ Important Notes

- **This is a static prototype** — data is stored in browser localStorage
- Data will be lost if browser storage is cleared
- For a production version, you'll need a backend (Node.js, Python, etc.) + database
- Admin can add/delete products; Employees can only restock and sell

## 🛠️ Future Upgrades

To make this production-ready, add:
- Backend API (Node.js/Express or Python/Flask)
- Real database (PostgreSQL, MongoDB, or Supabase)
- Real authentication (JWT tokens)
- Multi-user support with role-based access
- Barcode scanning for quick sales
- Receipt printing
