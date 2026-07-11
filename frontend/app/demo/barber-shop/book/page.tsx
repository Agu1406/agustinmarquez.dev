import { BookingForm } from "../components/BookingForm";

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-accent">Reservas</p>
      <h1 className="mt-1 text-center font-heading text-3xl font-semibold">Reserva tu cita</h1>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted-foreground">
        Flujo de reserva simulado en tres pasos. Sin backend: la confirmación se guarda
        en localStorage del navegador.
      </p>
      <div className="mt-10">
        <BookingForm />
      </div>
    </div>
  );
}
