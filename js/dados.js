function validar() {

    if(document.getElementById('nome').value.length <3 || document.getElementById('nome').value.length > 15) {
        alert("O nome deve ter entre 3 e 15 caracteres");
        document.getElementById('nome').focus();
        return false;
    }

    else if(document.getElementById('sobrenome').value.length <3 || document.getElementById('sobrenome').value.length > 15) {
        alert("O sobrenome deve ter entre 3 e 15 caracteres");
        document.getElementById('sobrenome').focus();
        return false;
    }

     else if(document.getElementById('CPF').value.length != 11) {
    alert("O CPF deve ter um total de 11 dígitos.");
    document.getElementById('CPF').focus();
        return false;
    }

     else if(document.getElementById('Cep').value.length != 8) {
            alert("O cep está inválido.");
            document.getElementById('Cep').focus();
            return false;
        }

        else if(document.getElementById('mail').value == "" || document.getElementById('email').value.indexOf("@") || document.getElementById('email').document.getElementById.indexOf(".")) {
                alert("Digite um e-mail válido.");
                document.getElementById('mail').focus();
                return false;
            }
            else {
                alert("Formulário enviado com sucesso!");
                return;
            }
}

function testaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
  if (strCPF == "00000000000") return false;
  
  for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
  
  Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if ((Resto == 10) || (Resto == 11))  Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
    return true;
  }
  
  function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('estado').value=("");
    document.getElementById('ibge').value=("");
  }
  
  function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('estado').value=(conteudo.uf);
    document.getElementById('IBGE').value=(conteudo.ibge);
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
  }
  
  function pesquisacep(valor) {
  
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');
  
  //Verifica se campo cep possui valor informado.
  if (cep != "") {
  
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;
  
    //Valida o formato do CEP.
    if(validacep.test(cep)) {
  
        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('estado').value="...";
        document.getElementById('IBGE').value="...";
  
        //Cria um elemento javascript.
        var script = document.createElement('script');
  
        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
  
        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);
  
    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
  } //end if.
  else {
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
  }
  };
