// DADOS DOS PRODUTOS COM LINKS DE IMAGEM E DESCRIÇÕES
const products = [
  // INFANTIL
  { id: 1, name: "Capivara", category: "INFANTIL", desc: "Peso: 50g", image: "https://i.postimg.cc/T24MNPXF/capivara-1.webp" },
  { id: 2, name: "Coelho", category: "INFANTIL", desc: "Peso: 50g", image: "https://i.postimg.cc/FR2g2CXk/coelho-50.jpg" },
  { id: 3, name: "Coruja", category: "INFANTIL", desc: "Peso: 100g", image: "https://i.postimg.cc/j5YQSPNM/coruja.jpg" },
  { id: 4, name: "Pato", category: "INFANTIL", desc: "Peso: 80g", image: "https://i.postimg.cc/TPgN0RcT/pato.jpg" },
  { id: 5, name: "Urso", category: "INFANTIL", desc: "Peso: 70g", image: "https://i.postimg.cc/t40h5Fv3/urso.jpg" },
  { id: 6, name: "Unicórnio", category: "INFANTIL", desc: "Peso: 15g", image: "https://i.postimg.cc/6QPn1SBf/unicornio.jpg" },
  { id: 7, name: "Dinossauros", category: "INFANTIL", desc: "Opções de 15g e 100g", image: "https://i.postimg.cc/BbpvRL2k/dinossaro.jpg" },
  { id: 8, name: "Bola", category: "INFANTIL", desc: "Peso: 100g", image: "https://i.postimg.cc/Y0LZg1jc/bola-flory.jpg" },
  { id: 9, name: "Bola Branca", category: "INFANTIL", desc: "Peso: 100g", image: "https://i.postimg.cc/XqkGQsjZ/bola-branca.jpg" },
  { id: 10, name: "Chuteira", category: "INFANTIL", desc: "Peso: 150g", image: "https://i.postimg.cc/d1sTLBHr/chuteira-ao-leite-150g.webp" },
  { id: 11, name: "Kit Ferramentas", category: "INFANTIL", desc: "Peso: 120g", image: "https://i.postimg.cc/j5CKCnbv/ferramentas.jpg" },
  { id: 12, name: "Kit Maquiagem", category: "INFANTIL", desc: "Peso: 75g", image: "https://i.postimg.cc/d3jKx2Rg/maquiagem.jpg" },
  { id: 13, name: "Celular 35g", category: "INFANTIL", desc: "", image: "https://i.postimg.cc/Sx7G6ZpC/telefone-choco.jpg" },
  { id: 14, name: "Chocophone", category: "INFANTIL", desc: "Peso: 70g", image: "https://i.postimg.cc/Zq56r4cQ/celular.jpg" },

  // BARRAS
  { id: 15, name: "Barra 100g", category: "BARRAS", desc: "Disponível em diversas opções de mensagens e escritos gravados nas barras.", image: "https://i.postimg.cc/j5ZH45Lq/barra.jpg" },
  { id: 16, name: "Barra 150g Branca", category: "BARRAS", desc: "", image: "https://i.postimg.cc/y8HTKw4x/barra-150.jpg" },
  { id: 17, name: "Barra 20g Soja", category: "BARRAS", desc: "", image: "https://i.postimg.cc/GhQ4BNTw/soja-20.jpg" },
  { id: 18, name: "Barra 27g Diversas", category: "BARRAS", desc: "Disponível em vários sabores. Consulte as opções no WhatsApp!", image: "https://i.postimg.cc/SRmykSrc/barra-27.jpg" },
  { id: 19, name: "Barra 27g Diet", category: "BARRAS", desc: "", image: "https://i.postimg.cc/6qzz1cqZ/barra-diet.jpg" },
  { id: 20, name: "Barra 70% Gramado 100g", category: "BARRAS", desc: "", image: "https://i.postimg.cc/XJ1pHy3p/barra-70.jpg" },
  { id: 21, name: "Barra 70% / 50% 27g", category: "BARRAS", desc: "", image: "https://i.postimg.cc/y873NKfH/barra-27g-70.webp" },
  { id: 22, name: "Barra Choco Branco com Café 50g", category: "BARRAS", desc: "", image: "https://i.postimg.cc/j2Z0Qzr8/branco-com-cafe.jpg" },
  { id: 23, name: "Barras Trufadas 25g", category: "BARRAS", desc: "Disponível em vários sabores e recheios.", image: "https://i.postimg.cc/B6Sm5RQL/barra-trufadda.jpg" },
  { id: 24, name: "Chocolate Ao Leite com Menta", category: "BARRAS", desc: "Peso: 50g. Consulte os diversos sabores especiais disponíveis.", image: "https://i.postimg.cc/QMtbH16s/menta.jpg" },
  { id: 25, name: "Barra Chocolate Branco de Maracujá com Coco", category: "BARRAS", desc: "Peso: 50g", image: "https://i.postimg.cc/vHG3Mj60/choco-maacu-com-cooco.jpg" },
  { id: 26, name: "Chocolate Branco com Morango", category: "BARRAS", desc: "Peso: 50g", image: "https://i.postimg.cc/9f9Gyt7m/choco-com-morango.jpg" },
  { id: 27, name: "Caixa com Barras", category: "BARRAS", desc: "Opções de 54g, 108g, 216g e 432g", image: "https://i.postimg.cc/ZqdW7qnf/caixa-barra.webp" },

  // BOMBONS
  { id: 28, name: "Bombom 15g", category: "BOMBONS", desc: "Disponível em vários sabores de recheio.", image: "https://i.postimg.cc/brJ856gF/bombom.jpg" },
  { id: 29, name: "Caixa de Bombom", category: "BOMBONS", desc: "Opções de 60g, 90g, 120g, 180g e 270g (Seleção variada).", image: "https://i.postimg.cc/0ygRG2gN/caixa-bombom.jpg" },
  { id: 30, name: "Caixa de Bombom de Licor", category: "BOMBONS", desc: "Opções de 135g e 225g (Sortimento de licores finos).", image: "https://i.postimg.cc/s2HRhPsb/caixa-bombom-licor.jpg" },

  // TRUFAS
  { id: 31, name: "Bombonier com 10 Trufas 200g", category: "TRUFAS", desc: "", image: "https://i.postimg.cc/YqzZFNx1/bombonier-trufas.webp" },
  { id: 32, name: "Caixa com Trufas 160g", category: "TRUFAS", desc: "", image: "https://i.postimg.cc/SscDhqTz/cx-trufas.jpg" },

  // ALFAJORES
  { id: 33, name: "Alfajor 50g", category: "ALFAJORES", desc: "", image: "https://i.postimg.cc/gjZddw9f/alfajor.jpg" },
  { id: 34, name: "Alfajor 50g Branco", category: "ALFAJORES", desc: "", image: "https://i.postimg.cc/L8HXkTFF/alfajor-b.jpg" },
  { id: 35, name: "Caixa de Alfajores", category: "ALFAJORES", desc: "Disponível em caixas de 100g e 200g.", image: "https://i.postimg.cc/4ygZffJ4/alfajor-caixa.jpg" },

  // DRÁGEAS
  { id: 36, name: "Drágeas", category: "DRÁGEAS", desc: "Opções disponíveis em embalagens de 100g e 150g.", image: "https://i.postimg.cc/xCVBH6BF/drageas.jpg" },
  { id: 37, name: "Drágeas Morango 100g", category: "DRÁGEAS", desc: "", image: "https://i.postimg.cc/5NDg66hv/dragea-morango.jpg" },
  { id: 38, name: "Drágeas Banana 100g", category: "DRÁGEAS", desc: "", image: "https://i.postimg.cc/JzWY4pH2/drageas-banana.jpg" },
  { id: 39, name: "Drágeas Castanha de Caju 100g", category: "DRÁGEAS", desc: "", image: "https://i.postimg.cc/Hnw5S9Wk/drag-caju.jpg" },
  { id: 40, name: "Drágeas Castanha do Pará 100g", category: "DRÁGEAS", desc: "", image: "https://i.postimg.cc/Hnw5S9Wk/drag-caju.jpg" },
  { id: 41, name: "Drágeas Crocante 70% 100g", category: "DRÁGEAS", desc: "", image: "https://i.postimg.cc/pT03mKMd/drag-70.webp" },
  { id: 42, name: "Drágeas Crocante Café 100g", category: "DRÁGEAS", desc: "", image: "https://i.postimg.cc/bYSjZFdc/drage-cafe.jpg" },
  { id: 43, name: "Drágeas Crocante Maracujá 100g", category: "DRÁGEAS", desc: "", image: "https://i.postimg.cc/8zPK6jwv/drageas-maracu.jpg" },

  // CAIXAS, CESTAS E PRESENTES
  { id: 44, name: "Cestas", category: "CAIXAS, CESTAS E PRESENTES", desc: "", image: "https://i.postimg.cc/CLvC9JHz/cesta-flory.jpg" },
  { id: 45, name: "Chocolate Sortido", category: "CAIXAS, CESTAS E PRESENTES", desc: "Opções de 100g, 200g e 400g", image: "https://i.postimg.cc/P5wLKM6r/chocosortido.jpg" },
  { id: 46, name: "Corações 100g", category: "CAIXAS, CESTAS E PRESENTES", desc: "", image: "https://i.postimg.cc/PfCdy3xs/coracoes-100g.jpg" },

  // OUTROS
  { id: 47, name: "100% Cacau em Pó 250g", category: "OUTROS", desc: "", image: "https://i.postimg.cc/4yykSdZK/po-choco-quente.jpg" },
  { id: 48, name: "Pirulitos", category: "OUTROS", desc: "", image: "https://i.postimg.cc/Nf4Yt25y/pirulito.jpg" }
];

