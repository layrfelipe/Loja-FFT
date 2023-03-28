export const products = [
	{
		"uid": "camisa-assis",
		"name": "#RÉV | Assis",
		"category": "camisa",
		"price": 99,
		"headline": "Uma homenagem ao grande Carrasco Tricolor",
		"concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod risus quis aliquam tristique. Nullam tincidunt nulla nibh, nec fringilla augue tristique a. Donec mattis turpis non quam pharetra faucibus. Ut sollicitudin cursus commodo. Sed lobortis, massa eu dapibus porta, libero velit pretium ante, auctor pharetra ante lorem ut lectus.",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"status": "disponivel",
		"image_path": "/images/products/camisa-assis.jpg"
	},
	{
		"uid": "camisa-cartola",
		"name": "#GSO | Cartola",
		"category": "camisa",
		"price": 119,
		"headline": "Nossa homenagem ao ilustre tricolor mestre Cartola",
		"concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod risus quis aliquam tristique. Nullam tincidunt nulla nibh, nec fringilla augue tristique a. Donec mattis turpis non quam pharetra faucibus. Ut sollicitudin cursus commodo. Sed lobortis, massa eu dapibus porta, libero velit pretium ante, auctor pharetra ante lorem ut lectus.",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"status": "esgotado",
		"image_path": "/images/products/camisa-cartola.jpg"
	},
	{
		"uid": "camisa-futebol-sem-preconceito",
		"name": "Futebol sem preconceito",
		"category": "camisa",
		"price": 109,
		"headline": "Nossa campanha pelo mês da visibilidade LGBTQIA+",
		"concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod risus quis aliquam tristique. Nullam tincidunt nulla nibh, nec fringilla augue tristique a. Donec mattis turpis non quam pharetra faucibus. Ut sollicitudin cursus commodo. Sed lobortis, massa eu dapibus porta, libero velit pretium ante, auctor pharetra ante lorem ut lectus.",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"status": "disponivel",
		"image_path": "/images/products/camisa-futebol-sem-preconceito.jpg"
	},
	{
		"uid": "camisa-chico-guanabara",
		"name": "Herdeiros de Chico Guanabara",
		"category": "camisa",
		"price": 129,
		"headline": "Uma campanha pelo NOVEMBRO PRETO",
		"concept": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque euismod risus quis aliquam tristique. Nullam tincidunt nulla nibh, nec fringilla augue tristique a. Donec mattis turpis non quam pharetra faucibus. Ut sollicitudin cursus commodo. Sed lobortis, massa eu dapibus porta, libero velit pretium ante, auctor pharetra ante lorem ut lectus.",
		"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		"status": "esgotado",
		"image_path": "/images/products/camisa-chico-guanabara.jpg"		
	},
	{
		"uid": "camisa-420",
		"name": "4:20 DIN-BOL",
		"category": "camisa",
		"price": 119,
		"headline": "Nossa homenagem ao 'HEMP DAY'",
		"concept": "A criminalização da maconha tem origem no racismo e acreditamos que esse debate deve ser ampliado. Pauta constante do futebol, o combate ao racismo precisa se dar não só nas relações, mas na estrutura que o perpetua. Por isso questionamos: quem lucra com a guerra às drogas? Quem se prejudica? Quem paga, afinal, essa conta?",
		"status": "esgotado",
		"description": "Camisa inspirada na selação da Nigéria. Confeccionada em dry-fit com modelagem ajustada ao corpo com gola e punho anatômicos.",
		"image_path": "/images/products/camisa-maconha.jpg"
	}
]

export function getProductByUID(uid) {
	let product = products.filter((p) => {
        return p.uid == uid
    })[0]
	return product;
}

export function getAllProductsUIDs() {
	let productsUIDs = []
	products.forEach((p) => {
		productsUIDs.push(p.uid);
	})
	return productsUIDs;
}

export function getAllProducts() {
	return products;
}