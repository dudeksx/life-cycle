import {
	Component,
	OnChanges,
	OnInit,
	SimpleChanges,
	Input,
} from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.css'],
})
export class TitleComponent implements OnInit, OnChanges {
	// nome: string = 'Usuário';
	@Input() nome: string = '';

	constructor() {
		console.log(`Event Constructor. ${this.nome}`);
	}
	ngOnChanges(changes: SimpleChanges): void {
		console.log(
			`Evento OnChanges, ocorre quando uma mudança é implementada em um componente. ${this.nome}`
		);
	}
	ngOnInit(): void {
		this.nome = `Olá ${this.nome}`;
		console.log(
			`Evento OnInit, é o evento que ocorre na concepção de um componente. ${this.nome}`
		);
	}
}
