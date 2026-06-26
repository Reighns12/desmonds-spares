
// ============================================
// DESMOND'S SPARES - SHARED DATA & UTILITIES
// ============================================

const DB = {
  // Initial sample data
  products: [
    { id: 1, name: "Disc Brake Pads", category: "brakes", subcategory: "disc_pads", type: "Front", vehicleType: "vehicle", price: 4500, stock: 12, minStock: 5, image: "🛑" },
    { id: 2, name: "Disc Brake Pads", category: "brakes", subcategory: "disc_pads", type: "Rear", vehicleType: "vehicle", price: 3800, stock: 8, minStock: 5, image: "🛑" },
    { id: 3, name: "Brake Shoes", category: "brakes", subcategory: "shoes", type: "Rear", vehicleType: "vehicle", price: 3200, stock: 15, minStock: 5, image: "🛑" },
    { id: 4, name: "Brake Fluid", category: "brakes", subcategory: "fluid", type: "DOT 4", vehicleType: "both", price: 1500, stock: 20, minStock: 10, image: "🧴" },
    { id: 5, name: "Brake Disc Rotor", category: "brakes", subcategory: "rotor", type: "Front", vehicleType: "vehicle", price: 8500, stock: 6, minStock: 3, image: "⚙️" },
    { id: 6, name: "Hydraulic Brake Line", category: "brakes", subcategory: "line", type: "Universal", vehicleType: "both", price: 2800, stock: 10, minStock: 5, image: "🔗" },
    { id: 7, name: "Moto Brake Pads", category: "brakes", subcategory: "disc_pads", type: "Front", vehicleType: "moto", price: 1800, stock: 25, minStock: 10, image: "🏍️" },
    { id: 8, name: "Moto Brake Shoes", category: "brakes", subcategory: "shoes", type: "Rear", vehicleType: "moto", price: 1200, stock: 30, minStock: 10, image: "🏍️" },
    { id: 9, name: "Engine Oil", category: "engine", subcategory: "oil", type: "10W-40", vehicleType: "both", price: 2500, stock: 40, minStock: 15, image: "🛢️" },
    { id: 10, name: "Oil Filter", category: "engine", subcategory: "filter", type: "Spin-on", vehicleType: "vehicle", price: 1800, stock: 18, minStock: 8, image: "🔧" },
    { id: 11, name: "Spark Plug", category: "engine", subcategory: "spark", type: "Iridium", vehicleType: "both", price: 1200, stock: 50, minStock: 20, image: "⚡" },
    { id: 12, name: "Air Filter", category: "engine", subcategory: "air_filter", type: "Panel", vehicleType: "vehicle", price: 2200, stock: 14, minStock: 6, image: "🌬️" },
    { id: 13, name: "Moto Chain", category: "drivetrain", subcategory: "chain", type: "520", vehicleType: "moto", price: 4500, stock: 9, minStock: 5, image: "⛓️" },
    { id: 14, name: "Sprocket Set", category: "drivetrain", subcategory: "sprocket", type: "Front+Rear", vehicleType: "moto", price: 3800, stock: 7, minStock: 4, image: "⚙️" },
    { id: 15, name: "Clutch Plate", category: "transmission", subcategory: "clutch", type: "Standard", vehicleType: "both", price: 5500, stock: 5, minStock: 3, image: "🔩" },
    { id: 16, name: "Ball Joint", category: "suspension", subcategory: "joint", type: "Upper", vehicleType: "vehicle", price: 3200, stock: 11, minStock: 5, image: "🔩" },
    { id: 17, name: "Shock Absorber", category: "suspension", subcategory: "shock", type: "Rear", vehicleType: "both", price: 12000, stock: 4, minStock: 2, image: "🌀" },
    { id: 18, name: "Tie Rod End", category: "steering", subcategory: "tie_rod", type: "Left", vehicleType: "vehicle", price: 2800, stock: 8, minStock: 4, image: "🔗" },
    { id: 19, name: "Battery", category: "electrical", subcategory: "battery", type: "12V", vehicleType: "both", price: 15000, stock: 6, minStock: 3, image: "🔋" },
    { id: 20, name: "Alternator Belt", category: "electrical", subcategory: "belt", type: "V-Belt", vehicleType: "vehicle", price: 1800, stock: 22, minStock: 10, image: "🔄" },
  ],
  sales: [],
  users: [
    { username: "admin", password: "desmond123", role: "admin" },
    { username: "employee", password: "spares456", role: "employee" }
  ]
};

