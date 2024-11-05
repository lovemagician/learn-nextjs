import Credits from "../../../../../components/movie-credits";

export default function CreditsPage({ params: { id } }: { params: { id: string } }) {
  return <Credits id={id} />;
}
