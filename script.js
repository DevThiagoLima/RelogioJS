function atualizarRelogio() {
  const agora = new Date();

  const opcoes = {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  };

  const partes = new Intl.DateTimeFormat("pt-BR", opcoes)
    .formatToParts(agora);

  const horas = partes.find(p => p.type === "hour").value;
  const minutos = partes.find(p => p.type === "minute").value;
  const segundos = partes.find(p => p.type === "second").value;

  document.getElementById("hours").textContent = horas;
  document.getElementById("minutes").textContent = minutos;
  document.getElementById("seconds").textContent = segundos;

  atualizarFundo(parseInt(horas));
}

function atualizarFundo(hora) {
  const body = document.body;

  if (hora >= 5 && hora < 12) {
    body.style.backgroundImage = "url('./imagens/manha.jpg')";
  } else if (hora >= 12 && hora < 18) {
    body.style.backgroundImage = "url('./imagens/tarde.jpg')";
  } else {
    body.style.backgroundImage = "url('./imagens/noite.jpg')";
  }
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);
