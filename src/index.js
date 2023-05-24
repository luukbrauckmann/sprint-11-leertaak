import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import compression from 'compression'
import helmet from 'helmet'

import startPage from './routes/start-page.js'
import partnersPage from './routes/partners-page.js'
import { fontawesome } from './helpers/fontawesome.js'
import { addPlayer, removePlayer, players, setPlayer } from './helpers/socket.js'

const app = express()
const server = http.createServer(app)
const socket = new Server(server)

const port = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.set('views', 'src/views')
app.set('trust proxy', true)

app.use(compression())
app.use(helmet())
app.use(express.static('src/public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

fontawesome(app)

/**
 * Routes
 * Use seperate route files
 */
app.use(startPage)
app.use(partnersPage)


/**
 * Create socket connection
 */
socket.on('connection', (client) => {
	const player = {
		id: client.id,
		checkedIn: false
	}
	addPlayer(player)
	socket.emit('players', players)
	client.on('disconnect', () => {
		removePlayer(client.id)
		socket.emit('players', players)
	})

	client.on('players', (player) => {
		setPlayer(player)
		socket.emit('players', players)
	})
})

server.listen(port, () => console.log(`Example app listening on port http://localhost:${port}/`))