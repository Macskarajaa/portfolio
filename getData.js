const getData=async (URL,renderFn)=>{
    try {
        const response = await fetch(URL)
        const data = await response.json()
        renderFn(data)
    }catch (error){
        console.log(error)
    }
}