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