/**
 * Endereço público do site, usado em canonical, sitemap, robots e Open Graph.
 * Em produção, defina NEXT_PUBLIC_SITE_URL (ex.: https://www.seudominio.com.br).
 * Na Vercel, sem a variável, usa o domínio de produção do projeto automaticamente.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
).replace(/\/$/, "");

export const BUSINESS_NAME = "J.G Limpeza e Higienização";
export const CITY = "Franca";
export const STATE = "SP";

export const WHATSAPP = "5516999862916";
export const WHATSAPP_LABEL = "(16) 99986-2916";
export const INSTAGRAM = "https://www.instagram.com/jg_limpezaehigienizacao/";
export const INSTAGRAM_HANDLE = "@jg_limpezaehigienizacao";
export const waLink = (text?: string) =>
  `https://wa.me/${WHATSAPP}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export type Service = { name: string; text: string; swatch: string; icon: string };

export const services: Service[] = [
  { name: "Sofás", swatch: "#9aa3ad", icon: "sofa",
    text: "Retráteis, de canto, de tecido ou suede. Higienização completa de assento, encosto e braços." },
  { name: "Poltronas", swatch: "#d6aa3c", icon: "armchair",
    text: "Aquela poltrona favorita, que já pegou a cor de quem senta nela todo dia, volta à cor original." },
  { name: "Cadeiras", swatch: "#c98ea0", icon: "chair",
    text: "Assentos e encostos estofados de jantar e escritório, inclusive os estampados." },
  { name: "Tapetes", swatch: "#a08a6a", icon: "rug",
    text: "Todo tipo de material, do pelo baixo ao felpudo. Limpo, cheiroso e sem ácaros." },
  { name: "Bancos de carro", swatch: "#5a5e64", icon: "seat",
    text: "Bancos de tecido limpos e higienizados. Carro limpo e cheiroso de novo." },
  { name: "Couro", swatch: "#8a5a36", icon: "drop",
    text: "Limpeza e hidratação do couro, no sofá ou no carro, para não ressecar nem rachar." },
];

export const steps = [
  { tag: "Avaliação", title: "Olhar o tecido", text: "Identificamos o material, as manchas e o tipo de sujeira para definir produto e técnica." },
  { tag: "Aspiração", title: "Tirar o pó solto", text: "Aspiração profunda de poeira, migalhas e pelos antes de qualquer produto encostar no tecido." },
  { tag: "Pré-tratamento", title: "Atacar as manchas", text: "Produto específico nas manchas e nas áreas de mais contato: braços, assento e encosto." },
  { tag: "Higienização", title: "Soltar a sujeira", text: "Aplicação e escovação para soltar a sujeira e eliminar fungos, ácaros e bactérias." },
  { tag: "Extração", title: "Puxar de dentro", text: "A extratora injeta e suga ao mesmo tempo, tirando a água suja de dentro da espuma." },
  { tag: "Acabamento", title: "Limpo e cheiroso", text: "Finalização com perfume suave e orientação de secagem para você usar o quanto antes." },
];

/** Fotos em /public/fotos. Sem a foto, o card mostra um tecido ilustrado na cor `fabric`. */
export const results = [
  { title: "Poltrona amarela", sub: "Mancha no assento", before: "/fotos/poltrona-antes.jpg", after: "/fotos/poltrona-depois.jpg", fabric: [226, 186, 52] as const },
  { title: "Banco de carro", sub: "Manchas de líquido", before: "/fotos/carro-antes.jpg", after: "/fotos/carro-depois.jpg", fabric: [104, 108, 116] as const },
  { title: "Cadeira estampada", sub: "Encardido de uso", before: "/fotos/cadeira-antes.jpg", after: "/fotos/cadeira-depois.jpg", fabric: [226, 214, 206] as const },
  { title: "Banco de carro", sub: "Sujeira no assento", before: "/fotos/carro2-antes.jpg", after: "/fotos/carro2-depois.jpg", fabric: [170, 176, 184] as const },
];

export const quoteItems = ["Sofá", "Poltrona", "Cadeiras", "Tapete", "Banco de carro", "Couro", "Outro"];

