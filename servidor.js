const http = require('http');
const cors = require('cors');
const express = require('express');
const axios = require('axios');
const { on } = require('nodemon');
const path = require('path');
const e = require('cors');


const app = express();
const port = 5500


app.use(cors())
app.use(express.json());

app.use("/", express.static(path.join(__dirname, 'static')))

app.get("/api", async (req, res) => {
    try {
        const response = await axios.get("http://api.weather.gov/gridpoints/TOP/31,80/forecast");//.then(response => console.log(v.data))


        let objdia = {
        }

        await response.data.properties.periods.forEach((element) => {


            if (!objdia[alteraData(element.startTime)]) objdia[alteraData(element.startTime)] = {}

            objdia[alteraData(element.startTime)][element.isDaytime ? 'dia' : 'noite'] = {

                temperature: {
                    curr: element.temperature,
                    max: (Number(element.temperature + 10)),
                    min: (Number(element.temperature - 10) - 5) > 0 ? (Number(element.temperature - 10) + 5) : 0
                },
                windSpeed: {
                    curr: Number(element.windSpeed[0]+element.windSpeed[1]),
                    max: Number(element.windSpeed[0]+element.windSpeed[1]) + 5,
                    min: (Number(element.windSpeed[0]+element.windSpeed[1]) - 5) > 0 ? Number(element.windSpeed[0]+element.windSpeed[1]) - 5 : 0
                }

            }

        })

        //console.log(objdia.Domingo.dia.temperature.curr)

        res.json({ data: objdia })

    } catch (error) {
        res.status(500).send({ error: 'something blew up' });
    }
})

app.listen(port, () => {
    console.log(`servidor iniciando na porta ${port}`)
})

function alteraData(x) {
        var buscaDiaSemana = new Date(x);
        const weekday = ["Domingo", "Segunda", "Terca", "Quarta", "Quinta", "Sexta", "Sabado"];
        return weekday[buscaDiaSemana.getDay()];
    }
