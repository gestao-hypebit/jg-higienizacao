import Image from "next/image";
import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import QuoteForm from "@/components/QuoteForm";
import { RevealObserver } from "@/components/Effects";
import { CareIcon, Icon, InstagramIcon, PinIcon, WhatsAppIcon } from "@/components/icons";
import {
  INSTAGRAM, INSTAGRAM_HANDLE, WHATSAPP_LABEL,
  benefits, careDo, careDont, faq, howItWorks, results, services, steps, waLink,
} from "@/lib/site";
import jeffersonHero from "@/public/jefferson-hero-hd.jpg";
import avatar from "@/public/jefferson-avatar.jpg";
import logoFull from "@/public/logo-jg.png";
import poltronaAntes from "@/public/fotos/poltrona-antes.jpg";
import poltronaDepois from "@/public/fotos/poltrona-depois.jpg";
import cadeiraDepois from "@/public/fotos/cadeira-depois.jpg";
import carroDepois from "@/public/fotos/carro-depois.jpg";

const ORCAMENTO = waLink("Olá, J.G! Quero um orçamento de limpeza de estofado.");

export default function Home() {
  return (
    <>
      <Header />

      <main id="topo">
        {/* HERO */}
        <section className="hero">
          <div className="hero-visual">
            <Image src={jeffersonHero} quality={90} alt="Jefferson, responsável pela J.G Limpeza e Higienização" priority placeholder="blur" sizes="(max-width: 980px) 100vw, 48vw" />
          </div>
          <div className="wrap hero-grid">
            <div className="hero-text">
              <h1>
                Seu sofá <em>limpo de verdade</em>, sem sair de casa.
              </h1>
              <p className="lead">
                Limpeza e higienização de sofás, poltronas, cadeiras, tapetes e bancos de carro em Franca/SP
                e região. Vamos até a sua casa e tiramos de dentro do tecido a sujeira que o olho não vê.
              </p>
              <div className="cta-row">
                <a className="btn primary big" href={ORCAMENTO} target="_blank" rel="noopener">
                  <WhatsAppIcon /> Pedir orçamento grátis
                </a>
                <a className="btn line big" href="#resultados">Ver antes e depois</a>
              </div>
              <a className="hero-proof" href="#resultados">
                <span className="thumbs" aria-hidden="true">
                  <Image src={poltronaDepois} alt="" width={64} height={64} />
                  <Image src={carroDepois} alt="" width={64} height={64} />
                  <Image src={cadeiraDepois} alt="" width={64} height={64} />
                </span>
                <span>
                  <b>Veja trabalhos reais</b>
                  <small>Poltronas, cadeiras e bancos de carro limpos em Franca e região</small>
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section className="sec white" id="servicos">
          <div className="wrap">
            <div className="sec-head reveal">
              <h2>O que a gente limpa</h2>
              <p>Cada tecido pede um cuidado diferente. Antes de começar, avaliamos o material, as manchas e o tipo de uso para escolher o produto e a técnica certos.</p>
            </div>
            <ul className="bento">
              {services.map((s, i) => {
                const href = waLink(`Olá, J.G! Quero um orçamento de limpeza de ${s.name.toLowerCase()}.`);
                const kind = i === 0 ? " feat" : i === services.length - 1 ? " wide" : "";
                return (
                  <li key={s.name} className={`card svc reveal${kind}`}>
                    {i === 0 && <span className="feat-bg" aria-hidden="true"><CareIcon name={s.icon} /></span>}
                    <span className="svc-ico"><CareIcon name={s.icon} /></span>
                    <div className="svc-body">
                      {i === 0 && <span className="feat-k">Nosso serviço mais pedido</span>}
                      <h3>{s.name}</h3>
                      <p>{s.text}</p>
                    </div>
                    {i === 0
                      ? <a className="btn light big" href={href} target="_blank" rel="noopener"><WhatsAppIcon /> Orçamento para sofá</a>
                      : <a className="link" href={href} target="_blank" rel="noopener">Pedir orçamento</a>}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* POR QUE HIGIENIZAR */}
        <section className="sec">
          <div className="wrap why">
            <div className="why-photos reveal">
              <figure>
                <Image src={poltronaAntes} alt="Poltrona amarela com mancha no assento, antes da limpeza" sizes="(max-width: 980px) 50vw, 25vw" placeholder="blur" />
                <figcaption className="chip">Antes</figcaption>
              </figure>
              <figure>
                <Image src={poltronaDepois} alt="A mesma poltrona depois da limpeza da J.G" sizes="(max-width: 980px) 50vw, 25vw" placeholder="blur" />
                <figcaption className="chip blue">Depois</figcaption>
              </figure>
            </div>
            <div className="why-text reveal">
              <h2>Por que higienizar o estofado?</h2>
              <p>O sofá é um dos móveis mais usados da casa, e um dos menos limpos. Passar pano ou aspirador tira só o que está por cima. O que fica dentro da espuma continua lá, em contato com a sua família todos os dias.</p>
              <ul className="benefits">
                {benefits.map((b) => (
                  <li key={b.title}>
                    <span className="ico-box"><Icon name={b.icon} /></span>
                    <div>
                      <h3>{b.title}</h3>
                      <p>{b.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* COMO FUNCIONA */}
        <section className="sec blue" id="como-funciona">
          <div className="wrap">
            <div className="sec-head reveal">
              <h2>Como funciona o atendimento</h2>
              <p>Tudo resolvido pelo WhatsApp, do orçamento ao agendamento. No dia marcado, a gente vai até você.</p>
            </div>
            <ol className="timeline">
              {howItWorks.map((h, i) => (
                <li key={h.title} className="reveal">
                  <span className="tl-n">{i + 1}</span>
                  <span className="tl-ico"><Icon name={h.icon} /></span>
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                </li>
              ))}
            </ol>
            <div className="timeline-cta reveal">
              <a className="btn light big" href={ORCAMENTO} target="_blank" rel="noopener"><WhatsAppIcon /> Começar pelo passo 1</a>
            </div>
          </div>
        </section>

        {/* ETAPAS DA LIMPEZA */}
        <section className="sec white">
          <div className="wrap process">
            <div className="process-side reveal">
              <h2>O que fazemos no seu estofado</h2>
              <p>Um processo completo em seis etapas, pensado para limpar a fundo sem agredir o tecido.</p>
              <figure className="process-photo">
                <Image src={cadeiraDepois} alt="Cadeira estampada depois da limpeza da J.G" sizes="(max-width: 980px) 100vw, 38vw" placeholder="blur" />
                <figcaption className="chip blue">Resultado final</figcaption>
              </figure>
            </div>
            <ol className="plist">
              {steps.map((s, i) => (
                <li key={s.tag} className="reveal">
                  <span className="pn">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <span className="ptag">{s.tag}</span>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* RESULTADOS */}
        <section className="sec" id="resultados">
          <div className="wrap">
            <div className="sec-head reveal">
              <h2>Resultados reais</h2>
              <p>Trabalhos feitos pela J.G em Franca e região. Arraste a linha de cada foto para comparar o antes e o depois.</p>
            </div>
            <div className="ba-grid">
              {results.map((r, i) => <BeforeAfter key={r.before} {...r} big={i === 0} />)}
              <div className="insta reveal">
                <span className="insta-ico"><InstagramIcon /></span>
                <p><b>Tem muito mais no Instagram</b>Outros resultados e depoimentos de clientes.</p>
                <a className="btn line" href={INSTAGRAM} target="_blank" rel="noopener"><InstagramIcon />Ver no Instagram</a>
              </div>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section className="sec white" id="sobre">
          <div className="wrap about">
            <div className="about-photo reveal">
              <Image src={jeffersonHero} quality={90} alt="Jefferson, da J.G Limpeza e Higienização" placeholder="blur" sizes="(max-width: 980px) 100vw, 42vw" />
            </div>
            <div className="about-text reveal">
              <h2>Quem cuida do seu estofado</h2>
              <p>A J.G Limpeza e Higienização é comandada pelo Jefferson. É ele quem avalia o seu estofado, explica com sinceridade o que dá para fazer e acompanha o serviço do começo ao fim.</p>
              <p>Você fala direto com quem faz o trabalho, sem intermediários. Se uma mancha não vai sair por completo, a gente avisa antes de começar.</p>
              <ul className="checks col">
                <li><Icon name="check" />Avaliação honesta antes de qualquer serviço</li>
                <li><Icon name="check" />Produto e técnica certos para cada tecido</li>
                <li><Icon name="check" />Atendimento próximo, do orçamento ao pós-serviço</li>
              </ul>
              <a className="btn primary big" href={waLink("Olá, Jefferson! Vim pelo site da J.G.")} target="_blank" rel="noopener"><WhatsAppIcon /> Falar com o Jefferson</a>
            </div>
          </div>
        </section>

        {/* CUIDADOS */}
        <section className="sec blue care-sec">
          <div className="wrap">
            <div className="sec-head reveal">
              <h2>Cuidados depois da limpeza</h2>
              <p>Algumas atitudes simples ajudam na secagem e mantêm o estofado limpo por muito mais tempo.</p>
            </div>
            <div className="care-grid">
              <div className="care-panel do reveal">
                <div className="care-top">
                  <span className="care-sign"><Icon name="check" /></span>
                  <h3>Faça</h3>
                </div>
                <ul>
                  {careDo.map((c) => (
                    <li key={c.title}>
                      <Icon name={c.icon} className="care-ico" />
                      <div><b>{c.title}</b><p>{c.text}</p></div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="care-panel dont reveal">
                <div className="care-top">
                  <span className="care-sign"><Icon name="x" /></span>
                  <h3>Evite</h3>
                </div>
                <ul>
                  {careDont.map((c) => (
                    <li key={c.title}>
                      <Icon name={c.icon} className="care-ico" />
                      <div><b>{c.title}</b><p>{c.text}</p></div>
                    </li>
                  ))}
                </ul>
                <a className="btn light" href={waLink("Olá, J.G! Tenho uma dúvida sobre os cuidados com o estofado.")} target="_blank" rel="noopener"><WhatsAppIcon /> Tirar uma dúvida</a>
              </div>
            </div>
          </div>
        </section>

        {/* ORÇAMENTO */}
        <section className="sec white quote" id="orcamento">
          <div className="wrap">
            <div className="side reveal">
              <h2>Peça seu orçamento</h2>
              <p>Marque as peças e envie direto para o nosso WhatsApp. Respondemos com o valor e combinamos o melhor dia para ir até você.</p>
              <div className="contact-lines">
                <a href={waLink()} target="_blank" rel="noopener"><span className="ico-box"><WhatsAppIcon /></span><span><small>WhatsApp</small>{WHATSAPP_LABEL}</span></a>
                <a href={INSTAGRAM} target="_blank" rel="noopener"><span className="ico-box"><InstagramIcon /></span><span><small>Instagram</small>{INSTAGRAM_HANDLE}</span></a>
                <div><span className="ico-box"><PinIcon /></span><span><small>Atendimento</small>Franca/SP e região</span></div>
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>

        {/* FAQ */}
        <section className="sec faq" id="duvidas">
          <div className="wrap">
            <div className="reveal">
              <h2>Perguntas frequentes</h2>
              <p className="faq-sub">Não achou sua dúvida? Chame no WhatsApp que a gente responde.</p>
            </div>
            <div className="reveal">
              {faq.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer>
        <div className="wrap foot-grid">
          <div className="foot-brand">
            <a className="foot-logo" href="#topo" aria-label="JG Limpeza e Higienização, início">
              <Image src={logoFull} alt="J.G Limpeza e Higienização Profissional" height={112} />
            </a>
            <p>Limpeza e higienização profissional de estofados em Franca/SP e região.</p>
          </div>
          <div>
            <h4>Serviços</h4>
            <ul>{services.map((s) => <li key={s.name}>{s.name}</li>)}</ul>
          </div>
          <div>
            <h4>Navegação</h4>
            <ul>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#como-funciona">Como funciona</a></li>
              <li><a href="#resultados">Resultados</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#duvidas">Dúvidas</a></li>
            </ul>
          </div>
          <div>
            <h4>Contato</h4>
            <ul>
              <li><a href={waLink()} target="_blank" rel="noopener">WhatsApp {WHATSAPP_LABEL}</a></li>
              <li><a href={INSTAGRAM} target="_blank" rel="noopener">{INSTAGRAM_HANDLE}</a></li>
              <li>Franca/SP e região</li>
            </ul>
          </div>
        </div>
        <div className="wrap foot-bottom">
          <span>© {new Date().getFullYear()} J.G Limpeza e Higienização. Todos os direitos reservados.</span>
        </div>
      </footer>

      <a className="talk" href={waLink("Olá, Jefferson! Vim pelo site da J.G.")} target="_blank" rel="noopener" aria-label="Falar com o Jefferson no WhatsApp">
        <span className="talk-label">Fale com o Jefferson</span>
        <span className="talk-avatar">
          <Image src={avatar} alt="" width={56} height={56} />
          <i><WhatsAppIcon /></i>
        </span>
      </a>
      <RevealObserver />
    </>
  );
}
