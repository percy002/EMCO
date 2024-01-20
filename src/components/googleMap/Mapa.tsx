import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Mapa() {
  return (
    <GoogleMapsEmbed
      apiKey="AIzaSyAKfoI8Ub2OdH7KKxwdZssW0LxF55EizJU"
      mode="place"
      q="-16.391167,-71.519028"
      height={400}
      style={"width:100%; height:100%"}
      allowfullscreen={true}
      loading={"eager"}
    />
  );
}
