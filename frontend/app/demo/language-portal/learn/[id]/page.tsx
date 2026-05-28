import Link from "next/link";
import { notFound } from "next/navigation";
import { getExercise } from "../../lib/exercises";
import { ExerciseGate } from "../../components/ExerciseGate";

export default async function ExercisePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const exercise = getExercise(id);

  if (!exercise) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <ExerciseGate exercise={exercise} />
      <p className="mt-6 text-center text-xs text-muted-foreground">
        <Link href="/demo/language-portal/learn" className="underline underline-offset-4">
          ← Ruta / Всі вправи
        </Link>
      </p>
    </div>
  );
}
