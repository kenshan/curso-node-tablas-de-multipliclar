const argv = require('yargs')
.option('b',{
    alias: 'base',
    type: 'number',
    demandOption:true,
    describe:'es la base de la tabla de multiplicar'
    
})
// .option('l',{
//     alias: 'listar',
//     type: 'bolean',
//     default:false,
//     describe:'muestra la app en pantalla'
// })
.option('l',{
    alias: 'limite',
    type: 'number',
    default:99,
    describe:'muestra hasta donde multiplicara el numero en pantalla'
})
.check( (argv ,options)=>{
    if( isNaN(argv.b)){
        throw 'La base debe ser un numero'
    }
    return true
}
)
// .check( (argv ,options)=>{
//     if( argv.h >= 100 ){
//         throw 'solo hasta 100'
//     }
//     return true
// }
// )
.argv





module.exports = (argv);