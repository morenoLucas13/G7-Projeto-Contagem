module.exports =
    function midLogConsole(req, res, next) {
        let data = new Date();

        console.log('\n\n----------');
        console.log('--- Atendendo rota em: ', data.toISOString());
        console.log('--- metodo: ', req.method);
        console.log('--- path: ', req.url);
        console.log('--- params: ', req.params);
        console.log('--- body: ', req.body);
        console.log('----------');

        next(); //Chamar o próximo middleware
    }