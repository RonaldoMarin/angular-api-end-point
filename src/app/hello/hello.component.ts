import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent implements OnInit {
  data: any[] = []; // Inicializar a propriedade 'data' como um array vazio

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((data) => {
        this.data = data; // Atribuir os dados à variável 'data' do componente
        console.log(this.data); // Fazer o processamento dos dados recebidos aqui
      });
  }
}
