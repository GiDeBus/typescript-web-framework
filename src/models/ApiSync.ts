import axios, { AxiosPromise } from 'axios';

interface HasID { 
  id?: number;
}

export default class ApiSync<T extends HasID> { 

  private rootUrl: string;
  
  constructor(rootUrl: string) { 
    this.rootUrl = rootUrl
  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  };
  

  save(data: T): AxiosPromise {
    const id = data.id;
  
    if (id) {
     return  axios.put(`${this.rootUrl}/${id}`, data);
    } else { 
      return axios.post(this.rootUrl, data);
    }
  };
}
