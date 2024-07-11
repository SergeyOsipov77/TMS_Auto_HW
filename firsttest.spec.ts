import superagent from 'superagent'
describe("Test", () => {
   const BASE_URL ='https://jsonplaceholder.typicode.com'
  it("Получение всех постов", async () => {
   const response = await superagent.get(`${BASE_URL}/posts`)
   
   expect(response.body).not.toBeNull()
   expect(response.status).toBe(200)
    
  });
});