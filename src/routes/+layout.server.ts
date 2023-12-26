import type { LayoutServerLoad } from "./$types";
import { SPOTIFY_BASE_URL } from "$env/static/private";

export const load: LayoutServerLoad = async ({ cookies, fetch }) => {
  const accessToken = cookies.get("access_token");
  if (!accessToken) {
    return {
      user: null,
    };
  }

  const profileRes = await fetch(`${SPOTIFY_BASE_URL}/me`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  // console.log(profileRes);
  // console.log(await profileRes.json());

  if (profileRes.ok) {
    const profile: SpotifyApi.CurrentUsersProfileResponse =
      await profileRes.json();
    return {
      user: profile,
    };
  } else {
    return {
      user: null,
    };
  }
};