// Categories with icons
const CATEGORIES = {
  brakes: { name: "Brakes", icon: "🛑", types: ["Disc Pads", "Shoes", "Fluid", "Rotor", "Line", "Caliper"] },
  engine: { name: "Engine", icon: "🛢️", types: ["Oil", "Filter", "Spark Plug", "Air Filter", "Gasket"] },
  drivetrain: { name: "Drivetrain", icon: "⛓️", types: ["Chain", "Sprocket", "Belt", "Axle"] },
  transmission: { name: "Transmission", icon: "⚙️", types: ["Clutch", "Gear", "Bearing", "Seal"] },
  suspension: { name: "Suspension", icon: "🌀", types: ["Shock", "Spring", "Joint", "Bushing"] },
  steering: { name: "Steering", icon: "🔄", types: ["Tie Rod", "Pump", "Rack", "Column"] },
  electrical: { name: "Electrical", icon: "⚡", types: ["Battery", "Alternator", "Starter", "Sensor"] },
  body: { name: "Body Parts", icon: "🚗", types: ["Bumper", "Fender", "Door", "Mirror"] }
};

// ============================================
// LOCALSTORAGE DATABASE
// ============================================

const Storage = {
  init() {
    if (!localStorage.getItem('desmonds_products')) {
      localStorage.setItem('desmonds_products', JSON.stringify(DB.products));
    }
    if (!localStorage.getItem('desmonds_sales')) {
      localStorage.setItem('desmonds_sales', JSON.stringify(DB.sales));
    }
    if (!localStorage.getItem('desmonds_users')) {
      localStorage.setItem('desmonds_users', JSON.stringify(DB.users));
    }
  },

  getProducts() {
    return JSON.parse(localStorage.getItem('desmonds_products') || '[]');
  },

  saveProducts(products) {
    localStorage.setItem('desmonds_products', JSON.stringify(products));
  },

  getSales() {
    return JSON.parse(localStorage.getItem('desmonds_sales') || '[]');
  },

  saveSales(sales) {
    localStorage.setItem('desmonds_sales', JSON.stringify(sales));
  },

  getUsers() {
    return JSON.parse(localStorage.getItem('desmonds_users') || '[]');
  },

  addSale(sale) {
    const sales = this.getSales();
    sale.id = Date.now();
    sale.date = new Date().toISOString();
    sales.unshift(sale);
    this.saveSales(sales);
    return sale;
  },

  updateProductStock(productId, quantity) {
    const products = this.getProducts();
    const idx = products.findIndex(p => p.id === productId);
    if (idx !== -1) {
      products[idx].stock -= quantity;
      this.saveProducts(products);
      return products[idx];
    }
    return null;
  },

  restockProduct(productId, quantity) {
    const products = this.getProducts();
    const idx = products.findIndex(p => p.id === productId);
    if (idx !== -1) {
      products[idx].stock += parseInt(quantity);
      this.saveProducts(products);
      return products[idx];
    }
    return null;
  },

  addProduct(product) {
    const products = this.getProducts();
    product.id = Math.max(...products.map(p => p.id), 0) + 1;
    products.push(product);
    this.saveProducts(products);
    return product;
  },

  deleteProduct(productId) {
    let products = this.getProducts();
    products = products.filter(p => p.id !== productId);
    this.saveProducts(products);
  }
};

// ============================================
// AUTH
// ============================================

const Auth = {
  login(username, password) {
    const users = Storage.getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
      sessionStorage.setItem('desmonds_user', JSON.stringify(user));
      return user;
    }
    return null;
  },

  logout() {
    sessionStorage.removeItem('desmonds_user');
  },

  getUser() {
    return JSON.parse(sessionStorage.getItem('desmonds_user') || 'null');
  },

  isLoggedIn() {
    return !!this.getUser();
  },

  isAdmin() {
    const user = this.getUser();
    return user && user.role === 'admin';
  },

  checkAuth() {
    if (!this.isLoggedIn()) {
      window.location.href = 'login.html';
      return false;
    }
    return true;
  }
};

// ============================================
// UTILITIES
// ============================================

const Utils = {
  formatMoney(amount) {
    return 'UGX ' + amount.toLocaleString('en-UG');
  },

  formatDate(dateStr) {
    return new Date(dateStr).toLocaleString('en-UG', {
      day: '2-digit', month: 'short', year: 'numeric',
      hour: '2-digit', minute: '2-digit'
    });
  },

  getStockStatus(product) {
    if (product.stock === 0) return { text: 'Out of Stock', class: 'out-stock-text', badge: 'badge-red' };
    if (product.stock <= product.minStock) return { text: 'Low Stock', class: 'out-stock-text', badge: 'badge-yellow' };
    return { text: 'In Stock', class: 'in-stock-text', badge: 'badge-green' };
  },

  getCategories() {
    return Object.entries(CATEGORIES).map(([key, val]) => ({ key, ...val }));
  },

  getProductTypes(category) {
    return CATEGORIES[category]?.types || [];
  },

  toast(message, type = 'success') {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  },

  confirm(message) {
    return new Promise(resolve => {
      if (window.confirm(message)) resolve(true);
      else resolve(false);
    });
  }
};

// Initialize storage on load
Storage.init();
