import axios from "axios";

// Si queremos reemplazar axios por fetch sólo hacemos un cambio en este archivo
// No en todos donde hacemos peticiones

export class HttpClient {
  // async get(url: string) {
  //   const { data, status } = await axios.get(url);
  //   console.log({ status });
  //   return { data, status };
  // }

  async get(url: string) {
    const resp = await fetch(url);
    const data = await resp.json();
    return { data, status: resp.status };
  }
}
