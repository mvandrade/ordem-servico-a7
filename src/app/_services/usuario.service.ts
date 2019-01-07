import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Usuario } from '../_models';
import { MFAST_API} from '../app.api';

@Injectable( { providedIn: 'root' } )
export class UsuarioService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Usuario[]>(`${MFAST_API}/usuarios`);
    }

    getById(id: number) {
        return this.http.get(`${MFAST_API}/usuarios/` + id);
    }

    register(usuario: Usuario) {
        return this.http.post(`${MFAST_API}/usuarios`, usuario);
    }

    update(usuario: Usuario) {
        return this.http.put(`${MFAST_API}/usuarios/` + usuario.id, usuario);
    }

    delete(id: number) {
        return this.http.delete(`${MFAST_API}/usuarios/` + id);
    }
}