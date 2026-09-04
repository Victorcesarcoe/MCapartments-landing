# Verificação de WhatsApp contextual

Na rota `/#verano-stay`, o browser expôs o CTA da secção com a URL:

`https://wa.me/5521998502505?text=Ol%C3%A1!%20Tenho%20interesse%20no%20Flat%20Verano%20Stay%2C%20Barra%20Ol%C3%ADmpica`

O CTA correspondente de Copacabana continua a usar a mensagem específica `Olá! Tenho interesse no Apto Copacabana, esquina da praia`. O header e o botão flutuante usam o hook `useActiveApartment` para seleccionar a mensagem do apartamento em foco; fora das secções, o header mantém uma mensagem geral e o botão flutuante apresenta a escolha entre os dois apartamentos.

A composição desktop e mobile mantém os CTAs e o botão flutuante acessíveis, sem sobreposição ou quebra visual. O build foi validado com `pnpm run check` e `pnpm run build`; permanece apenas o aviso de chunk JavaScript acima de 500 kB, sem erro de compilação.
