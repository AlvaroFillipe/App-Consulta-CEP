function getDadosCep(cep) {
    //declarando url que vai pesquisar o cep
    var url = "https://viacep.com.br/ws/"+cep+"/json/"


    //declrando ajax
    var ajax = new XMLHttpRequest()


    //abrindo ajax
    ajax.open('GET', url,)

    //declarando funcao que vai verificar se a requisição foi feita com sucesso
    ajax.onreadystatechange = ()=>{
        if (ajax.readyState == 4 && ajax.status == 200){
            //declarando texto de json para objeto que pode sermanejado
            var dataJson = ajax.responseText
            var dataJsonObj = JSON.parse(dataJson)
            
            //declarando onjetos e seus respectivod valores nos inputs
            document.getElementById('Endereco').value = dataJsonObj['logradouro']
            document.getElementById('Bairro').value = dataJsonObj['bairro']
            document.getElementById('Cidade').value = dataJsonObj['localidade']
            document.getElementById('UF').value = dataJsonObj['uf']             
        }
    }

    ajax.send()





}