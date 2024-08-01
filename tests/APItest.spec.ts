import superagent from "superagent";

describe("TestGET", () => {
    const Base_URL = 'https://reqres.in/';

    it("LIST USERS", async () => {
        const response = await superagent.get(`${Base_URL}api/users?page=2`);
        expect(response.status).toBe(200);
    });

    it("SINGLE USER", async () => {
        const response = await superagent.get(`${Base_URL}api/users/2`);
        expect(response.body).toBeDefined();
    });

    it("SINGLE USER NOT FOUND", async () => {
        const response = await superagent.get(`${Base_URL}api/users/23`);
        expect(response.status).toBe(404);
    });

    it("LIST <RESOURCE>", async () => {
        const response = await superagent.get(`${Base_URL}api/unknown`);
        expect(response.status).toBe(200);
    });

    it("SINGLE <RESOURCE>", async () => {
        const response = await superagent.get(`${Base_URL}api/unknown/2`);
        expect(response.status).toBe(200);
    });

    it("SINGLE <RESOURCE> NOT FOUND", async () => {
        const response = await superagent.get(`${Base_URL}api/users/23`);
        expect(response.status).toBe(404);
    });

});

describe("TestPOST", () => {
    const Base_URL = 'https://reqres.in/';
    it("CREATE", async () => {
        const response = await superagent.post(`${Base_URL}api/users`).send({
                "name": "morpheus",
                "job": "leader"
            })
    
        expect(response.status).toBe(201);
    });
});

describe("TestPUT", () => {
    const Base_URL = 'https://reqres.in/';
    it("UPDATE", async () => {
        const response = await superagent.put(`${Base_URL}api/users/2`).send({
             "name": "morpheus",
              "job": "zion resident"
            })
    
        expect(response.status).toBe(200);
    });
});

describe("TestPATCH", () => {
    const Base_URL = 'https://reqres.in/';
    it("UPDATE NAME", async () => {
        const response = await superagent.patch(`${Base_URL}api/users/2`).send({
             "name": "morpheus",
            })
    
        expect(response.status).toBe(200);
    });
});

describe("TestDELETE", () => {
    const Base_URL = 'https://reqres.in/';

    it("DELETE USER", async () => {
        const response = await superagent.delete(`${Base_URL}api/users/2`);
        expect(response.status).toBe(204);
    });
});