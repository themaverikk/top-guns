const express = require('express')
const { createProxyMiddleware } = require("http-proxy-middleware")

const port = process.env.PORT || 8000
const dev = process.env.NODE_ENV !== 'production'

const apiPaths = {
    '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
            '^/api': '/api'
        },
        changeOrigin: true
    }
}

const isDevelopment = process.env.NODE_ENV !== 'production'


const server = express()

if (isDevelopment) {
    server.use('/api', createProxyMiddleware(apiPaths['/api']));
}

server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
});