import { BookingForm } from "../components/BookingForm";
import { SectionHeading } from "../components/SectionHeading";

export default function BookPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <SectionHeading
        eyebrow="Reservas online"
        title="Reserva tu cita en Ikaro"
        description="Garantiza tu hueco en Las Rozas. Flujo simulado en tres pasos — la confirmación se guarda en tu navegador."
      />
      <div className="mt-10">
        <BookingForm />
      </div>
    </div>
  );
}