const whatsappNumber = "5554999008909";
const fallbackImage = "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80";

let activeCategory = "Todos";

function renderProducts() {
  const productsGrid = document.getElementById("productsGrid");
  const searchInput = document.getElementById("searchInput");
  
  if (!productsGrid) return;

  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";

  const filtered = products.filter(p => {
    const matchesCategory = activeCategory === "Todos" || p.category.toUpperCase() === activeCategory.toUpperCase();
    const matchesSearch = p.name.toLowerCase().includes(searchTerm) || p.desc.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    productsGrid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 30px; font-size: 0.85rem;">Nenhum produto encontrado.</p>`;
    return;
  }

  productsGrid.innerHTML = filtered.map(p => {
    const imageSrc = p.image ? p.image : fallbackImage;
    const whatsText = encodeURIComponent(`Olá! Gostaria de consultar a disponibilidade e valor do produto: *${p.name}*`);
    const whatsLink = `https://wa.me/${whatsappNumber}?text=${whatsText}`;
    const descHtml = p.desc ? `<p style="font-size: 0.7rem; color: #666; margin-bottom: 8px; line-height: 1.2;">${p.desc}</p>` : '';

    return `
      <div class="product-card">
        <div class="product-img-wrapper">
          <span class="product-badge">${p.category}</span>
          <img src="${imageSrc}" alt="${p.name}" referrerpolicy="no-referrer" onerror="this.src='${fallbackImage}'" />
        </div>
        <div class="product-content">
          <h3 class="product-title">${p.name}</h3>
          ${descHtml}
          <a href="${whatsLink}" target="_blank" class="btn-consult-whats">
            <i class="fa-brands fa-whatsapp"></i> Consultar no WhatsApp
          </a>
        </div>
      </div>
    `;
  }).join("");
}

function initCatalog() {
  const searchInput = document.getElementById("searchInput");
  const categoryButtons = document.querySelectorAll(".cat-btn");

  if (searchInput) {
    searchInput.addEventListener("input", renderProducts);
  }

  categoryButtons.forEach(btn => {
    btn.addEventListener("click", function() {
      categoryButtons.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      activeCategory = this.getAttribute("data-category");
      renderProducts();
    });
  });

  renderProducts();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCatalog);
} else {
  initCatalog();
}