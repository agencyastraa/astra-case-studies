export type Category = "all" | "dtc" | "saas" | "healthcare" | "services";

export interface CaseStudy {
  id: string;
  category: Category;
  categoryLabel: string;
  region: string;
  client: string;
  tagline: string;

  // Hero metric — the one number that tells the whole story
  heroMetric: string;
  heroCaption: string;

  // Supporting metrics (2–4)
  metrics: { value: string; label: string }[];

  // Narrative
  challenge: string;      // What was broken before Astra
  solution: string;       // What Astra actually did
  outcome: string;        // Specific, measurable result

  // Testimonial
  quote: string;
  quoteName: string;
  quoteRole: string;
  quotePhoto: string;     // path in /public, e.g. "/photo-client.png"

  // Optional: logo path
  logo?: string;
}

// ─────────────────────────────────────────────
// REPLACE EACH ENTRY WITH REAL CLIENT DATA
// ─────────────────────────────────────────────
export const cases: CaseStudy[] = [
  {
    id: "cliente-1",
    category: "dtc",
    categoryLabel: "DTC Ecommerce",
    region: "LATAM",
    client: "Cliente 1",
    tagline: "Producto físico · LATAM",

    heroMetric: "3x",
    heroCaption: "Volumen de órdenes diarias en 75 días",

    metrics: [
      { value: "−50%", label: "Costo por adquisición" },
      { value: "75 días", label: "Tiempo al resultado" },
      { value: "100/día", label: "Órdenes al cierre" },
      { value: "$0", label: "Presupuesto adicional" },
    ],

    challenge:
      "El founder manejaba los ads solo, sin visibilidad de qué funcionaba. Cada vez que subía el presupuesto, el CPA subía también. El creative estaba quemado y el crecimiento se había detenido.",

    solution:
      "Mapeamos los ads ganadores de su categoría en los últimos 90 días, producimos creative en batch con los ángulos que ya estaban convirtiendo en el mercado, y reconstruimos el funnel para velocidad. El founder dejó de gestionar ads.",

    outcome:
      "De 35 órdenes por día a más de 100 en 75 días. Tuvieron que pausar por quiebre de stock — un problema que nunca habían tenido antes.",

    quote:
      "Pasamos de 35 órdenes al día a más de 100 en 75 días. Tuvimos que pausar porque nos quedamos sin inventario, un problema que nunca había tenido antes.",
    quoteName: "Nombre Apellido",
    quoteRole: "CEO · Cliente 1 · País",
    quotePhoto: "/placeholder-photo.png",
  },
  {
    id: "cliente-2",
    category: "saas",
    categoryLabel: "B2B SaaS",
    region: "LATAM · 12 países",
    client: "Cliente 2",
    tagline: "SaaS vertical · 12 países",

    heroMetric: "8–12/mes",
    heroCaption: "Nuevos clientes firmando cada mes, en autopiloto",

    metrics: [
      { value: "12 países", label: "Cobertura simultánea" },
      { value: "0 viajes", label: "El equipo de ventas dejó de volar" },
      { value: "Predecible", label: "Pipeline mes a mes" },
      { value: "Sin headcount", label: "Crecimiento sin nuevas contrataciones" },
    ],

    challenge:
      "Operaban en 12 países pero casi cada nuevo cliente venía de un referido o de un vuelo que su equipo de ventas tomaba. El crecimiento era real pero completamente dependiente del esfuerzo humano.",

    solution:
      "Construimos un motor de adquisición paga localizado y un chatbot que pre-califica prospectos antes de que el equipo de ventas los toque. El equipo dejó de volar para prospectar.",

    outcome:
      "Pipeline predecible en 12 países simultáneamente, sin agregar headcount. 8 a 12 nuevos clientes firmando cada mes en autopiloto.",

    quote:
      "Éramos completamente dependientes de referidos. Ahora tenemos 8 a 12 nuevos clientes firmando cada mes en 12 países, en autopiloto.",
    quoteName: "Nombre Apellido",
    quoteRole: "CEO · Cliente 2 · País",
    quotePhoto: "/placeholder-photo.png",
  },
  {
    id: "cliente-3",
    category: "healthcare",
    categoryLabel: "Healthcare",
    region: "Venezuela",
    client: "Cliente 3",
    tagline: "Multi-sede · Healthcare",

    heroMetric: "Atribución total",
    heroCaption: "Cada campaña trazable a pacientes que pagaron",

    metrics: [
      { value: "21 días", label: "De kickoff a reportes con ingresos atribuidos" },
      { value: "Canal a canal", label: "Visibilidad de revenue por canal" },
      { value: "$1M+/mes", label: "Operación bajo gestión" },
      { value: "0 adivinanzas", label: "Decisiones basadas en datos reales" },
    ],

    challenge:
      "Manejaban una operación de $1M+/mes pero sus cuentas de ads eran una caja negra. Los reportes mostraban leads, clics e impresiones — nada atado a qué campañas trajeron pacientes que pagaron.",

    solution:
      "Reconstruimos la atribución desde la fuente, mapeando actividad de ads a pacientes en su CRM. El equipo dejó de optimizar en leads y empezó a optimizar en revenue por canal.",

    outcome:
      "En 21 días desde el kickoff, cada dólar en la cuenta de ads tenía un nombre de paciente al lado. Pausar una campaña dejó de ser un juego de azar.",

    quote:
      "Estábamos gastando dinero real en ads cada mes y no podíamos decirte qué campaña trajo un paciente que pagara. Astra arregló eso. Ahora cada dólar en la cuenta tiene un nombre al lado.",
    quoteName: "Nombre Apellido",
    quoteRole: "Gerente General · Cliente 3 · País",
    quotePhoto: "/placeholder-photo.png",
  },
  {
    id: "cliente-4",
    category: "dtc",
    categoryLabel: "DTC Ecommerce",
    region: "LATAM",
    client: "Cliente 4",
    tagline: "Ecommerce · LATAM",

    heroMetric: "PLACEHOLDER",
    heroCaption: "Métrica principal del caso",

    metrics: [
      { value: "XX%", label: "Métrica 1" },
      { value: "XX días", label: "Métrica 2" },
      { value: "XX", label: "Métrica 3" },
      { value: "XX", label: "Métrica 4" },
    ],

    challenge: "PLACEHOLDER: Describe el problema principal del cliente antes de trabajar con Astra.",
    solution: "PLACEHOLDER: Describe qué hizo Astra para resolver el problema.",
    outcome: "PLACEHOLDER: Describe el resultado específico y medible.",

    quote: "PLACEHOLDER: Cita del cliente en sus propias palabras.",
    quoteName: "Nombre Apellido",
    quoteRole: "Cargo · Empresa · País",
    quotePhoto: "/placeholder-photo.png",
  },
];
