/* NAVIGATION BAR */
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #f4f6f8;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366; /* Navy Blue */
  padding: 15px 30px;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-links li a:hover {
  text-decoration: underline;
}

/* HERO SECTION (Homepage) */
.hero-section {
  background-color: #003366;
  color: white;
  padding: 100px 20px;
  text-align: center;
}

.btn-primary {
  display: inline-block;
  background-color: white;
  color: #003366;
  padding: 12px 24px;
  margin-top: 20px;
  font-weight: bold;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #d1e0f0;
}

/* CARD GRID (Get Started page) */
.selection-section {
  max-width: 1000px;
  margin: 50px auto;
  padding: 0 20px;
}

.selection-section h2 {
  text-align: center;
  color: #003366;
  margin-bottom: 30px;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.card {
  background-color: white;
  border: 1px solid #ccc;
  border-left: 5px solid #003366;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.card h3 {
  margin: 0 0 10px;
  color: #003366;
}

.card p {
  margin: 0;
  color: #444;
  font-size: 14px;
}

/* Smooth Scrolling (Optional) */
html {
  scroll-behavior: smooth;
}