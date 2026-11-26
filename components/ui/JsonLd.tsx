/* Datos estructurados renderizados en el servidor (quedan en el HTML inicial) */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // "<" escapado para que ningún texto pueda cerrar la etiqueta <script>
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
