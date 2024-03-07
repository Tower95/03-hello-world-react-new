
const getResult = (name) => {
  return `${name}`
}

const FirstApp = ({ name, subTitle }) => {

  return (
    <>
      {/* <h1>{JSON.stringify(newMessages)}</h1> */}
      <h1>{getResult(name)}</h1>
      <p>{subTitle + 1}</p>
    </>
  )
}

export default FirstApp
