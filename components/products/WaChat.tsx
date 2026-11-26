import { WhatsAppIcon } from '@/components/ui/Icons';

/* Chat de WhatsApp con un pedido de DEMOSTRACIÓN (cliente "Ana"). Decorativo: aria-hidden */
export function WaChat() {
  return (
    <div className="wa-chat" aria-hidden="true">
      <div className="wa-chat__top">
        <i><WhatsAppIcon /></i>
        <div>
          Tu restaurante<small>Pedido nuevo</small>
        </div>
      </div>
      <div className="wa-msg">
        <b>🧾 Nuevo pedido</b>
        <br />Cliente: Ana
        <br />━━━━━━━━━━
        <br />1× Tacos de camarón · $90
        <br />&nbsp;&nbsp;+ extra aguacate
        <br />1× Tostada mixta · $120
        <br />━━━━━━━━━━
        <br /><b>Total: $215</b>
        <div className="t">12:41 ✓✓</div>
      </div>
    </div>
  );
}
