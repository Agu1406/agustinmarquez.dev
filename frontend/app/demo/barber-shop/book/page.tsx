import { BookingForm } from "../components/BookingForm";

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <p className="text-center text-xs uppercase tracking-[0.24em] text-accent">
        Reservas online
      </p>
      <h1 className="mt-1 text-center font-heading text-3xl font-semibold tracking-tight">
        Reserva tu cita en Ikaro
      </h1>
      <p className="mx-auto mt-2 max-w-lg text-center text-sm text-muted-foreground">
        Garantiza tu hueco en Las Rozas. Flujo simulado en tres pasos — la
        confirmación se guarda en tu navegador.
      </p>
      <div className="mt-10">
        <BookingForm />
      </div>
    </div>
  );
}
