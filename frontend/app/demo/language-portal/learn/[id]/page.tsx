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
    <div className="mx-auto w-full max-w-5xl px-6 py-12 md:py-20">
      <ExerciseGate exercise={exercise} />
    </div>
  );
}
