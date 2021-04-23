export default interface ICocktail {
  id: string
  name: string | null
  img: string | null
  instructions: string | null
  ingredients: string[]
}