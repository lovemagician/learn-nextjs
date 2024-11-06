import Link from "next/link";

import styles from "../styles/movie-credits.module.css";
import { API_URL } from "../app/constants";

async function getCredits(id: string) {
  const response = await fetch(`${API_URL}/${id}/credits`);
  return response.json();
}

export default async function Credits({ id }: { id: string }) {
  const credits = await getCredits(id);
  return (
    <div>
      <div className={styles.credits_nav}>
        <Link href="./">&larr;BACK</Link>
        <p>CREDITS</p>
      </div>
      <div className={styles.container}>
        {credits.map((credit) => (
          <div>
            <p>{credit.name}</p>
            <img src={credit.profile_path} />
            <span>{credit.character}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
