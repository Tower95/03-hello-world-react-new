
const getResult = (name) => {
  return `hola como estas ${name}`
}

const FirstApp = () => {

  return (
    <>
      {/* <h1>{JSON.stringify(newMessages)}</h1> */}
      {getResult('ismael')}
      <p>soy un subtitulo</p>
    </>
  )
}

export default FirstApp
