import { useEffect, useState } from 'react';

// import MyList from "./MyList";

const myList = [
  { id: '1', value: 'Fruta' },
  { id: '2', value: 'Legume' },
  { id: '3', value: 'Carne' },
]


export default function MyCount() {

  //useState - Estados e eventos
  // const [count, setCount] = useState(0)

  // function aumentar() {
  //   setCount(count + 1);
  // }

  // function diminuir() {
  //   setCount(count - 1);
  // }

  // if (count > 5) {
  //   return (
  //     <div>
  //       <h1>Contador muito alto!</h1>
  //       <button onClick={aumentar}>Aumentar</button>
  //       <button onClick={diminuir}>Diminuir</button>
  //     </div>
  //   )
  // }


  // return (
  //   <div>
  //     <h1>My Count: {count}</h1>
  //     {/* { count > 9 ? <h1>Value greatfull</h1> : null } */}
  //     <button onClick={aumentar}>Aumentar</button>
  //     <button onClick={diminuir}>Diminuir</button>
  //   </div>
  // )
  const [product, setProducts] = useState(myList)
  const [pesquisa, setPesquisa] = useState('')

  useEffect(() => {
    if (pesquisa) {
      const newList = myList.filter( (item) => {
        return item.value.toLowerCase().includes(pesquisa.toLowerCase())
      })
      setProducts(newList)
    } else {
      setProducts(myList)
    }
  }, [pesquisa])

  return (
    <>
      <h1>Efeitos colaterais</h1>
      <input
        value={pesquisa}//variavel de estado(state variable)
        onChange={(e) => setPesquisa(e.target.value)}//recebe evento de alteracao do input
        placeholder='pesquise aqui'
      />
     
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.value}</h4>
          </div>
        )
      })}

    </>
  )

}