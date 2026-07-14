import { useState } from 'react';

const menuItems = [
  { name: 'Espresso Clásico', desc: 'Intenso y aromático, puro sabor del grano', price: '$2.50', image: '/images/espresso.jpeg', category: 'cafe', ingredients: ['Café espresso 100% arábica', 'Agua filtrada a 90°C'] },
  { name: 'Cappuccino', desc: 'Espresso con espuma de leche cremosa', price: '$3.50', image: '/images/capuccino.png', category: 'cafe', ingredients: ['Espresso doble', 'Leche entera vaporizada', 'Espuma de leche densa'] },
  { name: 'Café Latte', desc: 'Suave y cremoso, perfecto para el día', price: '$3.50', image: '/images/caffe_latte.png', category: 'cafe', ingredients: ['Espresso simple', 'Leche entera vaporizada', 'Microespuma sedosa'] },
  { name: 'Mocha', desc: 'Chocolate, espresso y leche en armonía', price: '$4.00', image: '/images/mocha.png', category: 'cafe', ingredients: ['Espresso doble', 'Chocolate negro 70%', 'Leche entera vaporizada', 'Nata montada'] },
  { name: 'Flat White', desc: 'Doble espresso con microespuma sedosa', price: '$4.00', image: '/images/flat_White.png', category: 'cafe', ingredients: ['Ristretto doble', 'Leche entera', 'Microespuma fina'] },
  { name: 'Matcha Latte', desc: 'Té matcha japonés con leche vaporizada', price: '$4.50', image: '/images/matchA_Latte.png', category: 'bebida', ingredients: ['Matcha ceremonial japonés', 'Leche de avena', 'Sirope de agave'] },
  { name: 'Chai Latte', desc: 'Especias aromáticas con leche caliente', price: '$4.00', image: '/images/Chai_Latte.jpeg', category: 'bebida', ingredients: ['Té negro Assam', 'Canela', 'Cardamomo', 'Jengibre', 'Clavo', 'Leche entera'] },
  { name: 'Smoothie de Frutas', desc: 'Fresas, plátano y yogur natural', price: '$5.00', image: '/images/Smoothie_de_frutAS.png', category: 'bebida', ingredients: ['Fresas frescas', 'Plátano', 'Yogur natural', 'Miel de abeja', 'Leche de almendra'] },
  { name: 'Limónada Natural', desc: 'Fresca y refrescante, endulzada con miel', price: '$2.50', image: '/images/limonada_natural.png', category: 'bebida', ingredients: ['Limón recién exprimido', 'Agua mineral', 'Miel artesanal', 'Hierbabuena fresca'] },
  { name: 'Croissant de Mantequilla', desc: 'Hojaldre dorado y hojaldrado', price: '$2.00', image: '/images/Croissint_deMantequilla.jpeg', category: 'comida', ingredients: ['Harina de trigo', 'Mantequilla francesa 84%', 'Levadura fresca', 'Sal marina', 'Huevo'] },
  { name: 'Sándwich Club', desc: 'Pollo, tocino, lechuga y tomate', price: '$6.50', image: '/images/sandwich_club.jpeg', category: 'comida', ingredients: ['Pan de molde artesano', 'Pechuga de pollo a la plancha', 'Tocino crujiente', 'Lechuga romana', 'Tomate fresco', 'Mayonesa casera'] },
  { name: 'Ensalada César', desc: 'Lechuga romana, crutones y aderezo casero', price: '$7.00', image: '/images/ensalada_cesar.jpeg', category: 'comida', ingredients: ['Lechuga romana', 'Crutones de pan', 'Parmesano rallado', 'Anchoas', 'Aderezo César casero'] },
  { name: 'Desayuno Completo', desc: 'Huevos, tostada, aguacate y café', price: '$8.50', image: '/images/desayuno_completo.jpeg', category: 'comida', ingredients: ['Huevos de corral', 'Tostada de masa madre', 'Aguacate Hass', 'Tomate cherry', 'Café americano'] },
  { name: 'Wrap de Pollo', desc: 'Pollo a la pimienta con vegetales frescos', price: '$7.50', image: '/images/wrap_de_pollo.jpg', category: 'comida', ingredients: ['Tortilla de trigo', 'Pollo marinado a la pimienta', 'Lechuga iceberg', 'Zanahoria rallada', 'Salsa yogur-menta'] },
  { name: 'Tarta de Queso', desc: 'Cremosa y con cobertura de frutos rojos', price: '$4.50', image: '/images/tarta_de_queso.jpeg', category: 'postre', ingredients: ['Queso crema', 'Nata líquida', 'Huevos', 'Azúcar moreno', 'Frutos rojos frescos'] },
  { name: 'Cupcake de Vainilla', desc: 'Esponjoso con frosting de mantequilla', price: '$3.00', image: '/images/cupcake_de_vainilla.jpeg', category: 'postre', ingredients: ['Harina de repostería', 'Mantequilla', 'Azúcar glass', 'Vainilla de Madagascar', 'Huevos'] },
  { name: 'Galleta de Chocolate', desc: 'Crujiente por fuera, suave por dentro', price: '$1.50', image: '/images/Galleta_de_chocolate.jpg', category: 'postre', ingredients: ['Chocolate negro 70%', 'Harina integral', 'Mantequilla', 'Azúcar de caña', 'Sal en escamas'] },
  { name: 'Pain au Chocolat', desc: 'Chocolate belga envuelto en hojaldre', price: '$3.50', image: '/images/pain_au_chocolat.jpeg', category: 'postre', ingredients: ['Masa de hojaldre artesana', 'Chocolate belga 60%', 'Mantequilla francesa', 'Huevo para barnizar'] },
];

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Cafés', value: 'cafe' },
  { label: 'Bebidas', value: 'bebida' },
  { label: 'Comida', value: 'comida' },
  { label: 'Postres', value: 'postre' },
];

export default function MenuSection() {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'all' ? menuItems : menuItems.filter(i => i.category === active);

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <h2>Nuestro Menú</h2>
        <div className="menu-filters">
          {filters.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${active === f.value ? 'active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {filtered.map((item, i) => (
            <div className="menu-card" key={i} onClick={() => setSelected(item)}>
              <img src={item.image} alt={i} className="menu-card-img" />
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <span className="price">{item.price}</span>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>✕</button>
            <img src={selected.image} alt={selected.name} className="modal-img" />
            <div className="modal-body">
              <h2>{selected.name}</h2>
              <p className="modal-desc">{selected.desc}</p>
              <h3>Ingredientes</h3>
              <ul className="modal-ingredients">
                {selected.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
              <span className="price modal-price">{selected.price}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}