export const faq = [
  { q: "Vocês vêm até a minha casa?", a: "Sim. A limpeza é feita no local, com equipamento próprio. Você não precisa levar nada a lugar nenhum." },
  { q: "Quanto tempo demora para secar?", a: "Depende do tecido, da espessura da espuma e da ventilação do ambiente. No dia do serviço a gente passa a estimativa para o seu estofado e dá as dicas para secar mais rápido." },
  { q: "Toda mancha sai?", a: "A maioria sai ou clareia bastante. Algumas manchas antigas ou que já tingiram a fibra podem não sair por completo, e a gente avisa isso na avaliação, antes de começar." },
  { q: "Os produtos fazem mal para crianças e pets?", a: "Usamos produtos próprios para higienização de estofados. Depois de seco, o estofado está pronto para o uso normal da família, incluindo crianças e animais." },
  { q: "Como é feito o orçamento?", a: "Pelo WhatsApp. Mande o tipo de peça, o tamanho e, se puder, uma foto. Com isso a gente passa o valor e agenda o dia." },
  { q: "Preciso preparar alguma coisa antes?", a: "Só deixar o estofado livre de objetos e ter uma tomada por perto para o equipamento. O resto é com a gente." },
  { q: "De quanto em quanto tempo devo higienizar?", a: "Para a maioria das casas, uma vez por ano. Com crianças, pets ou alguém com alergia, o ideal é a cada seis meses." },
  { q: "Vocês atendem fora de Franca?", a: "Atendemos Franca e cidades da região. Mande sua cidade pelo WhatsApp que a gente confirma o atendimento." },
];

export const benefits = [
  { icon: "bug", title: "Menos ácaros e fungos", text: "Pele, suor, poeira e umidade se acumulam na espuma e viram o ambiente ideal para ácaros e fungos, ligados a crises de rinite e alergia." },
  { icon: "wind", title: "Fim do mau cheiro", text: "Xixi de pet, suor e bebida derramada penetram no tecido. A extração remove a causa do cheiro, em vez de só disfarçar com perfume." },
  { icon: "layers", title: "Estofado dura mais", text: "A sujeira acumulada age como lixa e desgasta as fibras a cada uso. Higienizar com frequência prolonga a vida do móvel." },
  { icon: "eye", title: "Cor e maciez de volta", text: "Tecido limpo recupera a cor e o toque. Muitas vezes, a limpeza resolve o que parecia pedir um sofá novo." },
] as const;

export const howItWorks = [
  { icon: "camera", title: "Mande uma foto", text: "Pelo WhatsApp, diga qual peça precisa limpar e envie uma foto." },
  { icon: "chat", title: "Receba o orçamento", text: "Respondemos com o valor e as datas disponíveis, sem compromisso." },
  { icon: "calendar", title: "Agende o dia", text: "Você escolhe o melhor dia e horário para receber a equipe." },
  { icon: "van", title: "Limpeza no local", text: "Vamos até você com o equipamento. Você não precisa levar nada." },
] as const;

export const careDo = [
  { icon: "wind", title: "Ventile o ambiente", text: "Janelas abertas e, se puder, um ventilador ligado. O ar circulando acelera a secagem." },
  { icon: "repeat", title: "Aspire toda semana", text: "Tira a poeira e os pelos antes que entrem fundo no tecido." },
  { icon: "paw", title: "Use uma manta para o pet", text: "Protege o lugar preferido do animal de pelos e odores." },
  { icon: "clock", title: "Higienize com frequência", text: "Uma vez por ano; a cada seis meses com crianças, pets ou alérgicos." },
] as const;

export const careDont = [
  { icon: "drop", title: "Usar antes de secar", text: "Sentar no estofado úmido pode marcar o tecido e atrasa a secagem." },
  { icon: "sun", title: "Deixar no sol forte", text: "O sol direto desbota o tecido. Seque à sombra, com o ar circulando." },
  { icon: "hand", title: "Esfregar mancha nova", text: "Esfregar espalha a mancha. Pressione um pano seco ou papel-toalha para absorver." },
] as const;
