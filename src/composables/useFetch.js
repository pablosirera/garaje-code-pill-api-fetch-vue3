export const useFetch = () => {
  const list = async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()

      return data
    } catch (error) {
      console.error(error)
    }
  }

  return {
    list
  }
}
