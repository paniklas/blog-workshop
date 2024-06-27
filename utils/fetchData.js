export const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
    if(!response.ok){
      throw new Error("Something Went Wrong")
    }
    return response.json()
}