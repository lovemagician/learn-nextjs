import { API_URL } from "../app/(home)/page";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function Credits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div>
      <p>CREDITS</p>
      {credits.map((credit) => (
        <div>
          <p key={credit.id}>{credit.name}</p>
          <img key={credit.id} src={credit.profile_path} />
          <span key={credit.id}>{credit.character}</span>
        </div>
      ))}
    </div>
  );
}
