let baralho = [];
let continuar = true;

while (continuar) {
  let menu = "\nBaralho de Cartas:\n";
  menu += `Quantidade de cartas no baralho: ${baralho.length}\n`;
  menu += "1. Adicionar uma carta\n";
  menu += "2. Puxar uma carta\n";
  menu += "3. Sair\n";

  let opcao = prompt(menu);

  if (opcao === "1") {
    let nomeDaCarta = prompt("Digite o nome da carta:");
    baralho.push(nomeDaCarta);
    prompt(`${nomeDaCarta} adicionada ao topo do baralho.`);
  } else if (opcao === "2") {
    if (baralho.length === 0) {
      prompt("Nenhuma carta no baralho para puxar.");
    } else {
      let cartaPuxada = baralho.pop();
      prompt(`Carta puxada: ${cartaPuxada}`);
    }
  } else if (opcao === "3") {
    prompt("Encerrando o programa.");
    continuar = false;
  } else {
    prompt("Opção inválida.");
  }
}
