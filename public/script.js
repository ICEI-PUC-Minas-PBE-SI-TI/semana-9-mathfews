const data = {
    "produtos": [
      {
        "id": 1,
        "nome": "Smartphone Galaxy S23",
        "preco": 3499.90,
        "categoria": "Celulares",
        "imagem": "https://images.samsung.com/is/image/samsung/p6pim/br/2302/gallery/br-galaxy-s23-s911-sm-s911bzekzto-534840703?$Q90_684_547_JPG$",
        "descricao": "Smartphone com 128GB de armazenamento, câmera de alta resolução e excelente desempenho.",
        "emEstoque": true
      },
      {
        "id": 2,
        "nome": "Notebook Dell Inspiron 15",
        "preco": 4599.00,
        "categoria": "Notebooks",
        "imagem": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/15-3530-intel/media-gallery/black/notebook-inspiron-15-3530-nt-plastic-usbc-data-black-gallery-4.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=642&qlt=100,1&resMode=sharp2&size=642,402&chrss=full",
        "descricao": "Notebook com processador Intel i7, 16GB de RAM e SSD de 512GB, ideal para trabalho e estudos.",
        "emEstoque": false
      },
      {
        "id": 3,
        "nome": "Tablet iPad Air",
        "preco": 5299.00,
        "categoria": "Tablets",
        "imagem": "https://www.apple.com/v/ipad-air/ah/images/overview/closer-look/all-colors/slide_1A__u8zw91uc6iaq_large.jpg",
        "descricao": "Tablet com chip M1, tela Liquid Retina de 10,9 polegadas e suporte para Apple Pencil.",
        "emEstoque": true
      },
      {
        "id": 4,
        "nome": "Headset Sony WH-1000XM5",
        "preco": 2199.00,
        "categoria": "Áudio",
        "imagem": "https://m.media-amazon.com/images/I/61vJtKbAssL._AC_UF1000,1000_QL80_.jpg",
        "descricao": "Headset com cancelamento de ruído líder da indústria e excelente qualidade sonora.",
        "emEstoque": false
      },
      {
        "id": 5,
        "nome": "Monitor LG UltraWide 29\"",
        "preco": 1299.00,
        "categoria": "Monitores",
        "imagem": "https://www.lg.com/content/dam/channel/wcms/br/images/produtos/it/29wk600-w/1-1600-29wk600-w.jpg/jcr:content/renditions/thum-1600x1062.jpeg?w=800",
        "descricao": "Monitor UltraWide com resolução Full HD e HDR10 para maior imersão e produtividade.",
        "emEstoque": true
      },
      {
        "id": 6,
        "nome": "Teclado Mecânico Keychron K2",
        "preco": 649.00,
        "categoria": "Periféricos",
        "imagem": "https://keychronbrasil.com.br/cdn/shop/files/Keychron-K2-Max-QMK-Wireless-Custom-Mechanical-Keyboard-RGB-Backlight-Aluminum-Frame-75percent-Layout-Fully-Assembled-for-Mac-Windows-Linux-Hot-Swappable-Keychron-Super-Red.jpg?v=1724441551&width=1080",
        "descricao": "Teclado mecânico wireless com layout compacto de 75% e retroiluminação RGB.",
        "emEstoque": false
      },
      {
        "id": 7,
        "nome": "Mouse Logitech MX Master 3S",
        "preco": 549.90,
        "categoria": "Periféricos",
        "imagem": "https://m.media-amazon.com/images/I/51nvDczrU+L.jpg",
        "descricao": "Mouse ergonômico avançado com cliques silenciosos e sensor de 8K DPI.",
        "emEstoque": false
      },
      {
        "id": 8,
        "nome": "Smartwatch Apple Watch Series 8",
        "preco": 3299.00,
        "categoria": "Wearables",
        "imagem": "https://imgs.casasbahia.com.br/1573150624/1xg.jpg",
        "descricao": "Smartwatch avançado com sensores de saúde, detecção de queda e tela sempre ativa.",
        "emEstoque": true
      }
    ]
  }
const produtos = data.produtos
const cards = document.querySelectorAll(".card")
const renderizar = document.getElementById("btnRender")
const product_list = document.getElementById("product-list")
const search = document.getElementById("search")
const category_button = document.getElementById("category")
function formatPrice(preco) {
  return `R$ ${preco.toFixed(2)}`
}

function createProductCard(produto) {
  let card = document.createElement('div')
  card.classList.add("card")
  card.setAttribute("data-id", produto.id)
  let title = document.createElement('h2')
  title.classList.add("card-title")
  title.textContent = produto.nome
  let categoryUL = document.createElement('ul')
  categoryUL.classList.add("card-category-section")
  let category = document.createElement('li')
  category.classList.add("card-category")
  category.textContent = produto.categoria
  categoryUL.appendChild(category)
  let content = document.createElement('p')
  content.classList.add("card-content")
  content.textContent = produto.descricao
  card.appendChild(title)
  card.appendChild(categoryUL)
  card.appendChild(content)
  return card
}

function renderCategories() {
  const category_selector = document.querySelector("#category")
  const categories = new Set()
  produtos.forEach((product) => {
    categories.add(product.categoria)
  })
  todas = document.createElement('option')
  todas.value = "todas"
  todas.textContent = "Todas"
  category_selector.appendChild(todas)
  categories.forEach((category) => {
    option = document.createElement('option')
    option.value = category.toLowerCase()
    option.textContent = category
    category_selector.appendChild(option)
  })
}

function showProductDetails(produto) {
  const selected = produtos.filter(item => item.nome.toLowerCase() == produto.toLowerCase())[0]
  const details = document.getElementById("product-details")
  let situation = selected.emEstoque ? "Tem no estoque" : "Não tem no estoque"
  details.innerHTML = `        <ul>
            <li>Nome: ${selected.nome}</li>
            <li>Preço: ${formatPrice(selected.preco)}</li>
            <li>Categoria: ${selected.categoria}</li>
            <li>Status de estoque: ${situation}</li>
            <li>Descrição:</li>
            <ul>
                <li>${selected.descricao}</li>
            </ul>
            <li><img src="${selected.imagem}" alt=""></li>
        </ul>`
}

function filterProductsByName(texto) {
  return produtos.filter(produto => produto.nome.toLowerCase().includes(texto.toLowerCase()))
}

function filterProductsByCategory(categoria) {
  return produtos.filter(produto => produto.categoria.toLowerCase() == categoria.toLowerCase())
}
window.addEventListener('load', renderCategories)


category_button.addEventListener("change", () => {
  product_list.replaceChildren("")
  let texto = category_button.value
  let products = filterProductsByCategory(texto)
  products.forEach((product) => {
    let card = createProductCard(product)
    product_list.appendChild(card)
  })
})


renderizar.addEventListener("click", () => {
  let texto = search.value
  let categoria = category_button.value
  product_list.replaceChildren("")
  if (categoria == "todas") {
    if (search.value == "") {
      produtos.forEach((produto) => {
        let card = createProductCard(produto)
        product_list.appendChild(card)
      })
    }
    else {
      const products = filterProductsByName(texto)
      products.forEach((produto) => {
        let card = createProductCard(produto)
        product_list.appendChild(card)
      })
    }
  }
  else {
    if (search.value == "") {
      let products = filterProductsByCategory(categoria)
      products.forEach((produto) => {
        let card = createProductCard(produto)
        product_list.appendChild(card)
      })
    }
  }
})