confirm("Are you sure you want to delete?")
$(document).ready(function(){

    $(".mudaTela").click(function(){
        mudaTela( $(this), $(this).attr("nova"), $(this).attr("animacao"), $(this).attr("tempoAnimacao") );
    });

    $("a.opcoes").click(function(e){
        e.preventDefault();
        $("div.opcoes").slideToggle(500);
    });

    $(".calendario .marcado").click(function(){
        mostraMsgMes($(this).attr("value"));
    });

    const mudaTela = ( atual, nova = null, animacao = "fade", tempoAnimacao = 900 ) => {

        // define a nova tela
        if(!nova){
            nova = parseInt(atual.parent().attr("id").split("tela")[1])+1;
        }

        if(animacao == "fade"){
            $("#tela"+(nova-1)).fadeOut(tempoAnimacao);
            setTimeout(() => {
                $("#tela"+nova).fadeIn(tempoAnimacao)
            }, tempoAnimacao);
        }else{
            $("#tela"+(nova-1)).hide(tempoAnimacao);
            $("#tela"+nova).show(tempoAnimacao);
        }

        if($("#tela"+nova).hasClass("temporizado")){
            $("#tela"+nova+" div").hide();
            telaTemporizada(nova, 0);
        }

        verificaFundo(nova);
        $("html, body").animate({ scrollTop: 0 }, "slow");
        if(nova == 5){
            var audio = new Audio('assets/musica.mp3');
            audio.volume = 0.1;
            audio.play();
        }
        
    }

    const telaTemporizada = ( nTela, contador ) =>{

        const tela = $("#tela"+nTela+" div:eq("+contador+")");
        const temporizador = 500;
        const temporizadorPrimeiraTela = (contador==0?$("#tela"+nTela).attr("tempo"):temporizador);

        setTimeout(() => {
            tela.fadeIn(temporizador);

            setTimeout(() => {
                tela.fadeOut(temporizador);
                if(tela.attr("final") == "true"){
                    mudaTela(null, nTela+1, "fade", 900);
                    verificaFundo(nTela+1);
                }else{
                    telaTemporizada(nTela, contador+1);
                }

            }, tela.attr("tempo") );

        }, temporizadorPrimeiraTela);
        
    }

    const verificaFundo = (nTela) =>{

        const fundo = $("#tela"+nTela).attr("fundo");
        const tempo = $("#tela"+nTela).attr("tempo");

        if(fundo){
            $("body").attr("class", fundo);            
        }
        
    }

    const mostraMsgMes = (texto) =>{

        let titulo;
        let mensagem;

        switch(texto){

            case "29/10/22": titulo = "29/10/22"; mensagem = "<p> Um role ai kkk, não lembro ao certo, mas estavam Eu, voçê, Diogo, Yas, joão, eu so sei que foi algum jogo! </p>";break;

            case "30/10/22": titulo = "29/10/22"; mensagem = "<p> Pizzaria, foi niver de kayan ou de Alan? rsrsrs, rapaz nesse dia tu tava queimada, parecendoo um camarão </p>";break;

            case "05/11/22": titulo = "05/11/22"; mensagem = "<p> Estava eu na festa de Maria em Guarajuba nem preciso dizer muito neh rsrs o video fala por si só!! </p>";break;
            
            case "13/11/22": titulo = "13/11/22"; mensagem = "<p> Foi finalmente a Praia de Guarajuba rsrsrs. Quando a onda pega a gente, jamais esquecemos ksksks </p>";break;

            case "14/11/22": titulo = "14/11/22"; mensagem = "<p> Comemos aqui um waffles kkk e eu fiuei te pertubando com a musica dos titans! </p>";break;

            case "24/11/22": titulo = "24/11/22"; mensagem = "<p> O Jogo do BRASIL que a gente viu no shopping, quem sabe sabe, um bolão </p>";break;

            case "26/11/22": titulo = "26/11/22"; mensagem = "<p> Aniversario de Yas, uma galera alternativa ksksks com virada p 27/11 </p>";break;

            case "02/12/22": titulo = "02/12/22"; mensagem = "<p> E la vamos nos de novo ver o outro jogo, so que na sua casa esse ein rsrs, foi muita festa, dança e alegria avançamos mais uma fase, ps eu n lembro quando perderam kkk </p>";break;

            case "05/12/22": titulo = "05/12/22"; mensagem = "<p> Para mim esse foi o melhor jogo do Brasil, tanto pela goleada, quanto por motivos pessoais!!!! </p>";break;

            case "12/12/22": titulo = "12/12/22"; mensagem = "<p> Foi quando eu te informei, ESTAMOS NAMORANDO VIU kkkk </p>";break;
            
            case "15/12/22": titulo = "15/12/22"; mensagem = "<p> Va la ver nas fotos, lembro nao kkk!!!! </p>";break;

            case "22/12/22": titulo = "22/12/22"; mensagem = "<p> Comprei um relogio e to indo p SSA, depois a gente se fala sksksksk! </p>";break;

            case "31/12/22": titulo = "31/12/22"; mensagem = "<p> Oh a virada de Ano agente junto, pq separo ia ser um erro sksksks!  </p>" ;break;

            case "04/01/23": titulo = "04/01/23"; mensagem = "<p> Fomos no Shopping e nossa naquele dia, voçê como de costume estava radiante!  </p>" ;break;
    
            case "06/01/23": titulo = "06/01/23"; mensagem = "<p> Olha so a gente no Fulo!! rsrs eu adorei esse dia, nao foi o do casaco? eu sei que nao, foi no premium so n lembro o dia </p>" ;break;

            case "07/01/23": titulo = "07/01/23"; mensagem = "<p> Olha so Aniversario de Caio e fomos para o Parque Shopping rsrs! </p>" ;break;

            case "15/01/23": titulo = "15/01/23"; mensagem = "<p> Incontestavelmente o pior dia kkk, foi a pizza de Kayan que geral passou mal!!!! </p>" ;break;

            case "24/01/23": titulo = "24/01/23"; mensagem = "<p> A gente foi ver e levou os meninos em o GATO DE BOTAS!!! NSS como eu adorei kkkk um otimo filme vc tem que concordar!!!!! </p>" ;break;

            case "29/01/23": titulo = "29/01/23"; mensagem = "<p> Um dia de Sorvete na Inoocop, com uma carinha de fome rsrsr </p>" ;break;

            case "04/02/23": titulo = "04/02/23"; mensagem = "<p> A GRANDE FESTA DE KET kkkkk, otimo dia, nunca mais ok? </p>" ;break;

            case "18/02/23": titulo = "18/02/23"; mensagem = "<p> HUM estavamos em guarajuba, e estavamos no trem, foi um otimo drink, mas eu nao lembro o que a gente comeu kkk! </p>" ;break;

            case "21/02/23": titulo = "21/02/23"; mensagem = "<p> A primeira vez que fomos e conheçemos a tia de Yas rsrsrs  </p>" ;break;

            case "04/03/23": titulo = "04/03/23"; mensagem = "<p> Viva, IHUU parque de diversoes e fotos desajeitadas kkk asmei!  </p>" ;break;

            case "05/03/23": titulo = "05/03/23"; mensagem = "<p> MEU ANIVERSARIO e parando para pensar kkk eu comecei a conhecer sua familia ksksks e vc tambem ganhou de lavada de mim no tiro de airsoft no shopping  </p>" ;break;

            case "01/04/23": titulo = "01/04/23"; mensagem = "<p> AAA Fiz uma tattoo Nova kkk e voce bancou kkk esse dia foi louco ein e ela ta aqui ate hoje eu doido para fazer mais  </p>" ;break;

            case "08/04/23": titulo = "08/04/23"; mensagem = "<p> Foi hamburguer na sua casa, com a galera toda, foi muito legal esse dia eu e Joao, fizemos a noite   </p>" ;break;

            case "20/05/23": titulo = "20/05/23"; mensagem = "<p>  Vei nem acredito voce me levou para um festa, estavamos no Viiixe, que louco  </p>" ;break;

            case "30/05/23": titulo = "30/05/23"; mensagem = "<p> Seu Aniversario, aaa foi dahora nao foi nao???? vamo repetir a dose!!!!  </p>" ;break;

            case "30/05/23": titulo = "30/05/23"; mensagem = "<p> Seu Aniversario, aaa foi dahora nao foi nao???? vamo repetir a dose!!!! Te dei flores foi um dia e tanto neh rsrs  </p>" ;break;

            case "03/06/23": titulo = "03/06/23"; mensagem = "<p> Comemoracao de verdade do s eu Aniversario, aaa foi dahora nao foi nao???? vamo repetir a dose!!!! Fomos para o Garage e enfim foi divertido, mitas emocoes e um rombo kkkk   </p>" ;break;

            case "12/06/23": titulo = "12/06/23"; mensagem = "<p> E então chegou o dia dos namorados a coisa mais fofa do mundo com 6 doritos, chocolates e um quadro que tenhos até hoje!! </p>" ;break;

            case "18/06/23": titulo = "18/06/23"; mensagem = "<p> Niver de Davi, foi um pao de alho top top top mto gostoso nossa amor temos que ir la de novo </p>" ;break;

            case "04/07/23": titulo = "04/07/23"; mensagem = "<p> Eu nao sei, so que foi um role na sua casa, com a galera e estavamos combinando nossa estavamos muito muito muito bonitos juntos rsrs </p>" ;break;

            case "06/07/23": titulo = "06/07/23"; mensagem = "<p> O pior dia para ti, eu ia partir para o CAPÂO kkk nss amor valeu a pena de mais! </p>" ;break;

            case "12/08/23": titulo = "12/08/23"; mensagem = "<p> Mais um mes e eu so lembro de estar apagado de sono na sua cama kkk, nss esse dia foi uma longa tarde de sono </p>" ;break;

            case "19/08/23": titulo = "19/08/23"; mensagem = "<p> Peguei a moto de Leo, nossa amor kkk foi uma aventura maluca, foi incrivel me marcou demais kk espero que a voce tambem!!! e paramos em guarajuba kkk </p>" ;break;

            case "02/09/23": titulo = "02/09/23"; mensagem = "<p> E entao mesmo me tremendo eu fui conhecer sua familia kkkk, rapaz eu sou o cara viu kkk nao e por nada nao mas  ganhei eles, na verdade voce que ganhou na mega sena amor, por que homem como eu nao existe outro igual kkk </p>" ;break;

            case "21/10/23": titulo = "21/10/23"; mensagem = "<p> E ja tao perto do fim, fomos tambem em um Show de Stand-Up Comedy!!! Foi muito incrivel, sem igual, serio rimos muito e foi a primeira vez que foi longe das telas do youtube </p>" ;break;


            
        }

        mostraPopUp(true, titulo, mensagem);
        telaFinal = (texto=="final"?true:false);
    }

    

});

let telaFinal = false;

const mostraPopUp = (mostrar, titulo = "Título de testes", mensagem = "Mensagem de teste...") =>{

    if(mostrar){
        $("html, body").animate({ scrollTop: $(".pop-up")[0].offsetTop }, "smooth");
        $(".pop-up").fadeIn(500);
        $(".pop-up h1").html(titulo);
        $(".pop-up div").html(mensagem);
        $(".container").css("opacity", "0.5");
    }else{
        $(".pop-up").fadeOut(500);
        $(".container").css("opacity", "1");

        if(telaFinal){
            $("#tela19").fadeOut(4000);
            setTimeout(() => {
                $("#tela20").fadeIn(6500);
                $("body").attr("class", "fundo6");    
                $("html, body").animate({ scrollTop: 0 }, "slow");
            }, 4000);
        }

    }

}