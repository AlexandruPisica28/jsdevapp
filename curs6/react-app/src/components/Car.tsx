type CarProps = {
  brand: string;
  id: number; // sau string, după caz
};

export default function Car({ brand, id }: CarProps) {
  return <li>{id} - I am a {brand}</li>;
}