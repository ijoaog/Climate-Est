//const express = require('express');

fetch("http://localhost:5500/api").then(res => res.json()).then(console.log)
let arraydiasemana = {};

(async () => {
    
    arraydiasemana = await fetch("http://localhost:5500/api")
        .then(res => {
        return res.json();
        })
        .catch(err => {
            console.log('ERROR')
        });
    //Comandos para enviar no HTML
    function telaNoite() {
        document.getElementById("imagemdia").style.display = 'none';
        document.getElementById("imagemnoite").style.display = '';
    }
    
    function telaDia() {
        document.getElementById("imagemnoite").style.display = 'none';
        document.getElementById("imagemdia").style.display = '';
        document.getElementById("imagemdia").style.opacity = 0.6;
    }
 


/////////////////////////////////////////////// nao obteve sucesso em conseguir um "for" pois não foi passado ao async
    document.getElementById("button-seg").addEventListener("click", () => {
        document.getElementById("button-noite").addEventListener("click", () => {
            telaNoite()
            document.getElementById("imagemdia").style.display = 'none';
            document.getElementById("imagemnoite").style.display = '';
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Segunda.noite.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Segunda.noite.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Segunda.noite.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Segunda.noite.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Segunda.noite.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Segunda.noite.windSpeed.min + 'mph'
            
        })
    
        document.getElementById("button-dia").addEventListener("click", () => {
            telaDia()
            document.getElementById("imagemnoite").style.display = 'none';
            document.getElementById("imagemdia").style.display = '';
            document.getElementById("imagemdia").style.opacity = 0.6;
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Segunda.dia.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Segunda.dia.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Segunda.dia.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Segunda.dia.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Segunda.dia.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Segunda.dia.windSpeed.min + 'mph'
        })

    }) 
    document.getElementById("button-ter").addEventListener("click", () => {
        document.getElementById("button-noite").addEventListener("click", () => {
            telaNoite()
            document.getElementById("imagemdia").style.display = 'none';
            document.getElementById("imagemnoite").style.display = '';
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Terca.noite.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Terca.noite.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Terca.noite.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Terca.noite.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Terca.noite.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Terca.noite.windSpeed.min + 'mph'
            
        })
    
        document.getElementById("button-dia").addEventListener("click", () => {
            telaDia()
            document.getElementById("imagemnoite").style.display = 'none';
            document.getElementById("imagemdia").style.display = '';
            document.getElementById("imagemdia").style.opacity = 0.6;
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Terca.dia.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Terca.dia.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Terca.dia.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Terca.dia.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Terca.dia.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Terca.dia.windSpeed.min + 'mph'
        })
    })
    document.getElementById("button-qua").addEventListener("click", () => {
        document.getElementById("button-noite").addEventListener("click", () => {
            telaNoite()
            document.getElementById("imagemdia").style.display = 'none';
            document.getElementById("imagemnoite").style.display = '';
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Quarta.noite.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Quarta.noite.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Quarta.noite.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Quarta.noite.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Quarta.noite.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Quarta.noite.windSpeed.min + 'mph'
            
        })
    
        document.getElementById("button-dia").addEventListener("click", () => {
            telaDia()
            document.getElementById("imagemnoite").style.display = 'none';
            document.getElementById("imagemdia").style.display = '';
            document.getElementById("imagemdia").style.opacity = 0.6;
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Quarta.dia.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Quarta.dia.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Quarta.dia.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Quarta.dia.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Quarta.dia.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Quarta.dia.windSpeed.min + 'mph'
        })
    })
    document.getElementById("button-qui").addEventListener("click", () => {
        document.getElementById("button-noite").addEventListener("click", () => {
            telaNoite()
            document.getElementById("imagemdia").style.display = 'none';
            document.getElementById("imagemnoite").style.display = '';
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Quinta.noite.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Quinta.noite.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Quinta.noite.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Quinta.noite.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Quinta.noite.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Quinta.noite.windSpeed.min + 'mph'
            
        })
    
        document.getElementById("button-dia").addEventListener("click", () => {
            telaDia()
            document.getElementById("imagemnoite").style.display = 'none';
            document.getElementById("imagemdia").style.display = '';
            document.getElementById("imagemdia").style.opacity = 0.6;
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Quinta.dia.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Quinta.dia.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Quinta.dia.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Quinta.dia.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Quinta.dia.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Quinta.dia.windSpeed.min + 'mph'
        })
    })
    document.getElementById("button-sex").addEventListener("click", () => {
        document.getElementById("button-noite").addEventListener("click", () => {
            telaNoite()
            document.getElementById("imagemdia").style.display = 'none';
            document.getElementById("imagemnoite").style.display = '';
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Sexta.noite.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Sexta.noite.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Sexta.noite.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Sexta.noite.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Sexta.noite.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Sexta.noite.windSpeed.min + 'mph'
            
        })
    
        document.getElementById("button-dia").addEventListener("click", () => {
            telaDia()
            document.getElementById("imagemnoite").style.display = 'none';
            document.getElementById("imagemdia").style.display = '';
            document.getElementById("imagemdia").style.opacity = 0.6;
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Sexta.dia.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Sexta.dia.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Sexta.dia.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Sexta.dia.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Sexta.dia.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Sexta.dia.windSpeed.min + 'mph'
        })
    })
    document.getElementById("button-sab").addEventListener("click", () => {
        document.getElementById("button-noite").addEventListener("click", () => {
            telaNoite()
            document.getElementById("imagemdia").style.display = 'none';
            document.getElementById("imagemnoite").style.display = '';
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Sabado.noite.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Sabado.noite.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Sabado.noite.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Sabado.noite.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Sabado.noite.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Sabado.noite.windSpeed.min + 'mph'
            
        })
    
        document.getElementById("button-dia").addEventListener("click", () => {
            telaDia()
            document.getElementById("imagemnoite").style.display = 'none';
            document.getElementById("imagemdia").style.display = '';
            document.getElementById("imagemdia").style.opacity = 0.6;
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Sabado.dia.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Sabado.dia.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Sabado.dia.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Sabado.dia.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Sabado.dia.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Sabado.dia.windSpeed.min + 'mph'
        })
    })
    document.getElementById("button-dom").addEventListener("click", () => {
        document.getElementById("button-noite").addEventListener("click", () => {
            telaNoite()
            document.getElementById("imagemdia").style.display = 'none';
            document.getElementById("imagemnoite").style.display = '';
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Domingo.noite.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Domingo.noite.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Domingo.noite.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Domingo.noite.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Domingo.noite.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Domingo.noite.windSpeed.min + 'mph'
            
        })
    
        document.getElementById("button-dia").addEventListener("click", () => {
            telaDia()
            document.getElementById("imagemnoite").style.display = 'none';
            document.getElementById("imagemdia").style.display = '';
            document.getElementById("imagemdia").style.opacity = 0.6;
            document.getElementById("temperaturemax").innerHTML = arraydiasemana.data.Domingo.dia.temperature.max + '°F'
            document.getElementById("temperaturecurr").innerHTML = arraydiasemana.data.Domingo.dia.temperature.curr + '°F'
            document.getElementById("temperaturemin").innerHTML = arraydiasemana.data.Domingo.dia.temperature.min + '°F'
            document.getElementById("windmax").innerHTML = arraydiasemana.data.Domingo.dia.windSpeed.max + 'mph'
            document.getElementById("windcurr").innerHTML = arraydiasemana.data.Domingo.dia.windSpeed.curr + 'mph'
            document.getElementById("windmin").innerHTML = arraydiasemana.data.Domingo.dia.windSpeed.min + 'mph'
        })
    })

    
})();

    
