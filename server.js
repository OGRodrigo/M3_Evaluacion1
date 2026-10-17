import express from 'express'
import cors from 'cors'
import { paises, clubes } from './datos.js'

const app = express()
app.use(cors())

const PORT = 3000

// 👉 aquí van tus rutas

app.get('/api/clubes', (req, res) => {
    const { pais } = req.query
    
    if (!pais) {
        return res.status(200).json(clubes)
    }

    const paisEncontrado = paises.find(
        item => item.nombre.toLowerCase() === pais.toLowerCase()
    )

    if (!paisEncontrado) {
        return res.status(404).json({ error: `No existe el país ${pais}` })
    }

    const clubesDelPais = clubes.filter(club => club.paisId === paisEncontrado.id)

    res.status(200).json(clubesDelPais)
})

app.get('/api/clubes/:id', (req, res) => {
    const id = Number(req.params.id)

    const club = clubes.find(club => club.id === id)

    if (!club) {
        return res.status(404).json({ error: `No existe el club ${id}` })
    }

    res.status(200).json(club)
})

app.get('/api/titulos/:club', (req, res) => {
    const nombreClub = req.params.club

    const clubEncontrado = clubes.find(
        club => club.nombre.toLowerCase() === nombreClub.toLowerCase()
    )

    if (!clubEncontrado) {
        return res.status(404).json({ error: `No existe el club ${nombreClub}` })
    }
    
    res.status(200).json(clubEncontrado.titulos)

})

app.listen(PORT, () => {
  console.log(`🏆 API escuchando en http://localhost:${PORT}`)
})