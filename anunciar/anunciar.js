var dataa = new Date();
var dia = String(dataa.getDate()).padStart(2, '0');
var mes = String(dataa.getMonth() + 1).padStart(2, '0');
var ano = dataa.getFullYear();

dataAtual = dia + '/' + mes + '/' + ano;


function enviaMsg() {
    const xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
      console.log("readyState:" + this.readyState);
      console.log("status:" + this.status);
  
      if (this.readyState == 4 && this.status == 200) {
        imprimeResposta(this);
      }
    };
  
    xhttp.onload = function() {
      document.getElementById("resposta").innerHTML = this.responseText;
    };
    var data = {
    "id_usuario": 1,
    "nome": document.getElementById("titulo").value,
    "descricao": document.getElementById("descricao").value,
    "condicao": document.getElementById("condicao").value,
    "lance_min": document.getElementById("lance").value,
    };
    var jsondata = JSON.stringify(data);
    var url = "https://yfiy1y2e06.execute-api.us-east-1.amazonaws.com/teste";
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhttp.send(jsondata);
  }
  
  function imprimeResposta(xml) {
    var xmlDoc = xml.responseXML;
    console.log(xmlDoc)
    document.getElementById("resposta").innerHTML = xmlDoc;
  }