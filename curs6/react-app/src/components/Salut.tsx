
export default function Salut(props: { nume: string, curs?: string }) {
  let element;
  console.log(typeof props.curs);
  if (props.curs !== undefined) {
    element = (
      <>
        <h1>Informatii</h1>
        <div>Salut {props.nume} si sunt inscri la cursul de {props.curs}</div>
      </>
    )
  }
  else {
    element = <div>Salut {props.nume}</div>;
  }
  return (

    element
  )
}
